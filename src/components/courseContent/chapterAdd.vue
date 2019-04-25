<template>
  <div class="chapter-add-container">
    <h4>增加章</h4>
    <router-link :to="{name: 'chapterMsg'}" class="return">
      返回
      <span class="glyphicon glyphicon-share-alt"></span>
    </router-link>
    <hr class="featurette-divider">

    <div class="chapter-add-content">
      <div class="form-group">
        <label for>章标题</label>
        <input class="form-control" v-model="chapterTitle">
      </div>
      <div class="form-group">
        <label for>课件地址</label>
        <input class="form-control" v-model="courseware">
      </div>
      <button class="btn my-btn" @click="insertChapter">增加数据</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapterTitle: "",
      courseware: ""
    };
  },
  methods: {
    insertChapter() {
      let self = this;
      axios
        .post("/insertChapter", {
          params: {
            chapter_name: self.chapterTitle,
            chapter_courseware: self.courseware
          }
        })
        .then(function(response) {
          self.$router.push({ name: "chapterMsg" });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script >

<style scoped>
.chapter-add-container {
  padding: 20px;
  position: relative;
  padding-bottom: 200px;
}

.chapter-add-container .return {
  position: absolute;
  top: 25px;
  right: 20px;
  color: #bbb;
}
.chapter-add-container .return:hover {
  color: #db6f6a;
}
.chapter-add-container .col-md-6,
.col-md-6 .col-md-12 {
  padding-left: 0;
  padding-right: 0;
}

.chapter-add-container .btn {
  position: absolute;
  right: 50px;
  bottom: 50px;
}
</style>
