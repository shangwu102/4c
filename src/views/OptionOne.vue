<template>
  <div>
    <!-- Table -->
    <el-container>
      <el-header style="height: 40px;">建议儿童接种时间</el-header>
      <el-table :data="gridData" stripe border size="medium" fit>
        <el-table-column property="name" label="疫苗名称" width="217"></el-table-column>
        <el-table-column property="month0" label="0月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month0">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month1" label="1月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month1">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month2" label="2月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month2">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month3" label="3月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month3">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month4" label="4月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month4">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month5" label="5月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month5">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month6" label="6月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month6">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month8" label="8月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month8">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month18" label="18月龄" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.month18">√</span>
          </template>
        </el-table-column>
        <el-table-column property="month18_24" label="18-24月龄" width="90">
          <template slot-scope="scope">
            <span v-if="scope.row.month18_24">√</span>
          </template>
        </el-table-column>
        <el-table-column property="year2" label="2周岁" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.year2">√</span>
          </template>
        </el-table-column>
        <el-table-column property="year3" label="3周岁" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.year3">√</span>
          </template>
        </el-table-column>
        <el-table-column property="year4" label="4周岁" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.year4">√</span>
          </template>
        </el-table-column>
        <el-table-column property="year6" label="6周岁" width="67">
          <template slot-scope="scope">
            <span v-if="scope.row.year6">√</span>
          </template>
        </el-table-column>
      </el-table>
      <div style="color: red; margin-top: 20px;">
        说明："√"代表1剂次,*如接种乙脑灭活疫苗，8月龄接种2剂次，间隔7-10天，2周岁和6周岁各接种1剂次。
        #如接种甲肝灭活疫苗，18月龄和24-30月龄各接种1剂次，★我省在过渡阶段仍保留6周岁时第3剂次含麻疹成分疫苗接种,具体接种要求不变。
      </div>
    </el-container>
  </div>
</template>

<script>
import { delToken } from '@/utils/localStorage'
export default {
  data () {
    return {
      gridData: [
        { name: '乙肝疫苗', month0: true, month1: true, month6: true },
        { name: '卡介苗', month0: true },
        { name: '脊灰疫苗', month2: true, month3: true, month4: true, year4:true},
        { name: '百白破疫苗', month3: true, month4: true, month5: true, month18: true },
        { name: '白破疫苗', year6: true },
        { name: '麻风(麻疹)疫苗', month8: true },
        { name: '麻腮风(麻腮、麻疹)疫苗★', month18_24: true,year6:true },
        { name: '乙脑减毒活疫苗*', month8: true, year2: true },
        { name: 'A群流脑疫苗', month6: true, month18:true },
        { name: 'A+C群流脑疫苗', year3: true,year6:true },
        { name: '甲肝减毒活疫苗#', month18: true },
      ]
    }
  },
  methods: {
    queryVaccineTime () {

    },
    clear () {
      delToken()
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
 .el-header {
   background-color: #d0dbea;
   color: #333;
   text-align: center;
   line-height: 40px;
 }
</style>
