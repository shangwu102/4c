<template>
  <div class="box">
    <div class="left">
      <p class="text" id="animatedText">
        <span v-for="(letter, index) in welcomeText" :key="index" :class="{ newline: letter === '\n' }">{{ letter
          }}</span>
      </p>
      <div class="links">
        <a class="a2" target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37028102001493">
          <img src="../assets/备案图标.png" />
          鲁公网安备37028102001616号
        </a>
        <a class="a1" href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2024091574号</a>
      </div>
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
      welcomeText: `欢迎来到链上接种证平台\n疫苗是世界上保护儿童免受致命疾病威胁的最安全方式。`.split(''),
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
          if (letters[i].textContent === '\n') {
            letters[i].style.display = 'block';
          } else {
            letters[i].style.opacity = 1;
          }
          i++;
          setTimeout(showLetter, 300);
        } else {
          setTimeout(this.hideLetters, 300); // 等待300毫秒后隐藏
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
    login () {
      this.$router.push('/login');
    },
    register () {
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

.text span.newline {
  display: block;
  width: 100%;
  height: 0;
}

.box {
  width: 100vw;
  height: 100vh;
  background-color: blueviolet;
  display: flex;
}

.box .left {
  background-color: #00002E;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 3;
  align-items: center;
  position: relative;
}

.box .left .text {
  font-size: 50px;
  text-align: center;
}

.box .left .links {
  position: absolute;
  bottom: 20px;
  left: 0;
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
  margin-left: 10px;
  margin-top: 30px;
  border-radius: 8px;
  background-color: rgb(57, 166, 234);
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(174, 158, 158, 0.5);
}

.a1,
.a2 {
  color: rgb(255,255,255,0.7);
  text-decoration: none;
  margin-top: 5px;
  text-align: center;
}
</style>
