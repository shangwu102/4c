<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <p>抱歉，你访问的页面不存在</p>
      <el-button type="primary" @click="goHome">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goHome () {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  text-align: center;
}

.content {
  width: 800px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 5%;
}

h1 {
  font-size: 100px;
  margin: 0;
  color: #3498db;
}

p {
  font-size: 20px;
  color: #777;
  margin: 20px 0;
}

.el-button {
  margin-top: 20px;
}
</style>
