<template>
  <div class="test-container">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 测试管理</p>
    <div class="test-content">
      <div class="col-md-2">
        <router-link :to="{name: 'testMsg'}" class="test-btn" tag="span">试题管理</router-link>
        <router-link :to="{name: 'testAnswerMsg'}" class="test-btn" tag="span">试题答案</router-link>
        <router-link :to="{name: 'testScoreMsg'}" class="test-btn" tag="span">测试结果</router-link>
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
.test-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}
.test-content {
  margin-top: 20px;
}
.test-content > .col-md-2 {
  padding: 10px;
  min-height: 600px;
  background: rgb(253, 253, 253);
}
.test-content > .col-md-9 {
  background: #fff;
  min-width: 920px;
  min-height: 600px;
  margin-bottom: 100px;
}
.test-btn {
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
.test-btn:hover {
  background: #db6f6a;
  color: #f6f8fa;
}
.test-btn.active {
  background: #db6f6a;
  color: #f6f8fa;
}
.test-btn.router-link-exact-active {
  background: #db6f6a;
  color: #f6f8fa;
}
</style>
