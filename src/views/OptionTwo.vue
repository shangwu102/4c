<template>
  <div>
    <!-- Form -->
    <el-form :model="vaccinumMsg" ref="vaccinumForm" :rules="rules" label-width="100px">
      <el-form-item label="儿童姓名" prop="childrenName">
        <el-input v-model="vaccinumMsg.childrenName"></el-input>
      </el-form-item>
      <el-form-item label="儿童身份证" prop="number">
        <el-input v-model="vaccinumMsg.number"></el-input>
      </el-form-item>
      <el-form-item label="疫苗名称" prop="name">
        <el-select v-model="vaccinumMsg.name" placeholder="请选择疫苗名称">
          <el-option label="乙肝疫苗" value="name1"></el-option>
          <el-option label="卡介苗" value="name2"></el-option>
          <el-option label="脊灰疫苗" value="name3"></el-option>
          <el-option label="百白破疫苗" value="name4"></el-option>
          <el-option label="白破疫苗" value="name5"></el-option>
          <el-option label="麻风(麻疹)疫苗" value="name6"></el-option>
          <el-option label="麻腮风(麻腮、麻疹)疫苗" value="name7"></el-option>
          <el-option label="乙脑减毒活疫苗" value="name8"></el-option>
          <el-option label="A群流脑疫苗" value="name9"></el-option>
          <el-option label="A+C群流脑疫苗" value="name10"></el-option>
          <el-option label="甲肝减毒活疫苗" value="name11"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接种日期" prop="time">
        <el-date-picker v-model="vaccinumMsg.time" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="疫苗批号" prop="batchNumber">
        <el-input v-model="vaccinumMsg.batchNumber"></el-input>
      </el-form-item>
      <el-form-item label="生产企业" prop="produce">
        <el-input v-model="vaccinumMsg.produce"></el-input>
      </el-form-item>
      <el-form-item label="接种部位" prop="position">
        <el-select v-model="vaccinumMsg.position" placeholder="请选择接种部位">
          <el-option label="左上臂" value="position1"></el-option>
          <el-option label="右上臂" value="position2"></el-option>
          <el-option label="口服" value="position3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="接种单位" prop="unit">
        <el-input v-model="vaccinumMsg.unit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('vaccinumForm')">提交</el-button>
        <el-button @click="resetForm('vaccinumForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      vaccinumMsg: {
        produce: '', // 生产企业
        childrenName: '', // 儿童姓名
        name: '', // 接种名称
        number: '', // 身份证
        position: '', // 接种部位
        time: '', // 接种日期
        unit: '', // 接种单位
        batchNumber: '' // 疫苗批号
      },
      rules: {
        childrenName: [
          { required: true, message: '请输入儿童姓名', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入儿童身份证号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请选择疫苗名称', trigger: 'change' }
        ],
        time: [
          { required: true, message: '请选择接种日期', trigger: 'change' }
        ],
        batchNumber: [
          { required: true, message: '请输入疫苗批号', trigger: 'blur' }
        ],
        produce: [
          { required: true, message: '请输入生产企业名称', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请选择接种部位', trigger: 'change' }
        ],
        unit: [
          { required: true, message: '请输入接种单位名称', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
            const result = await request({
              url: '/doctor/addinfo',
              method: 'post',
              data: this.vaccinumMsg
            });
            if(result) {
              this.$message({
                message: '上链成功',
                type: 'success'
              });
            }
            this.resetForm(formName);
        } else {
          console.log('表单提交失败！');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>

</style>
