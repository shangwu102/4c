<template>
  <div>
    <el-container>
      <el-header>
        <div style="display: flex;">
          <h2>医生管理系统</h2>
        </div>
      </el-header>
      <el-container>
        <el-aside width="300px" class="aside-fixed" style="background-color:white;margin-top: 1%;">
          <el-menu class="el-menu-vertical-demo">
            <el-menu-item index="1" @click="showHome">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" style="font-size: 24px; ">首页</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2" @click="showPersonal">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" style="font-size: 24px; ">个人中心</span>
              </template>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" style="font-size: 24px; ">接种信息管理</span>
              </template>
              <el-menu-item index="optionOne" @click="showOption('/doctor/query')"><span
                  style="font-size: 18px;">信息查询</span></el-menu-item>
              <el-menu-item index="optionTwo" @click="showOption('/doctor/commit')"><span
                  style="font-size: 18px;">信息上链</span></el-menu-item>
            </el-submenu>

            <el-menu-item index="4" @click="reservation">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" style="font-size: 24px;">查看预约</span>
              </template>
            </el-menu-item>
            <el-menu-item index="7" @click="showInventory('/doctor/inventory')">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title" style="font-size: 24px;">库存管理</span>
              </template>
            </el-menu-item>
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
      if (this.$route.path !== '/doctor/welcome') {
        this.$router.push('/doctor/welcome');
      }
    },
    reservation() {
      if (this.$route.path !== '/doctor/reservation') {
        this.$router.push('/doctor/reservation');
      }
    },
    showInventory() {
      if (this.$route.path !== '/doctor/inventory') {
        this.$router.push('/doctor/inventory');
      }
    },
    showPersonal() {
      if (this.$route.path !== '/doctor/personal') {
        this.$router.push('/doctor/personal');
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
  background-color: rgba(89, 202, 164, 0.5);
}

.el-menu-item,
.el-submenu {
  margin-bottom: 20px;
}

.el-menu-vertical-demo {
  margin-top: 6%;
}

.el-submenu .el-menu-item {
  margin-bottom: 0;
}
.el-aside {
  border-right: 2px solid rgb(203, 164, 164);
  height: 85vh;
}
</style>
