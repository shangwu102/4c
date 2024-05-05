<template>
  <div class="login-container">
    <el-form @submit.prevent="onSubmit" label-width="100px" :model="user">
      <h2>欢迎回来</h2>
      <div class="form-group">
        <el-form-item label="用户名：">
          <el-col :span="20">
            <el-input placeholder="请输入账号" prefix-icon="el-icon-user-solid" ref="input"
              v-model="user.account"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码：">
          <el-col :span="20">
            <el-input placeholder="请输入密码" prefix-icon="el-icon-s-goods" v-model="user.password"
              show-password></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="角色:">
          <el-radio v-model="user.type" label="1">医生</el-radio>
          <el-radio v-model="user.type" label="2">用户</el-radio>
        </el-form-item>
      </div>

      <div class="forget">
        没有帐户?
        <router-link to="/register">注册</router-link>
      </div>
      <button type="button" @click="login">登录</button>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'MyBase',
  data () {
    return {
      user: {
        account: '',
        password: '',
        type: ''
      },
    };
  },
  mounted () {
    this.$nextTick(() => { this.$refs.input.focus() })
  },
  methods: {
    async login () {
      console.log("登录信息：", this.user);
      const result = await axios({
        method: 'post',
        url: 'http://localhost:8080/user/login',
        data: this.user
      })
      console.log(result);
      if (this.user.type === '1') {
        this.$router.push('/dockor')
      } else if (this.user.type === '2') {
        console.log(666);
        this.$router.push('/user')
      }

    },
  },
};
</script>

<style scoped>
.login-container {
  background-color: aliceblue;
  width: 600px;
  height: 400px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
}

form {
  display: flex;
  flex-direction: column;
}

button[type=button] {
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  margin-top: 5px;
  width: 80%;
  margin-left: 10%;
}

button[type=button]:hover {
  background-color: #2980b9;
}

.forget {
  position: relative;
  left: 67%;
  width: 150px;
  height: 40px;
  text-align: right;
  /* background-color: #3498db; */
}

.forget a {
  text-decoration: none;
  color: #72b4e0;
}

.form-group {
  margin-top: 7%;
  margin-left: 10%;
  margin-bottom: 0;
}

::v-deep .el-form-item__label {
  font-size: 16px;
}
</style>
