<template>
  <div class="chapter-edit-container">
    <h4>修改章</h4>
    <router-link :to="{name: 'chapterMsg'}" class="return">
      返回
      <span class="glyphicon glyphicon-share-alt"></span>
    </router-link>
    <hr class="featurette-divider">

    <div class="chapter-edit-content">
      <div class="form-group">
        <label for>章标题</label>
        <input class="form-control" v-model="chapterName">
      </div>
      <div class="form-group">
        <label for>课件地址</label>
        <input class="form-control" v-model="chapterCourseware">
      </div>

      <button class="btn my-btn" @click="updateChapter">修改数据</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapterId: "",
      chapterCourseware: "",
      chapterName: ""
    };
  },
  methods: {
    getChapterById() {
      let self = this;
      this.axios
        .post("/getChapterById", {
          params: {
            chapter_id: self.chapterId
          }
        })
        .then(function(response) {
          self.chapterName = response.data.data[0].chapter_name;
          self.chapterCourseware = response.data.data[0].chapter_courseware;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    updateChapter() {
      let self = this;
      this.axios
        .post("/updateChapter", {
          params: {
            chapter_id: self.chapterId,
            chapter_name: self.chapterName,
            chapter_courseware: self.chapterCourseware
          }
        })
        .then(function(response) {
          self.$router.push({ name: "chapterMsg" });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.chapterId = this.$route.params.chapter_id;
    this.getChapterById();
  }
};
</script >

<style scoped>
.chapter-edit-container {
  padding: 20px;
  position: relative;
  padding-bottom: 200px;
}

.chapter-edit-container .return {
  position: absolute;
  top: 25px;
  right: 20px;
  color: #bbb;
}
.chapter-edit-container .return:hover {
  color: #db6f6a;
}
.chapter-edit-container .col-md-6,
.col-md-6 .col-md-12 {
  padding-left: 0;
  padding-right: 0;
}

.chapter-edit-container .btn {
  position: absolute;
  right: 50px;
  bottom: 50px;
}
</style>
