<template>
  <div>
    <el-steps :active="activeStep" finish-status="success">
      <el-step title="填写个人信息"></el-step>
      <el-step title="选择疫苗和预约日期"></el-step>
      <el-step title="提交预约"></el-step>
    </el-steps>

    <el-form :model="appointmentForm" ref="appointmentForm" :rules="rules" label-width="100px" v-if="activeStep === 0">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="appointmentForm.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" prop="idNumber">
        <el-input v-model="appointmentForm.idNumber"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phoneNumber">
        <el-input v-model="appointmentForm.phoneNumber"></el-input>
      </el-form-item>
    </el-form>
    <el-form :model="appointmentForm" ref="appointmentForm2" :rules="rules" label-width="100px" v-if="activeStep === 1">
      <el-form-item label="疫苗名称" prop="vaccine">
        <el-select v-model="appointmentForm.vaccine" placeholder="请选择疫苗名称">
          <el-option label="乙肝疫苗" value="乙肝疫苗"></el-option>
          <el-option label="卡介苗" value="卡介苗"></el-option>
          <el-option label="脊灰疫苗" value="脊灰疫苗"></el-option>
          <el-option label="百白破疫苗" value="百白破疫苗"></el-option>
          <el-option label="白破疫苗" value="白破疫苗"></el-option>
          <el-option label="麻风(麻疹)疫苗" value="麻风(麻疹)疫苗"></el-option>
          <el-option label="麻腮风(麻疹)疫苗" value="麻腮风(麻疹)疫苗"></el-option>
          <el-option label="乙脑减毒活疫苗" value="乙脑减毒活疫苗"></el-option>
          <el-option label="A群流脑疫苗" value="A群流脑疫苗"></el-option>
          <el-option label="A+C群流脑疫苗" value="A+C群流脑疫苗"></el-option>
          <el-option label="甲肝减毒活疫苗" value="甲肝减毒活疫苗"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约日期" prop="date">
        <el-date-picker v-model="appointmentForm.date" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
    </el-form>

    <el-card v-if="activeStep === 2" class="confirmation-card">
      <div slot="header" class="clearfix">
        <span>请确认你的信息:</span>
      </div>
      <p><strong>儿童姓名:</strong> {{ appointmentForm.name }}</p>
      <p><strong>身份证号:</strong> {{ appointmentForm.idNumber }}</p>
      <p><strong>联系电话:</strong> {{ appointmentForm.phoneNumber }}</p>
      <p><strong>疫苗名称:</strong> {{ appointmentForm.vaccine }}</p>
      <p><strong>预约日期:</strong> {{ formatDate(appointmentForm.date) }}</p>
    </el-card>



    <div style="margin-top: 12px;">
      <el-button @click="prev" v-if="activeStep > 0">上一步</el-button>
      <el-button @click="next">{{ activeStep === 3 ? '重新预约' : (activeStep === 2 ? '提交' : '下一步') }}</el-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
  data () {
    return {
      activeStep: 0, // 当前步骤
      appointmentForm: {
        name: '',
        idNumber: '',
        phoneNumber: '',
        status: 2, // 0 已拒绝 1 已同意 2 预约中
        vaccine: '',
        date: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        idNumber: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { validator: this.validateID, trigger: 'blur' }
        ],
        phoneNumber: [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
        vaccine: [{ required: true, message: '请选择疫苗名称', trigger: 'change' }],
        date: [{ required: true, message: '请选择预约日期', trigger: 'change' }]
      },
      appointmentStatus: '' // 状态信息
    };
  },
  methods: {
    next () {
      if (this.activeStep === 0) {
        this.$refs.appointmentForm.validate((valid) => {
          if (valid) {
            this.activeStep++;
          } else {
            this.$message({
              message: '请完成表单验证',
              type: 'error'
            });
            return false;
          }
        });
      } else if (this.activeStep === 1) {
        this.$refs.appointmentForm2.validate((valid) => {
          if (valid) {
            this.activeStep++;
          } else {
            this.$message({
              message: '请完成表单验证',
              type: 'error'
            });
            return false;
          }
        });
      } else if (this.activeStep === 2) {
        this.submitAppointment();
      } else if (this.activeStep === 3) {
        this.resetForm();
      }
      // 本地存储身份证
      localStorage.setItem("number", this.appointmentForm.idNumber)
    },
    prev () {
      if (this.activeStep > 0) {
        this.activeStep--;
      }
    },
    async submitAppointment () {
      if (this.$refs.appointmentForm) {
        this.$refs.appointmentForm.resetFields();
      }
      if (this.$refs.appointmentForm2) {
        this.$refs.appointmentForm2.resetFields();
      }
      this.activeStep++;
      const result = await request({
        url: 'http://localhost:8080/submit',
        method: 'post',
        data: this.appointmentForm
      });
      console.log(result);
      this.$message({
        message: '提交成功！',
        type: 'success'
      });
      this.$router.push({
        path: '/user/view',
        query: {
          idNumber: this.appointmentForm.idNumber,
        }
      })
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
    validateID (rule, value, callback) {
      const idPattern = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|30|31)\d{3}(\d|X)$/;
      if (!value) {
        callback(new Error('请输入儿童身份证号'));
      } else if (!idPattern.test(value)) {
        callback(new Error('请输入有效的身份证号'));
      } else {
        callback();
      }
    },
    resetForm () {
      this.activeStep = 0;
      this.appointmentStatus = '';
      this.appointmentForm = {
        name: '',
        idNumber: '',
        phoneNumber: '',
        vaccine: '',
        date: ''
      };
    }
  }
};
</script>

<style scoped>
p {
  margin-top: 10px;
}

.el-form {
  margin-top: 10%;
}

.el-input {
  width: 400px;
}

.el-button {
  margin-top: 3%;
}
</style>
