<template>
  <div class="login-container">
    <el-form @submit.prevent="onSubmit" label-width="160px">
      <h2>注册账户</h2>
      <div class="form-group">
        <el-form-item :label="type === '1' ? '姓名：' : '用户名：'">
          <el-col :span="20">
            <el-input :placeholder="type === '1' ? '请输入您的姓名' : '请输入用户名'" prefix-icon="el-icon-user-solid"
              v-model="account" ref="input" hide-required-asterisk></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码：">
          <el-col :span="20">
            <el-input placeholder="请输入密码" prefix-icon="el-icon-s-goods" v-model="password" show-password
              hide-required-asterisk="true"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="角色:">
          <el-radio v-model="type" label="1">医生</el-radio>
          <el-radio v-model="type" label="2">用户</el-radio>
        </el-form-item>
        <el-form-item label="执业资格证书编号：" v-show="type === '1'">
          <el-col :span=" 20">
            <!-- <el-input placeholder="请输入执业资格证书编号" prefix-icon="el-icon-s-goods"
              v-model="doctor.certificateNumber"></el-input> -->
            <el-input placeholder="请输入执业资格证书编号" v-model="doctor.certificateNumber">
              <template slot="prefix">
                <svg-icon class="el-input__icon" iconClass="certificate"
                  style="width: 14px; height: 13.6px; margin-left: 5px;"></svg-icon>
              </template>
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号码：" v-show="type === '2'">
          <el-col :span="20">
            <el-input placeholder="请输入手机号码" prefix-icon="el-icon-phone" v-model="user.phoneNumber"></el-input>
          </el-col>
        </el-form-item>
      </div>

      <div class="forget">
        已有帐户?
        <router-link to="/login">登录</router-link>
      </div>
      <button type="button" @click="register">注册</button>
    </el-form>
  </div>
</template>

<script>
import axios from '@/utils/request'
import {setUserToken,setDoctorToken} from '@/utils/localStorage'
export default {
  data() {
    return {
      account: "",
      password: "",
      user: {
        phoneNumber:''
      },
      doctor: {
        certificateNumber: ''
      },
      type:"2" // 用户类型
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus();
    });
  },
  methods: {
    async register () {
        if (this.type === '1') {
          const result = await axios({
            method: 'post',
            url: '/register/doctor',
            data: {
              account:this.account,
              certificateNumber:this.doctor.certificateNumber,
              password:this.password,
              type:this.type
            }
          });
          this.$message({
            message: '医生账户注册成功',
            type: 'success'
          })
          // 保存token到本地
          setDoctorToken(result.data)
          this.$router.push('/login');
        } else if (this.type === '2') {
          const result = await axios({
            method: 'post',
            url: '/register/user',
            data: {
              account: this.account,
              phoneNumber: this.user.phoneNumber,
              password: this.password,
              type: this.type
            }
          });
          this.$message({
            message: '用户账户注册成功',
            type: 'success'
          });
          // 保存token到本地
          setUserToken(result.data)
          this.$router.push('/login');
        }
      } 
  },
};
</script>

<style scoped>
.login-container {
  background-color: rgba(255, 255, 255, 0.5);
  width: 600px;
  height: 430px;
  margin: 10px auto;
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
  top:88%;
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
  /* background-color: #3498db; */
}

.forget a {
  text-decoration: none;
  color: #528fb9;
}
.form-group {
  margin-top: 7%;
  margin-left: 10%;
  margin-bottom: 0;
}
::v-deep .el-form-item__label{
  font-size: 16px;
}
</style>
