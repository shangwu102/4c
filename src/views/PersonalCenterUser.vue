<template>
  <div class="card-container">
    <div class="card">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <sapn style="font-weight: bold; font-size: 24px;">用户名：</sapn><span
            style="font-weight: bold; font-size: 24px;">{{ geUserName }}</span>
        </div>
        <div class="text item">
          <ul>
            <li><span>希望您的孩子健康成长每一天！</span></li>
            <el-button @click="logout" style="float: right;">退出</el-button>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { delToken } from '@/utils/localStorage';
export default {
  computed: {
    ...mapGetters('user', ['geUserName']),
  },
  methods: {
    logout () {
      delToken();
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 20px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  margin-top: 15%;
  width: 500px;
  height: 200px;
  background-color: aquamarine;
}

ul {
  list-style: none;
  /* 移除默认的列表样式 */
  padding: 0;
  /* 移除默认的内边距 */
  margin: 0;
  /* 移除默认的外边距 */
}

ul li {
  margin-bottom: 30px;
  /* 设置列表项之间的间距 */
}
</style>
