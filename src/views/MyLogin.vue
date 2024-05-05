<template>
  <div class="login-container">
    <el-form @submit.prevent="onSubmit" label-width="160px" :model="user">
      <h2>欢迎回来</h2>
      <div class="form-group">
        <el-form-item label="用户名：">
          <el-col :span="20">
            <el-input placeholder="请输入账号" prefix-icon="el-icon-user-solid" v-model="user.account" ref="input"
              hide-required-asterisk></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码：">
          <el-col :span="20">
            <el-input placeholder="请输入密码" prefix-icon="el-icon-s-goods" v-model="user.password" show-password
              hide-required-asterisk="true"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="角色:">
          <el-radio v-model="user.type" label="1">医生</el-radio>
          <el-radio v-model="user.type" label="2">用户</el-radio>
        </el-form-item>
        <el-form-item label="执业资格证书编号：" v-show="user.type === '1'">
          <el-col :span="20">
            <el-input placeholder="请输入执业资格证书编号" prefix-icon="el-icon-s-goods" v-model="doctor.certificateNumber
"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号码：" v-show="user.type === '2'">
          <el-col :span="20">
            <el-input placeholder="请输入手机号码" prefix-icon="el-icon-s-goods" v-model="user.phoneNumber"></el-input>
          </el-col>
        </el-form-item>
      </div>

      <div class="forget">
        没有帐户?
        <router-link to="/register">注册</router-link>
      </div>
      <button type="button" @click="login" >登录</button>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {
        account: "",
        password: "",
        type: "2",
        phoneNumber:''
      },
      doctor: {
        account: "",
        password: "",
        type: "",
        certificateNumber: ''
      },
    };
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.input.focus();
    });
  },
  methods: {
    async login () {
      if (this.user.type === '1') {
        this.doctor.account = this.user.account
        this.doctor.password = this.user.password
        await axios({
          method: 'post',
          url: 'http://localhost:8080/login/doctor',
          data: this.doctor
        })
        this.$router.push('/doctor')
      } else if (this.user.type === '2') {
        await axios({
          method: 'post',
          url: 'http://localhost:8080/login/user',
          data: this.user
        })
        this.$router.push('/user')
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  background-color: rgba(255, 255, 255, 0.5);
  width: 600px;
  height: 430px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
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

button[type="button"] {
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 88%;
  left: 10%;
  width: 80%;
  font-size: 20px;
}

button[type="button"]:hover {
  background-color: #2980b9;
}

.forget {
  position: absolute;
  left: 67%;
  top: 77%;
  margin-top: 10px;
  width: 150px;
  height: 40px;
  text-align: right;
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
