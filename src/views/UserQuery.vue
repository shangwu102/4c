<template>
  <div>
    <el-form :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :model="form">
      <el-form-item label="身份证号：" prop="card">
        <el-input v-model="form.card" placeholder="请输入您要查询的身份证"></el-input>
        <el-button type="primary" @click="onSubmit" :loading="loading" plain>立即查询</el-button>
        <el-button type="info" @click="clear" plain>清除</el-button>
      </el-form-item>
    </el-form>
    <!-- 查询到的数据 -->
    <el-table :data="pagedData" style="width: 100%" border>
      <el-table-column prop="childrenName" align="center" label="姓名"></el-table-column>
      <el-table-column prop="number" align="center" label="身份证"></el-table-column>
      <el-table-column prop="name" align="center" label="疫苗名称"></el-table-column>
      <el-table-column prop="batchNumber" align="center" label="疫苗批号"></el-table-column>
      <el-table-column prop="produce" align="center" label="生产企业"></el-table-column>
      <el-table-column prop="position" align="center" label="接种部位"></el-table-column>
      <el-table-column prop="position" align="center" label="接种单位"></el-table-column>
      <el-table-column prop="time" align="center" label="接种日期"></el-table-column>
      <el-table-column prop="timeStamp" align="center" label="上链时间"></el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next" :total="total">
    </el-pagination>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      currentPage: 1,
      pageSize: 7,
      form: {
        card: ''
      },
      loading: false,
      tableData: [],
      pagedData: [],
      total: 0,
      rules: {
        card: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { pattern: /^[1-9]\d{5}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/, message: '请输入有效的身份证号', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    currentPage () {
      this.updatePagedData();
    },
    pageSize () {
      this.updatePagedData();
    }
  },
  mounted () {
    this.setPageSize();
    window.addEventListener('resize', this.setPageSize);
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setPageSize);
  },
  methods: {
    clear () {
      this.form.card = ''
    },
    async onSubmit () {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          try {
            this.loading = true
            const result = await request({
              url: '/doctor/getinfo',
              method: 'get',
              params: { id: this.form.card }
            });
            // 处理获取到的数据
            this.tableData = result.data.map(item => ({
              ...item,
              time: this.formatDate(item.time),
              timeStamp: this.formatDateTime(item.timeStamp)
            }));
            this.total = this.tableData.length;
            this.updatePagedData();
            this.loading = false
            this.$message({
              message: '查询成功',
              type: 'success'
            });
          } catch (error) {
            console.error('API 请求错误:', error);
          }
        }
      });
    },
    formatDate (timestamp) {
      const date = new Date(timestamp);
      const offset = date.getTimezoneOffset();
      date.setMinutes(date.getMinutes() - offset + 480); // 东八区时区偏移量
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    formatDateTime (timestamp) {
      const date = new Date(timestamp);
      const offset = date.getTimezoneOffset();
      date.setMinutes(date.getMinutes() - offset + 480); // 东八区时区偏移量
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
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
      this.pagedData = this.tableData.slice(start, end);
    },
    setPageSize () {
      console.log(window.innerWidth);
      this.pageSize = window.innerHeight < 768 ? 6 : 14;
      this.updatePagedData();
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 40%;
}

.el-button {
  margin-left: 1%;
}
</style>
