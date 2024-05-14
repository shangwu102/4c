<template>
  <div>
    医生
    <el-button @click="clear">退出</el-button>
    <!-- Form -->
    <el-button @click="dialogFormVisible = true">点击上传儿童接种信息</el-button>
    <el-dialog title="儿童接种信息" :visible.sync="dialogFormVisible">
      <el-form :model="vaccinum">
        <el-form-item label="儿童姓名" :label-width="formLabelWidth">
          <el-input v-model="vaccinum.name"></el-input>
        </el-form-item>
        <el-form-item label="儿童身份证" :label-width="formLabelWidth">
          <el-input v-model="vaccinum.number"></el-input>
        </el-form-item>
        <el-form-item label="疫苗名称" :label-width="formLabelWidth">
          <el-select v-model="vaccinum.region" placeholder="请选择疫苗名称">
            <el-option label="乙肝疫苗" value="value1"></el-option>
            <el-option label="卡介苗" value="value2"></el-option>
            <el-option label="脊灰疫苗" value="value3"></el-option>
            <el-option label="百白破疫苗" value="value4"></el-option>
            <el-option label="白破疫苗" value="value5"></el-option>
            <el-option label="麻风(麻疹)疫苗" value="value6"></el-option>
            <el-option label="麻腮风(麻腮、麻疹)疫苗" value="value7"></el-option>
            <el-option label="乙脑减毒活疫苗" value="value8"></el-option>
            <el-option label="A群流脑疫苗" value="value9"></el-option>
            <el-option label="A+C群流脑疫苗" value="value10"></el-option>
            <el-option label="甲肝减毒活疫苗" value="value11"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="接种日期" :label-width="formLabelWidth">
          <el-input v-model="vaccinum.time"></el-input>
        </el-form-item>
        <el-form-item label="疫苗批号" :label-width="formLabelWidth">
          <el-input v-model="vaccinum.batchNumber"></el-input>
        </el-form-item>
        <el-form-item label="生产企业" :label-width="formLabelWidth">
          <el-input v-model="vaccinum.produce"></el-input>
        </el-form-item>
        <el-form-item label="接种部位" :label-width="formLabelWidth">
          <el-input v-model="vaccinum.position"></el-input>
        </el-form-item>
        <el-form-item label="接种单位" :label-width="formLabelWidth">
          <el-input v-model="vaccinum.unit"></el-input>
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
import {delToken} from '@/utils/localStorage'
export default {
  data() {
    return {
      dialogFormVisible: false,
      vaccinum: {
        produce:'',
        name: '',
        name1: '',
        number:'',
        position:'',
        time:'',
        unit:'',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods:{
    uploadMsg() {

    },
    clear() {
      delToken()
      this.$router.push('/home')
    }
  }
}


</script>

<style>



</style>