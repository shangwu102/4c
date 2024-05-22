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
      <el-form-item>
        <el-button type="primary" @click="nextStep">下一步</el-button>
        <el-button @click="prevStep">上一步</el-button>
      </el-form-item>
    </el-form>


    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeStep: 0, // 当前步骤
      appointmentForm: {
        name: '',
        idNumber: '',
        phoneNumber: '',
        vaccine: '',
        date: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        idNumber: [{ required: true, message: '请输入身份证号', trigger: 'blur' }],
        phoneNumber: [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
        vaccine: [{ required: true, message: '请选择疫苗名称', trigger: 'change' }],
        date: [{ required: true, message: '请选择预约日期', trigger: 'change' }]
      },
      appointmentStatus: '' // 预约状态
    };

  },

  methods: {
    nextStep () {
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
      } else {
        this.activeStep++;
      }
    },
    next () {
      if (this.activeStep++ > 2){
        this.activeStep = 0;
      }
    }
  }
}


</script>



<style scoped>
.el-form {
  margin-top: 5%;
}
.el-input {
  width: 400px;
}
</style>