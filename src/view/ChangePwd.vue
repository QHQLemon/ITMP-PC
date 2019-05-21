<template>
  <div class="change-container">
    <div class="container">
      <div class="change-wrapper">
        <p>修改密码</p>
        <hr class="featurette-divider">
        <div class="input-item">
          <!-- <span class="glyphicon glyphicon-lock"></span> -->
          <input type="password" class="login-input" placeholder="旧密码" v-model="oldpwd">
        </div>
        <div class="input-item">
          <!-- <span class="glyphicon glyphicon-lock"></span> -->
          <input type="password" class="login-input" placeholder="新密码" v-model="new1pwd">
        </div>
        <div class="input-item">
          <!-- <span class="glyphicon glyphicon-lock"></span> -->
          <input type="password" class="login-input" placeholder="再次确认新密码" v-model="new2pwd">
        </div>
        <div class="change-item">
          <button class="change-btn" @click="changePwd">提交</button>
          <!-- <button class="change-btn" @click="changePwd" data-toggle="modal" data-target="#changeModal">提交</button> -->
        </div>
        <div class="change-error">{{errorWord}}</div>
      </div>
    </div>
    <div
      class="modal fade"
      id="changeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">通知</h4>
          </div>
          <div class="modal-body">
            <p>密码已修改成功</p>
          </div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> -->
            <button
              type="button"
              class="btn btn-primary"
              @click="goPersonal"
              data-dismiss="modal"
            >知道了</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldpwd: "",
      new1pwd: "",
      new2pwd: "",
      errorWord: "",
      userId: ""
    };
  },
  methods: {
    changePwd() {
      $.bootstrapLoading.start();
      if (this.oldpwd == "" || this.new1pwd == "" || this.new1pwd == "") {
        this.errorWord = "三项输入皆不能为空，请输入完整";
        $.bootstrapLoading.end();
      } else if (this.new1pwd != this.new2pwd) {
        this.errorWord = "两次输入的新密码不匹配，请重新输入";
        this.oldpwd = "";
        this.new1pwd = "";
        this.new2pwd = "";
        $.bootstrapLoading.end();
      } else {
        let self = this;
        axios
          .post("/changePwd", {
            params: {
              oldPwd: self.oldpwd,
              newPwd: self.new1pwd,
              userId: self.userId
            }
          })
          .then(function(response) {
            console.log(response.data.data);
            $.bootstrapLoading.end();
            $("#changeModal").modal("show");
          })
          .catch(function(err) {
            self.errorWord = "你的旧密码与服务器存储不一致，请重新输入";
            self.oldpwd = "";
            self.new1pwd = "";
            self.new2pwd = "";
            $.bootstrapLoading.end();
            console.log(err);
          });
      }
    },
    goPersonal() {
      this.$router.push({ name: "personal" });
    }
  },
  mounted() {
    this.userId = window.localStorage.getItem("user_id");
  }
};
</script >

<style scoped>
.change-container {
  background: #f6f8fa;
  min-height: 800px;
  margin-top: -20px;
  overflow: auto;
}
.container {
  border: 1px solid #ccc;
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
.change-wrapper {
  margin: 50px auto;
  width: 600px;
  min-height: 500px;
}
.change-wrapper p {
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
  padding: 10px 16px 10px 10px;
  border: none;
  text-indent: 2px;
}
.change-item {
  height: 46px;
  width: 360px;
  margin: 0 auto;
}
.change-btn {
  height: 100%;
  width: 100%;
  border: none;
  background: #db6f6a;
  color: #fff;
}
.change-error {
  height: 46px;
  width: 360px;
  margin: 0 auto;
  line-height: 40px;
  font-size: 12px;
  color: #f00;
}
</style>
