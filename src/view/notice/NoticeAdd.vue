<template>
  <div class="notice-add-container">
    <div class="container" style="padding-left: 0">
      <p>首页 &nbsp;>&nbsp; 公告>&nbsp; 修改公告</p>
    </div>
    <div class="container notice-add-content">
      <h2>添加公告内容</h2>
      <hr class="featurette-divider">
      <div class="col-md-9">
        <div class="div-group">
          <label for="notice_title">公告标题</label>
          <input
            type="text"
            class="form-control"
            id="notice_title"
            placeholder="50字以内"
            v-model="noticeTitle"
          >
        </div>
        <div class="form-group" style="margin-top: 20px">
          <label>公告内容</label>
          <vue-edit :editText="noticeContent" @submitText="changeText"></vue-edit>
        </div>
        <button class="btn btn-primary submit-btn" @click="submitNotice">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import vueEdit from "@/components/edit/vueEdit";
export default {
  data() {
    return {
      noticeContent: "",
      noticeTitle: ""
    };
  },
  components: {
    vueEdit
  },
  methods: {
    changeText(data) {
      this.noticeContent = data;
    },
    submitNotice() {
      let self = this;
      this.axios
        .post("/insertNotice", {
          params: {
          notice_title: self.noticeTitle,
          notice_content: self.noticeContent}
        })
        .then(function(response) {
          console.log(response);
          self.$router.push({name: 'notice'})
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

};
</script >

<style scoped>
.notice-add-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  padding-bottom: 100px;
}
.notice-add-container .notice-add-content {
  background: #fff;
  border: 1px solid #ccc;
  min-height: 600px;
  padding-top: 20px;
}
.notice-add-container .notice-add-content .col-md-9 {
  margin-top: 10px;
  margin-bottom: 40px;
  max-width: 810px;
}

.notice-add-container .notice-add-content .submit-btn {
  float: right;
}
</style>
