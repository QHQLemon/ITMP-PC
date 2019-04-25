<template>
  <div class="presonal-topic-item">
    <router-link
      class="topic-title"
      v-html="topicItem.topic_content"
      tag="div"
      :to="{name: 'disDetails', params: { topic_id: topicItem.topic_id}}"
    ></router-link>
    <div class="topic_info">
      <span class="topic_name">{{topicItem.user_name}}</span>
      发表于{{new Date(topicItem.topic_ctime).toLocaleString()}}
      <span
        class="topic_about"
      >{{topicItem.topic_type == 1 ? "教师答疑区" : "班级讨论区"}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["topicItem"]
};
</script >

<style scoped>
.presonal-topic-item .topic-title {
  height: 80px;
  line-height: 80px;
}
.presonal-topic-item .topic_info {
  position: relative;
  color: #888;
}
.presonal-topic-item .topic_info span {
  color: #db6f6a;
}
.topic_name {
  margin-right: 10px;
}
.topic_about {
  position: absolute;
  right: 0;
}
</style>
