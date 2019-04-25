<template>
  <div class="test-item">
    <h4>{{chapterItem.chapter_name}}</h4>
    <div class="item clearfix">
      <span>第 {{chapterIndex+ 1 }} 章 作业</span>
      <router-link
        tag="button"
        :to="{name: 'taskSubmit', params: {chapter_id: chapterItem.chapter_id, chapter_name: chapterItem.chapter_name}}"
        class="btn my-btn"
      >前往作业</router-link>
    </div>
    <div class="item clearfix">
      <span>第 {{chapterIndex + 1 }} 章 测试</span>
      <router-link
        tag="button"
        :to="{name: 'testSubmit', params: {chapter_id: chapterItem.chapter_id, chapter_name: chapterItem.chapter_name}}"
        class="btn my-btn"
      >前往测试</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["chapterItem", "chapterIndex"],
  mounted() {
    // console.log(this.chapterIndex)
  }
};
</script >

<style scoped>
.test-item {
  margin-bottom: 50px;
}
.test-item h4 {
  font-size: 1.3em;
}
.test-item .item:first-of-type {
  margin-top: 20px;
  border-bottom: 1px solid #ddd;
}
.item {
  padding: 10px 10px;
  background: #f6f8fa;
}
.item:hover {
  background: #ffd;
}
.item span {
  font-weight: 600;
  display: inline-block;
  margin-top: 5px;
}
.item button {
  float: right;
}
</style>
