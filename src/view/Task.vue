<template>
  <div class="task-container">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 作业管理</p>
      <div class="task-content">
        <div class="col-md-2">
          <router-link :to="{name: 'taskMsg'}" class="task-btn" tag="span">作业管理</router-link>
          <router-link id="correct-task" :to="{name: 'taskCorrect'}" class="task-btn" tag="span">批改作业</router-link>
          <router-link :to="{name: 'taskScoreMsg'}" class="task-btn" tag="span">作业成绩管理</router-link>
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
.task-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}
.task-content {
  margin-top: 20px;
}
.task-content > .col-md-2 {
  padding: 10px;
  min-height: 600px;
  background: rgb(253, 253, 253);
}
.task-content > .col-md-9 {
  background: #fff;
  min-width: 920px;
  min-height: 600px;
  margin-bottom: 100px;
}
.task-btn {
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
.task-btn:hover {
  background: #db6f6a;
  color: #f6f8fa;
}
.task-btn.active {
  background: #db6f6a;
  color: #f6f8fa;
}
.task-btn.router-link-exact-active {
  background: #db6f6a;
  color: #f6f8fa;
}
</style>
