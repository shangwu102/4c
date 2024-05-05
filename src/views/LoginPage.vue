<template>
  <div class="box">
    <div class="left">
      <p class="text" id="animatedText">
        <span v-for="(letter, index) in welcomeText" :key="index">{{ letter }}</span>
      </p>
    </div>
    <div class="right">
      <div class="loginStart">
        <div class="minbox">
          <h1>开始</h1>
          <button @click="login">登录</button>
          <button @click="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      welcomeText: '欢迎来到链上接种证平台'.split(''),
    };
  },
  mounted () {
    this.animateText();
  },
  methods: {
    animateText () {
      const letters = this.$el.querySelectorAll('.text span');
      let i = 0;
      const showLetter = () => {
        if (i < letters.length) {
          letters[i].style.opacity = 1;
          i++;
          setTimeout(showLetter, 500);
        } else {
          setTimeout(this.hideLetters, 500); // 等待500毫秒后隐藏
        }
      };

      this.hideLetters = () => {
        for (let j = 0; j < letters.length; j++) {
          letters[j].style.opacity = 0;
        }
        setTimeout(() => {
          i = 0; // 重置下一个动画的周期
          showLetter(); // 重新启动showLetter动画
        }, 1000);
      };
      showLetter();
    },
    login() {
      this.$router.push('/login');
    },
    register() {
      this.$router.push('/register');
    }
  }
};
</script>
<style scoped>
.text span {
  color: rgb(111, 49, 227);
  opacity: 0;
  transition: opacity 0.8s ease;
}
.box {
  width: 100vw;
  height: 100vh;
  background-color: blueviolet;
  display: flex;
}

.box .left {
  background-color:#00002E ;
  display: flex;
  flex: 3;
}
.box .left .text {
  font-size: 30px;
  align-items: center;
  justify-content: center;
}

.box .right {
  background-color: rgb(0, 0, 0);
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.box .right .loginStart {
  text-align: center;
  height: 40%;
  width: 70%;
}
.box .right .loginStart h1 {
  color: white;
}
.box .right .loginStart .minbox {
  margin-top: 20%;
  
}
button {
  width: 170px;
  height: 50px;
  margin-left:10px ;
  margin-top: 30px;
  border-radius: 8px;
  background-color: rgb(57, 166, 234);
  cursor:pointer;
  box-shadow: 0px 0px 10px 0px rgba(174, 158, 158, 0.5);
}
</style>