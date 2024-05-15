<template>
  <div>
    <el-container>
      <el-header>
        <div style="display: flex;">
          <h2 style="font-size: 40px; background-color: aqua;  width: 100%;">用户管理系统</h2>
          <el-button @click="logout">退出</el-button>
        </div>

      </el-header>
      <el-container>
        <el-aside width="400px">
          <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
            style="height: 91vh;">
            <el-menu-item index="1" @click="showHome">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" style="font-size: 24px; ">首页</span>
              </template>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" style="font-size: 24px; ">接种信息管理</span>
              </template>
              <el-menu-item index="optionOne" @click="showOption('option1')"><span style="font-size: 18px; ">信息查看</span></el-menu-item>
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
      if (this.$route.path !== '/welcome') {
        this.$router.push('/welcome');
      }
    },
    showOption (option) {
      const path = `/${option}`;
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


<style></style>
