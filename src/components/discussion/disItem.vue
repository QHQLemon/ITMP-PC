<template>
  <div class="dis-item">
    <div :to="{name: 'disDetails'}">
      <p class="dis-item-top">
        <span class="dis-item-sort">【{{disSort[sortId]}}】</span>
      </p>
      <router-link class="dis-item-content" tag="p"
      :to="{name: 'disDetails', params: {topic_id: topicItem.topic_id }}">
        {{topicItem.topic_title}}
      </router-link>
      <p>
        <span class="username">{{topicItem.user_name}}</span>
        <span class="item-time"> 于{{getTime(topicItem.topic_ctime)}} 发表</span>
        <span class="item-num">
          <span class="glyphicon glyphicon-eye-open"></span>（{{topicItem.topic_look}}）
          <span class="glyphicon glyphicon-comment"></span>（{{topicItem.topic_reply}}）
          <span class="glyphicon glyphicon-thumbs-up"></span>（{{topicItem.topic_like}}）
        </span>
      </p>
      <hr class="featurette-divider">
    </div>
  </div>
</template>

<script>
export default {
  props: ['topicItem', 'sortId'],
  data(){
    return {
      disSort: ["综合讨论区", "老师答疑区", "全班讨论区"]
    }
  },
  mounted() {
  },
  methods: {
    getTime(ctime){
      let date = new Date(ctime);
      return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    }
  }
};
</script >

<style scoped>
.dis-item-top img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 20px;
}

.dis-item-sort {
  float: right;
}
.dis-item-content {
  height: 50px;
  font-weight: 600;
  line-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.dis-item-content:hover{
  color: #db6f6a;
}
.item-num {
  float: right;
}

.username{
  margin-right: 10px;
  cursor: pointer;
  color: #db6f6a;
}

</style>
