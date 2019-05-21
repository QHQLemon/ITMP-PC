<template>
  <div class="discussion-container">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 讨论区</p>
      <div class="dis-header clearfix">
        <div class="dis-notice">
          <h3>讨论区</h3>
          <span>请遵守讨论区规则，共建一个良好的讨论环境</span>
        </div>
        <div class="dis-search col-lg-4">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索主题内容" v-model="topicTitle">
            <span class="input-group-btn">
              <button class="btn my-btn" type="button" @click="queryTopic">搜索</button>
            </span>
          </div>
        </div>
      </div>
      <hr class="featurette-divider">
      <p class="dis-disc">
        欢迎大家来到讨论区！本讨论区供各位同学就课程问题进行交流学习。请同学们认真阅读下面的
        <a
          data-toggle="popover"
          title="讨论区使用规则"
          data-content="同学们，为了提高讨论区体验，共同创造文明有价值的讨论区，希望大家能熟知以下公约内容：
1 看清板块功能后提问，各子板块承载的功能各不相同，请同学们仔细阅读内容说明后在正确的板块内提问。
2 先搜索后提问，提问前先搜索总讨论区，确定没有人提过相似问题后再发起新帖，避免发内容重复的贴。
3 注重发帖、回复、评论的质量，提好问题，做好回答，希望同学们能共同努力提高讨论区的质量和价值。
4 广告消息、侮辱性内容、违法性内容等将被删除，如情节严重、屡劝不改我们将不得以对相应帐号进行禁言，希望大家能自觉维护讨论区和谐。
5 以文明开放的心态对待知识，学术问题上向有各家之说，我们鼓励同学们能以开放的心态听取学术上不同的声音，支持各抒己见，在讨论激荡中获得学习上的进步，但希望不要出现偏离学术讨论范畴的人身攻击及过激偏执的言论。
最后，感谢同学们能耐心读完这份公约，希望大家能在讨论区有良好的体验，对学习有所帮助！"
        >【讨论区使用规则】</a>，然后再进行相关发表，谢谢！
      </p>
      <div class="dis-content">
        <div class="col-lg-8">
          <router-view ref="showBox"></router-view>
        </div>
        <div class="col-lg-3">
          <dis-right></dis-right>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import disRight from "@/components/discussion/disRight";
import disLeft from "@/components/discussion/disLeft";
export default {
  data(){
    return {
      topicTitle: ''
    }
  },
  components: {
    disRight,
    disLeft
  },
  methods: {
      queryTopic(){
        console.log(this.topicTitle);
        console.log(this.$refs);
        this.$refs.showBox.getData(this.topicTitle);
      }
  },
  mounted() {
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
  }
};
</script >

<style scoped>
.discussion-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}
.header-img {
  width: 100%;
  position: relative;
}
.header-img img {
  width: 100%;
}
.header-img div {
  position: absolute;
  left: 150px;
  top: 80px;
  color: #fff;
  font-size: 32px;
  font-weight: 600;
}
.discussion-container .featurette-divider {
  margin-top: 5px;
}
.dis-notice {
  float: left;
}
.dis-notice h3 {
  display: inline-block;
}
.dis-notice span {
  margin-left: 20px;
  color: #db6f6a;
}
.dis-search {
  float: right;
}
.dis-disc a {
  color: #db6f6a;
  font-weight: 600;
  cursor: pointer;
}
.dis-content {
  margin-top: 40px;
}
.dis-content .col-lg-8 {
  background: #fff;
  border: 1px solid #ccc;
  min-width: 825px;
  min-height: 600px;
  margin-bottom: 100px;
}
.dis-content .col-lg-3 {
  margin-left: 25px;
  min-height: 250px;
  padding: 0;
}
</style>
