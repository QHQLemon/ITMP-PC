<template>
  <div class="course-content-msg-container">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 章节管理</p>
      <div class="course-content-msg-content">
        <div class="col-md-2">
          <router-link :to="{name: 'chapterMsg'}" class="test-btn chapter-btn" tag="span">章管理</router-link>
          <router-link :to="{name: 'sectionMsg'}" class="test-btn section-btn" tag="span">节管理</router-link>
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
.course-content-msg-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}
.course-content-msg-content {
  margin-top: 20px;
}
.course-content-msg-content > .col-md-2 {
  padding: 10px;
  min-height: 600px;
  background: rgb(253, 253, 253);
}
.course-content-msg-content > .col-md-9 {
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
