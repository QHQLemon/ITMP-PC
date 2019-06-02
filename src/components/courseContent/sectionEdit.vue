<template>
  <div class="section-edit-container">
    <h4>修改节</h4>
    <router-link :to="{name: 'sectionMsg'}" class="return">
      返回
      <span class="glyphicon glyphicon-share-alt"></span>
    </router-link>
    <hr class="featurette-divider">

    <div class="section-edit-content">
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
        <select
          class="form-control"
          name="chapter"
          id="chapterId"
          v-model="chapterId"
          @change="seachAction"
        >
          <option
            v-for="(item, index) in chapterList"
            :value="item.chapter_id"
            :key="index"
          >{{item.chapter_name}}</option>
        </select>
      </div>

      <button class="btn my-btn" @click="updateSection">修改数据</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapterId: "",
      sectionName: "",
      sectionVideo: "",
      sectionId: "",
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
    getSectionById() {
      let self = this;
      this.axios
        .post("/getSectionById", {
          params: {
            section_id: self.sectionId
          }
        })
        .then(function(response) {
          self.sectionName = response.data.data[0].section_name;
          self.sectionVideo = response.data.data[0].section_video;
          self.chapterId = response.data.data[0].chapter_id;
          self.orderNum = response.data.data[0].order_num;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    updateSection() {
      let self = this;
      this.axios
        .post("/updateSection", {
          params: {
            section_id: self.sectionId,
            section_name: self.sectionName,
            section_video: self.sectionVideo,
            chapter_id: self.chapterId,
            order_num: self.orderNum
          }
        })
        .then(function(response) {
          self.$router.push({ name: "sectionMsg" });
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getAllChapter() {
      let self = this;
      this.axios
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
    this.sectionId = this.$route.params.section_id;
    this.getSectionById();
    this.getAllChapter();
  }
};
</script >

<style scoped>
.section-edit-container {
  padding: 20px;
  position: relative;
  padding-bottom: 200px;
}

.section-edit-container .return {
  position: absolute;
  top: 25px;
  right: 20px;
  color: #bbb;
}
.section-edit-container .return:hover {
  color: #db6f6a;
}
.section-edit-container .col-md-6,
.col-md-6 .col-md-12 {
  padding-left: 0;
  padding-right: 0;
}

.section-edit-container .btn {
  position: absolute;
  right: 50px;
  bottom: 120px;
}
.section-edit-content .form-control {
  margin-bottom: 20px;
}
</style>
