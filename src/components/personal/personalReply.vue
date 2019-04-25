<template>
  <div class="presonal_reply_item">
    <router-link
      class="reply_content"
      v-html="replyItem.reply_content"
      tag="div"
      :to="{name: 'disDetails', params: { topic_id: replyItem.topic_id}}"
    ></router-link>
    <div class="reply_info">
      <span class="reply_name">{{replyItem.from_name}}</span>
      回复于 {{new Date(replyItem.reply_time).toLocaleString()}}
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["replyItem"]
};
</script >

<style scoped>
.presonal_reply_item {
  padding-top: 20px;
}
.reply_content {
  line-height: 1.7em;
}
.reply_info {
  line-height: 2.4em;
  color: #888;
}
.reply_info .reply_name {
  color: #db6f6a;
}
</style>
