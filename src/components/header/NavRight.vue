<template>
  <div class="col-md-4 nav-right">
    <div class="manage" v-if="loginFlag">
      <router-link tag="span" :to="{name: 'personal'}" class="personal">个人中心</router-link>
      <img
        src="../../assets/img/small.jpg"
        alt
        class="icon-person"
        @mouseenter="enterImg"
        @mouseleave="leaveImg"
      >
      <div class="manage-list" v-show="myFlag" @mouseenter="enterList" @mouseleave="leaveList">
        <span class="glyphicon glyphicon-triangle-top my-icon-top"></span>
        <ul class="manage-menu"  v-if="manageShowFlag">
          <router-link tag="li" :to="{name: 'user'}">基础信息设置</router-link>
          <li class="m-divider"></li>
          <router-link tag="li" :to="{name: 'courseContentMsg'}">课程管理</router-link>
          <router-link tag="li" :to="{name: 'caseMsg'}">案例管理</router-link>
          <router-link tag="li" :to="{name: 'task'}">作业管理</router-link>
          <router-link tag="li" :to="{name: 'test'}">测试管理</router-link>
          <li class="m-divider"></li>
          <li @click="exitLogin">退出登录</li>
        </ul>
        <ul class="manage-menu" v-else>
          <li @click="exitLogin">退出登录</li>
        </ul>
      </div>
    </div>
    <div class="login" v-else>
      <router-link tag="span" :to="{name: 'loginPage'}">登录</router-link>
      <img src="../../assets/img/small.jpg" alt class="icon-person">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: "",
      myFlag: false
    };
  },
  computed: {
    loginFlag() {
      if (
        this.$store.state.userRouter == "all" ||
        this.$store.state.userRouter.length > 10
      ) {
        return true;
      } else {
        return false;
      }
    },
    manageShowFlag: {
      get() {
        if (this.$store.state.userRouter == "all") {
          return true;
        } else {
          return false;
        }
      },
      set(newVlaue) {
        return newVlaue;
      }
    }
  },
  methods: {
    enterImg() {
      this.myFlag = true;
    },
    leaveImg() {
      this.timer = setTimeout(() => {
        this.myFlag = false;
      }, 300);
    },
    enterList() {
      clearTimeout(this.timer);
    },
    leaveList() {
      this.myFlag = false;
    },
    exitLogin() {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_name");
      this.getRight();
      this.$router.replace({ name: "home" });
    },
    getRight() {
      let self = this;
      axios.defaults.headers.common["token"] = localStorage.getItem("token");
      axios.defaults.headers.post["Content-Type"] =
        "application/json;charset=utf-8"; //配置请求头
      axios
        .get("/getRight")
        .then(function(response) {
          self.$store.commit("initUserRouter", response.data.data);
          console.log("store", self.$store.state.userRouter);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted(){
  },
  watch: {
    myFlag(oldv, newv){
    }
  }
};
</script >

<style scoped>
.personal {
  cursor: pointer;
  margin-right: 10px;
}
.nav-right{
  height: 100%;
  position: relative;
  font-size: 14px;
 }

 .login{
   float: right;
 }
 .login span:hover{
   color: #db6f6a;
   cursor: pointer;
 }
 .nav-right .icon-person{
   border-radius: 50%;
   margin-left: 5px;
   vertical-align: middle;
 }

.manage{
  float: right;
}
.manage span:hover{
  color: #db6f6a;
}


 .manage-list{
   position: absolute;
 }

 .my-icon-top{
   position: absolute;
   top: -10px;
   right: -96px;
 }
 .manage-list ul{
   position: absolute;
   top: 0;
   right: -103px;
   width: 130px;
   border:1px solid #ddd;
   border-top-color: transparent;
 }
 .manage-list ul li{
   padding: 3px 20px;
   line-height: 30px;
   font-size: 14px;
   color: #777;
   cursor: pointer;
 }
 .manage-list ul li:hover{
   background: #F3F4F6;
 }
.manage-list ul li.m-divider{
  padding: 0;
   border-top: 1px solid #ddd;
 }

 .manage-menu{
  background: #fff;
 }

</style>
