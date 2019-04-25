<template>
  <div class="section-add-container">
    <h4>增加节</h4>
    <router-link :to="{name: 'sectionMsg'}" class="return">
      返回
      <span class="glyphicon glyphicon-share-alt"></span>
    </router-link>
    <hr class="featurette-divider">

    <div class="section-add-content">
      <div class="form-group">
        <label for>节标题</label>
        <input class="form-control" v-model="sectionName">
      </div>
      <div class="form-group">
        <label for>章节序号</label>
        <input class="form-control" v-model="orderNum">
      </div>

      <div class="form-group">
        <label for>视频地址</label>
        <input class="form-control" v-model="sectionVideo">
      </div>
      <div class="form-group">
        <label for>所属章节</label>
        <select class="form-control" name="chapter" id="chapterId" v-model="chapterId">
          <option
            v-for="(item, index) in chapterList"
            :value="item.chapter_id"
            :key="index"
          >{{item.chapter_name}}</option>
        </select>
      </div>

      <button class="btn my-btn" @click="insertSection">增加数据</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapterId: "1",
      sectionName: "",
      sectionVideo: "",
      orderNum: "",
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
          chapter_id: "1",
          chapter_name: "第3章 项目管理过程组"
        }
      ]
    };
  },
  methods: {
    insertSection() {
      let self = this;
      axios
        .post("/insertSection", {
          params: {
            section_name: self.sectionName,
            section_video: self.sectionVideo,
            chapter_id: self.chapterId,
            order_num: self.orderNum
          }
        })
        .then(function(response) {
          self.$router.push({ name: "sectionMsg" });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
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
.section-add-container {
  padding: 20px;
  position: relative;
  padding-bottom: 200px;
}

.section-add-container .return {
  position: absolute;
  top: 25px;
  right: 20px;
  color: #bbb;
}
.section-add-container .return:hover {
  color: #db6f6a;
}
.section-add-container .col-md-6,
.col-md-6 .col-md-12 {
  padding-left: 0;
  padding-right: 0;
}

.section-add-container .btn {
  position: absolute;
  right: 50px;
  bottom: 120px;
}
.section-add-content .form-control {
  margin-bottom: 20px;
}
</style>
