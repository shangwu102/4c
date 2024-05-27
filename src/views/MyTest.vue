<template>
  <div>
    <el-header>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-header>
    <el-container>
      <el-aside class="aside-fixed" style="width: 260px;">
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-menu-item index="1">
            <svg-icon class="logo" iconClass="home"></svg-icon>
            <span v-if="!isCollapse" style="font-size: 24px;">首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <svg-icon class="logo" iconClass="user" style="color: black;"></svg-icon>
            <span v-if="!isCollapse" style="font-size: 24px;">用户中心</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <svg-icon class="logo" iconClass="vaccinate"></svg-icon>
              <span v-if="!isCollapse" style="font-size: 24px;">接种信息管理</span>
            </template>
            <el-menu-item index="optionOne">
              <span style="font-size: 18px;">接种时间</span>
            </el-menu-item>
            <el-menu-item index="optionTwo">
              <span style="font-size: 18px;">接种查询</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <svg-icon class="logo" iconClass="reservationUser"></svg-icon>
              <span v-if="!isCollapse" style="font-size: 24px;">预约接种管理</span>
            </template>
            <el-menu-item index="optionOne1">
              <span style="font-size: 18px;">申请预约</span>
            </el-menu-item>
            <el-menu-item index="optionTwo2">
              <span style="font-size: 18px;">查看预约</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true
    };
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.logo {
  width: 20px;
  height: 20px;
}
</style>
