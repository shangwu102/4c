<template>
  <div>
    <el-container style="height: 100vh;">
      <el-header>
        <div>
          <h2>用户管理系统</h2>
        </div>
      </el-header>
      <el-container>
        <el-aside class="aside-fixed" :width="isCollapse ? '67px' : '255px'">
          <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition="false">
            <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="toggleMenu"
              style="cursor: pointer;font-size: 30px;color: rgba(39, 37, 37,0.8); "></i>
            <el-menu-item index="1" @click="showHome">
              <svg-icon class="logo" iconClass="home"></svg-icon>
              <span v-if="!isCollapse" style="font-size: 24px;">首页</span>
            </el-menu-item>
            <el-menu-item index="2" @click="showPersonal">
              <svg-icon class="logo" iconClass="user"></svg-icon>
              <span v-if="!isCollapse" style="font-size: 24px;">用户中心</span>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <svg-icon class="logo" iconClass="vaccinate"></svg-icon>
                <span v-if="!isCollapse" style="font-size: 24px;">接种信息管理</span>
              </template>
              <el-menu-item index="optionOne" @click="showOption('/user/option11')">
                <span style="font-size: 18px;">接种时间</span>
              </el-menu-item>
              <el-menu-item index="optionTwo" @click="showOption('/user/query')">
                <span style="font-size: 18px;">接种查询</span>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <svg-icon class="logo" iconClass="reservationUser"></svg-icon>
                <span v-if="!isCollapse" style="font-size: 24px;">预约接种管理</span>
              </template>
              <el-menu-item index="optionOne1" @click="reservation">
                <span style="font-size: 18px;">申请预约</span>
              </el-menu-item>
              <el-menu-item index="optionTwo2" @click="showOption('/user/view')">
                <span style="font-size: 18px;">查看预约</span>
              </el-menu-item>
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
    toggleMenu () {
      this.isCollapse = !this.isCollapse;
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
  font-size: 45px;
  text-align: center;
  width: 100%;
  background-color: rgba(111, 239, 133, 0.5);
  color: rgb(76, 161, 214);
  font-family: slideyouran;
  letter-spacing: 10px;
}

@font-face {
  font-family: slideyouran;
  src: url("../ttf/SanJiBangKaiJianTi-2.ttf");
}

@font-face {
  font-family: 'anotherFont';
  src: url("../ttf/No.18-ShangShouJiFengShuFaTi-2.ttf");
}

span {
  font-family: slideyouran;
}

.el-menu-item,
.el-submenu {
  margin-bottom: 20px;
}

.el-submenu .el-menu-item {
  margin-bottom: 0;
}

.el-aside {
  border: 2px solid rgba(217, 207, 207, 0.5);
  height: calc(100vh - 8.2vh);
  background-color: rgba(192, 180, 180, 0.5);
  transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -moz-transition: width 0.15s;
  -webkit-transition: width 0.15s;
  -o-transition: width 0.15s;

}

.logo {
  position: relative;
  right: 5%;
  top: 5%;
}
</style>
