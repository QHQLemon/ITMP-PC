<template>
<div class="case-msg-container">
   <div class="container">
      <p>首页 &nbsp;>&nbsp; 案例管理</p>
    <div class="case-msg-content">
      <div class="col-md-2">
        <router-link :to="{name: 'caseMsgRight'}" class="test-btn" tag="span">案例管理</router-link>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
    </div>
</div>

</template>

<script>

export default{

}
</script >

<style scoped>
.case-msg-container{
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}
.case-msg-content {
  margin-top: 20px;
}
.case-msg-content > .col-md-2 {
  padding: 10px;
  min-height: 600px;
  background: rgb(253, 253, 253);
}
.case-msg-content > .col-md-9 {
  background: #fff;
  min-width: 920px;
  min-height: 600px;
  margin-bottom: 100px;
}
.test-btn {
  border-bottom: 1px solid #fff;
  display: inline-block;
  background: #db6f6a;
  font-size: 14px;
  border-radius: 2px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-indent: 1em;
  cursor: pointer;
  color: #fff;
}

</style>
