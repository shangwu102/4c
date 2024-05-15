<template>
  <div>
    <el-container>
      <el-header>
        <h2 style="font-size: 40px; background-color: aqua;">医生管理系统</h2>
        <!-- <el-button @click="logout">退出</el-button> -->
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
            style="height: 93.5vh;">
            <el-menu-item index="1" @click="showHome">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">首页</span>
              </template>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <img v-if="currentView === 'home'" src="../assets/welcome.png" alt="Home Image" width="100%" height="99%" />
            <div v-else>Other Content</div>
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
      currentView: 'home' // 默认显示首页内容
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
      this.currentView = 'home';
    },
    uploadMsg () {

    },
    logout () {
      delToken()
      this.$router.push('/home')
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
