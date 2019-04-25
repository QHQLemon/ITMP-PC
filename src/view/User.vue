<template>
  <div class="user-container">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 用户管理 {{this.$store.state.count}}</p>
      <div class="user-content">
        <div class="col-md-2">
          <!-- <router-link :to="{name: 'home'}" class="my-bb">教学内容管理</router-link> -->
          <router-link :to="{name: 'classMsg'}" class="user-btn" tag="span">班级管理</router-link>
          <router-link :to="{name: 'studentMsg'}" class="user-btn" tag="span">学生管理</router-link>
          <router-link :to="{name: 'adminMsg'}" class="user-btn">管理员</router-link>
        </div>
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script >

<style scoped>
.user-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}
.user-content {
  margin-top: 20px;
}
.user-content > .col-md-2 {
  padding: 10px;
  min-height: 600px;
  background: rgb(253, 253, 253);
}
.user-content > .col-md-9 {
  background: #fff;
  min-width: 920px;
  min-height: 600px;
  margin-bottom: 100px;
}
.user-btn {
  border-bottom: 1px solid #fff;
  display: inline-block;
  background: #f6f8fa;
  font-size: 14px;
  border-radius: 2px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-indent: 1em;
  cursor: pointer;
}
.user-btn:hover {
  background: #db6f6a;
  color: #f6f8fa;
}
.user-btn.active {
  background: #db6f6a;
  color: #f6f8fa;
}
.user-btn.router-link-exact-active {
  background: #db6f6a;
  color: #f6f8fa;
}
</style>
