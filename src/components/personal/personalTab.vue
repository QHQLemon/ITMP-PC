<template>
  <div class="container">
    <div class="personal-tab col-md-10">
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#home" aria-controls="home" role="tab" data-toggle="tab">发表主题</a>
        </li>
        <li role="presentation">
          <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">回复评论</a>
        </li>
        <li role="presentation">
          <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">收藏案例</a>
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="home">
          <personal-topic v-for="(item, index) in topicList" :key="index" :topicItem="item" v-if="topicList.length > 0"></personal-topic>
          <no-data v-if="topicList.length == 0"></no-data>
        </div>
        <div role="tabpanel" class="tab-pane" id="profile">
          <personal-reply v-for="(item, index) in replyList" :key="index" :replyItem="item" v-if="replyList.length > 0"></personal-reply>
        <no-data v-if="replyList.length == 0"></no-data>
        </div>
        <div role="tabpanel" class="tab-pane" id="messages">
         <no-data v-if="enshrineList.length == 0"></no-data>
          <personal-case v-for="(item, index) in enshrineList" :key="index" v-if="enshrineList.length > 0" :caseItem="item"></personal-case>
        </div>
      </div>
    </div>
    <div class="col-md-2">
      <router-link  :to="{name: 'changePwd'}" class="btn change-btn">
        修改密码
      </router-link>
    </div>
  </div>
</template>

<script>
import personalCase from "./personalCase";
import personalTopic from "./personalTopic";
import personalReply from "./personalReply";
import noData from "./noData";


export default {
  props: ['enshrineList', 'topicList', 'replyList'],
  components: {
    personalCase,
    personalTopic,
    personalReply,
    noData

  }
};
</script >

<style scoped>
.personal-tab.col-md-10 {
  margin-top: 50px;
}
.nav.nav-tabs li:hover a {
  background: #db6f6a;
  color: #fff;
}
.change-btn{
  padding: 10px 50px;
  margin-top: 40px;
  color: #fff;
  background: #dd6f6a;
}
</style>
