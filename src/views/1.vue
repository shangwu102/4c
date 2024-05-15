<template>
  <div>
    医生
    <el-button @click="logout">退出</el-button>
    <!-- Form -->
    <el-button @click="dialogFormVisible = true">点击上传儿童接种信息</el-button>
    <el-dialog title="儿童接种信息" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="vaccinumMsg">
        <el-form-item label="儿童姓名" :label-width="formLabelWidth">
          <el-input v-model="vaccinumMsg.childrenName"></el-input>
        </el-form-item>
        <el-form-item label="儿童身份证" :label-width="formLabelWidth">
          <el-input v-model="vaccinumMsg.number"></el-input>
        </el-form-item>
        <el-form-item label="疫苗名称" :label-width="formLabelWidth">
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
        <el-form-item label="接种日期" :label-width="formLabelWidth">
          <el-date-picker v-model="vaccinumMsg.time" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="疫苗批号" :label-width="formLabelWidth">
          <el-input v-model="vaccinumMsg.batchNumber"></el-input>
        </el-form-item>
        <el-form-item label="生产企业" :label-width="formLabelWidth">
          <el-input v-model="vaccinumMsg.produce"></el-input>
        </el-form-item>
        <el-form-item label="接种部位" :label-width="formLabelWidth">
          <el-select v-model="vaccinumMsg.position" placeholder="请选择接种部位">
            <el-option label="左上臂" value="position1"></el-option>
            <el-option label="右上臂" value="position2"></el-option>
            <el-option label="口服" value="position3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="接种单位" :label-width="formLabelWidth">
          <el-input v-model="vaccinumMsg.unit"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { delToken } from '@/utils/localStorage'
export default {
  data () {
    return {
      dialogFormVisible: false,
      vaccinumMsg: {
        produce: '', // 生产企业
        childrenName: '', // 儿童姓名
        name: '', // 接种名称
        number: '', // 身份找
        position: '', // 接种部位
        time: '', // 接种日期
        unit: '',// 接种单位
        batchNumber:'' // 疫苗批号
      },
      formLabelWidth: '100px'
    }
  },
  methods: {
    uploadMsg () {

    },
    logout () {
      delToken()
      this.$router.push('/home')
    }
  }
}
</script>

<style></style>