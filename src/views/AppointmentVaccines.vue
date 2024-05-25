<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(appointment, index) in paginatedAppointments" :key="index">
        <el-card class="status-card">
          <div slot="header" class="clearfix">
            <span>{{ appointment.vaccineName }} - 预约疫苗：{{ appointment.vaccine }}</span>
          </div>
          <p><strong>预约日期：</strong> {{ formatDate(appointment.date) }}</p>
          <p><strong>当前状态：</strong> <span :class="statusClass(appointment.status)">{{
              appointmentStatusMessage(appointment.status) }}</span></p>
        </el-card>
      </el-col>
    </el-row>
    <div v-if="!idNumber || appointments.length === 0" class="no-appointments">
      <p>当前没有预约。</p>
    </div>
    <el-pagination v-if="appointments.length > 0" background layout="prev, pager, next" :total="appointments.length"
      :page-size="pageSize" @current-change="handleCurrentChange" class="pagination-fixed">
    </el-pagination>
  </div>
</template>
<script>
import request from '@/utils/request'; 

export default {
  data () {
    return {
      idNumber: '',
      vaccine:'', // 疫苗名称
      appointments: [], // 存储多个预约的数组
      currentPage: 1, // 当前页码
      pageSize: 6 // 每页显示的预约数量
    };
  },
  created () {
    this.initializeIdNumber();
    if (localStorage.getItem("number")) {
      this.fetchAppointments();
    }
  },
  computed: {
    paginatedAppointments () {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.appointments.slice(start, end);
    }
  },
  methods: {
    initializeIdNumber() {
      // 从路由参数中获取 idNumber
      const routeIdNumber = this.$route.query.idNumber || '';
      // 从 localStorage 中获取存储的 idNumber
      const storedIdNumber = localStorage.getItem("number") || '';
      // 优先使用路由参数中的 idNumber，如果没有则使用 localStorage 中的
      this.idNumber = routeIdNumber || storedIdNumber;
    },
    async fetchAppointments () {
      try {
        console.log(this.idNumber);
        const result = await request({
          url: `http://localhost:8080/appointmentsList/${this.idNumber}`, 
          method: 'get',
        });
        this.appointments = result.data;
        
      } catch (error) {
        console.error('获取预约状态失败:', error);
      }
    },
    appointmentStatusMessage (status) {
      if (status === 2) {
        return '预约中';
      } else if (status === 0) {
        return '已拒绝';
      } else if (status === 1) {
        return '已同意';
      } else {
        return '未知状态';
      }
    },
    statusClass (status) {
      if (status === 2) {
        return 'status-pending';
      } else if (status === 0) {
        return 'status-rejected';
      } else if (status === 1) {
        return 'status-approved';
      } else {
        return '';
      }
    },
    formatDate (date) {
      if (!date) return '';
      const dt = new Date(date);
      dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset() + 480);
      const year = dt.getFullYear();
      const month = (dt.getMonth() + 1).toString().padStart(2, '0');
      const day = dt.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    handleCurrentChange (page) {
      this.currentPage = page;
    }
  }
};
</script>



<style scoped>
.el-col {
  margin-top: 5%;
}
.status-card {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 20px;
}

.status-card .clearfix {
  font-size: 18px;
  font-weight: bold;
}

.status-card p {
  font-size: 16px;
  margin-top: 10px;
}

.no-appointments {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}

.el-pagination {
  position: absolute;
  bottom: 10%;
  padding: 10px 0;
  margin-top: 8%;
  margin-left: 35%;
  text-align: center;
  width: 4%;
}
.status-pending {
  color: orange;
}

.status-approved {
  color: green;
}

.status-rejected {
  color: red;
}
</style>


