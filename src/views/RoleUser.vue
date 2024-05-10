<template>
  <div>

    用户
    <el-button @click="clear">退出</el-button>
  </div>
</template>

<script>
import { delToken } from '@/utils/localStorage'
export default {
  methods: {
    clear () {
      delToken()
      this.$router.push('/home')
    }
  }
}


</script>

<style></style>