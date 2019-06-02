<template>
  <div class="login-container">
    <div class="login-wrapper">
      <p>登录</p>
      <hr class="featurette-divider">
      <div class="input-item">
        <span class="glyphicon glyphicon-user"></span>
        <input type="text" class="login-input" placeholder="账号" v-model="userName">
      </div>
      <div class="input-item">
        <span class="glyphicon glyphicon-lock"></span>
        <input type="password" class="login-input" placeholder="密码" v-model="userPwd">
      </div>
      <div class="user-check-item">
        <input type="radio" name="user-type" id value="1" checked> 学生 &nbsp;&nbsp;&nbsp;
        <input type="radio" name="user-type" id value="2"> 老师
      </div>
      <div class="login-item">
        <button class="login-btn" @click="login">登录</button>
      </div>
      <div class="login-error">{{errorWord}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userPwd: "",
      errorWord: "",
      userType: "",
      errorList: {
        loginError: "*账号或者密码错误，请重新输入",
        userEmpty: "*账号不能为空",
        pwdEmpty: "*密码不能为空",
        empty: "*请输入账号及密码"
      }
    };
  },
  methods: {
    login() {
      $.bootstrapLoading.start()
      this.userType = $(":radio[name=user-type]:checked").val();
      console.log(this.userType);
      if (this.userName == "" && this.userPwd == "") {
        this.errorWord = this.errorList.empty;
         $.bootstrapLoading.end();
      } else if (this.userName == "") {
        this.errorWord = this.errorList.userEmpty;
         $.bootstrapLoading.end();
      } else if (this.userPwd == "") {
        this.errorWord = this.errorList.pwdEmpty;
         $.bootstrapLoading.end();
      } else {
        let self = this;
        this.axios
          .post("/login", {
            params: {
              user_id: self.userName,
              user_pwd: self.userPwd,
              user_type: self.userType
            }
          })
          .then(function(response) {
            window.localStorage.setItem("token", response.data.data[0].token);
            window.localStorage.setItem(
              "user_id",
              response.data.data[0].user_id
            );
            window.localStorage.setItem(
              "user_name",
              response.data.data[0].user_name
            );
            self.getRight();
            self.$router.push({ name: "DefaultPage" });
            window.location.reload();
            $.bootstrapLoading.end();
          })
          .catch(function(err) {
            self.errorWord = self.errorList.loginError;
            self.userPwd = "";
            $.bootstrapLoading.end();
            console.log(err);
          });
      }
    },
    getRight() {
      let self = this;
      // this.axios.defaults.headers.common["token"] = localStorage.getItem("token");
      // this.axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"; //配置请求头
      this.axios
        .get("/getRight")
        .then(function(response) {
          self.$store.commit("initUserRouter", response.data.data);
          console.log("store", self.$store.state.userRouter);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script >

<style scoped>
.login-container {
  background: #f6f8fa;
  min-height: 800px;
  margin-top: -20px;
  overflow: auto;
}
.login-wrapper {
  height: 400px;
  width: 500px;
  background: #fff;
  border: 1px solid #ccc;
  margin: 100px auto;
  padding: 20px;
}
.login-wrapper p {
  font-size: 18px;
  text-align: center;
}
.input-item {
  height: 46px;
  width: 360px;
  border: 1px solid #ccc;
  position: relative;
  margin: 0 auto;
  margin-bottom: 15px;
}
.input-item span {
  display: inline-block;
  height: 46px;
  padding: 12px 15px;
  position: absolute;
  color: #333;
  font-size: 16px;
}
.login-input {
  height: 100%;
  width: 100%;
  padding: 10px 16px 10px 40px;
  border: none;
  text-indent: 2px;
}
.user-check-item {
  height: 46px;
  width: 360px;
  margin: 0 auto;
}
.login-item {
  height: 46px;
  width: 360px;
  margin: 0 auto;
}
.login-btn {
  height: 100%;
  width: 100%;
  border: none;
  background: #db6f6a;
  color: #fff;
}
input,
textarea,
select,
a:focus {
  outline: none;
}
.login-error {
  height: 46px;
  width: 360px;
  margin: 0 auto;
  line-height: 40px;
  font-size: 12px;
  color: #f00;
}
</style>
