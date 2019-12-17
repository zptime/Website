<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.addPWA(); // 添加service worker
  },
  methods: {
    addPWA() {
      document.addEventListener("beforeinstallprompt", e => {
        e.preventDefault(); // 阻止默认安装事件
        return false;
      });
      // 注册serviceWorker
      if ("serviceWorker" in navigator && process.env.NODE_ENV === 'production') {
        let swVersion = "1.0.1";
        navigator.serviceWorker
          .register("/serviceWorker.js")
          .then(registration => {
            // 注意SW文件的相对路径 ./ 和绝对路径 / 的区别
            if (localStorage.getItem("swVersion") !== swVersion) {
              // 解决因为服务器缓存serviceWorker.js导致的serviceWorker不更新问题
              registration.update().then(() => {
                localStorage.setItem("swVersion", swVersion);
              });
            }
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            ); // 注册成功
          })
          .catch(err => {
            console.log("ServiceWorker registration failed: ", err); // 注册失败
          });
      }
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
