<template>
  <div>
    <el-container style="height: 100vh;">
      <el-header>
        <div style="display: flex;">
          <h2>用户管理系统</h2>
        </div>
      </el-header>
      <el-container>
        <el-aside class="aside-fixed" style="width: 260px;">
          <el-menu class="el-menu-vertical-demo">
            <el-menu-item index="1" @click="showHome">
              <template slot="title">
                <svg-icon class="logo" iconClass="home"></svg-icon>
                <span slot="title" style="font-size: 24px; ">首页</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2" @click="showPersonal">
              <template slot="title">
                <svg-icon class="logo" iconClass="user"></svg-icon>
                <span slot="title" style="font-size: 24px; ">用户中心</span>
              </template>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <svg-icon class="logo" iconClass="vaccinate"></svg-icon>
                <span slot="title" style="font-size: 24px; ">接种信息管理</span>
              </template>
              <el-menu-item index="optionOne" @click="showOption('/user/option11')"><span
                  style="font-size: 18px; ">接种时间</span></el-menu-item>
              <el-menu-item index="optionTwo" @click="showOption('/user/query')"><span
                  style="font-size: 18px; ">接种查询</span></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <svg-icon class="logo" iconClass="reservationUser"></svg-icon>
                <span slot="title" style="font-size: 24px; ">预约接种管理</span>
              </template>
              <el-menu-item index="optionOne1" @click="reservation"><span
                  style="font-size: 18px; ">申请预约</span></el-menu-item>
              <el-menu-item index="optionTwo2" @click="showOption('/user/view')"><span
                  style="font-size: 18px; ">查看预约</span></el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { delToken } from '@/utils/localStorage'

export default {
  data () {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    showHome () {
      if (this.$route.path !== '/user/welcome') {
        this.$router.push('/user/welcome');
      }
    },
    reservation () {
      if (this.$route.path !== '/user/reservation') {
        this.$router.push('/user/reservation');
      }
    },
    showInventory () {
      if (this.$route.path !== '/user/inventory') {
        this.$router.push('/user/inventory');
      }
    },
    showPersonal () {
      if (this.$route.path !== '/user/personal') {
        this.$router.push('/user/personal');
      }
    },
    showOption (option) {
      const path = `${option}`;
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    uploadMsg () {
    },
    logout () {
      delToken();
      this.$router.push('/home'); // 修改退出后跳转的路径为登录页
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 40px;
  text-align: center;
  width: 100%;
  background-color: rgba(111, 239, 133, 0.5);
}

.el-menu-item,
.el-submenu {
  margin-bottom: 20px;
  margin-left: 25px;
}


.el-submenu .el-menu-item {
  margin-bottom: 0;
}
.el-aside {
  border: 2px solid rgba(217, 207, 207, 0.5);
  height: calc(100vh - 8.2vh);
  background-color: rgba(192, 180, 180, 0.5);
}
/* .el-aside {
  border-right: 2px solid rgb(203, 164, 164);
  height: 85vh;
} */

.logo {
  position: relative;
  right: 5%;
  top: 5%;
}
</style>
