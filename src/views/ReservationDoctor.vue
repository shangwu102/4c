<template>
  <div class="doctor-appointment-page">
    <el-table :data="pagedData" style="width: 100%;" border>
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="idNumber" label="身份证号" ></el-table-column>
      <el-table-column prop="phoneNumber" label="联系电话" ></el-table-column>
      <el-table-column prop="vaccine" label="疫苗名称" ></el-table-column>
      <el-table-column prop="date" label="预约日期"  :formatter="formatDate"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status === 2" type="success" size="small" @click="approveAppointment(scope.row.id)"
            plain>
            同意
          </el-button>
          <el-button v-if="scope.row.status === 2" type="danger" size="small" @click="rejectAppointment(scope.row.id)"
            plain>
            拒绝
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total">
    </el-pagination>
  </div>
</template>

<script>
import request from '@/utils/request'; // 假设你有一个 utils/request.js 文件用于处理请求

export default {
  data () {
    return {
      appointments: [], // 存储多个预约的数组
      pagedData: [], // 当前页显示的预约数组
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示的预约数量
      total: 0, // 总的预约数量
    };
  },
  created () {
    this.loadAppointments();
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val;
      this.updatePagedData();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.updatePagedData();
      console.log(`当前页: ${val}`);
    },
    updatePagedData () {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.pagedData = this.appointments.slice(start, end);
    },
    async fetchAppointments () {
      try {
        const result = await request({
          url: `/doctorAppointmentsListFalse`,
          method: 'get',
        });
        this.appointments = result.data;
        this.total = result.data.length;
        this.saveAppointments();
        this.updatePagedData();
      } catch (error) {
        console.error('获取预约状态失败:', error);
      }
    },
    saveAppointments () {
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    },
    loadAppointments () {
      const savedAppointments = localStorage.getItem('appointments');
      console.log(savedAppointments);
      console.log(savedAppointments === false);
      // 检查 savedAppointments 是否为 null 或者空字符串
      if (savedAppointments && savedAppointments !== '[]') {
        console.log(7777);
        this.appointments = JSON.parse(savedAppointments);
        this.total = this.appointments.length;
        this.fetchAppointments();
        this.updatePagedData();
      } else {
        console.log(6666);
        this.fetchAppointments();
      }
    },
    async approveAppointment (id) {
      try {
        await request({
          url: `/approveAppointmentAgree/${id}`,
          method: 'get'
        });
        this.$message({
          message: '预约已同意',
          type: 'success'
        });
        this.removeAppointment(id);
      } catch (error) {
        console.error('同意预约失败:', error);
        this.$message({
          message: '同意预约失败，请稍后再试',
          type: 'error'
        });
      }
    },
    async rejectAppointment (id) {
      try {
        await request({
          url: `/approveAppointmentRefuse/${id}`,
          method: 'get'
        });
        this.$message({
          message: '预约已拒绝',
          type: 'success'
        });
        this.removeAppointment(id);
      } catch (error) {
        console.error('拒绝预约失败:', error);
        this.$message({
          message: '拒绝预约失败，请稍后再试',
          type: 'error'
        });
      }
    },
    removeAppointment (id) {
      this.appointments = this.appointments.filter(appointment => appointment.id !== id);
      this.total = this.appointments.length;
      this.saveAppointments();
      this.updatePagedData();
    },
    formatDate (row, column, cellValue) {
      if (!cellValue) return '';
      const dt = new Date(cellValue);
      const year = dt.getFullYear();
      const month = (dt.getMonth() + 1).toString().padStart(2, '0');
      const day = dt.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    statusFormatter (row, column, cellValue) {
      return cellValue === 0 ? '预约中' : '预约成功';
    }
  }
};
</script>

<style scoped>
.doctor-appointment-page {
  padding: 20px;
}

.el-table {
  margin-bottom: 20px;
}

.el-pagination {
  position: absolute;
  left: 19%;
  bottom: 2%;
}
</style>
