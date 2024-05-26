<template>
  <div class="doctor-appointment-page">
    <el-table :data="pagedData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="200"></el-table-column>
      <el-table-column prop="idNumber" label="身份证号" width="200"></el-table-column>
      <el-table-column prop="phoneNumber" label="联系电话" width="200"></el-table-column>
      <el-table-column prop="vaccine" label="疫苗名称" width="260"></el-table-column>
      <el-table-column prop="date" label="预约日期" width="260" :formatter="formatDate"></el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total">
    </el-pagination>
  </div>
</template>
<script>
import request from '@/utils/request'; // 假设你有一个 utils/request.js 文件用于处理请求

export default {
  name:"MyPage",
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
    this.fetchAppointments();
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
          url: `http://47.120.62.6:8080/doctorAppointmentsList`, // 替换为实际的API端点
          method: 'get',
        });
        this.appointments = result.data; // 假设返回的数据包含预约对象的数组
        this.total = result.data.length;
        this.updatePagedData(); // 初始化分页数据
      } catch (error) {
        console.error('获取预约状态失败:', error);
      }
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
