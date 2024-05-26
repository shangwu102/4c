<template>
  <div class="doctor-appointment-page">
    <el-table :data="pagedData" style="width: 100%; text-align: center;" @sort-change="sortChange" border>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="idNumber" label="身份证号" ></el-table-column>
      <el-table-column prop="phoneNumber" label="联系电话"></el-table-column>
      <el-table-column prop="vaccine" label="疫苗名称"></el-table-column>
      <el-table-column prop="date" label="预约日期" :formatter="formatDate" sortable="custom"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <span v-if="scope.row.status === 0" style="color: red">已拒绝</span>
          <span v-if="scope.row.status === 1" style="color: green">已同意</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total">
    </el-pagination>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
  data () {
    return {
      appointments: [], // 存储多个预约的数组
      pagedData: [], // 当前页显示的预约数组
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示的预约数量
      total: 0, // 总的预约数量
      sortOrder: '', // 排序顺序
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
      let data = [...this.appointments].filter(appointment => appointment.status !== 2);
      if (this.sortOrder === 'ascending') {
        data.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (this.sortOrder === 'descending') {
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.pagedData = data.slice(start, end);
    },
    async fetchAppointments () {
      try {
        const result = await request({
          url: `/msgAll`,
          method: 'get',
        });
        this.appointments = result.data;
        this.total = result.data.length;
        this.updatePagedData();
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
    sortChange ({ prop, order }) {
      if (prop === 'date') {
        this.sortOrder = order;
        this.updatePagedData();
      }
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
  left: 22%;
  bottom: 1%;
}
</style>
