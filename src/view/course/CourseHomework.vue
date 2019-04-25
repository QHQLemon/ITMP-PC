<template>
  <div class="homework-conatiner">
    <div class="homework-content" v-for="(item, index) in chapterList" :key="index">
      <test-item :chapterItem="item" :chapterIndex="index"></test-item>
    </div>
  </div>
</template>

<script>
import testItem from "@/components/course/testItem";
export default {
  data() {
    return {
      chapterList: [
        {
          chapter_id: "1",
          chapter_name: "第1章 总论"
        },
        {
          chapter_id: "2",
          chapter_name: "第2章 项目管理和IT背景"
        },
        {
          chapter_id: "3",
          chapter_name: "第3章 项目管理过程组"
        }
      ]
    };
  },
  components: {
    testItem
  },
  methods: {
    getAllChapter() {
      let self = this;
      axios
        .get("/getAllChapter")
        .then(function(response) {
          self.chapterList = response.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAllChapter();
  }
};
</script >

<style scoped>
.homework-conatiner {
  padding: 20px 10px;
}
</style>
