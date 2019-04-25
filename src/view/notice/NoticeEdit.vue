<template>
  <div class="notice-add-container">
    <div class="container" style="padding-left: 0">
      <p>首页 &nbsp;>&nbsp; 公告&nbsp;>&nbsp; 修改公告</p>
    </div>
    <div class="container notice-add-content">
      <h2>修改公告内容</h2>
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
          <vue-edit @submitText="changeText" :editText="noticeContent"></vue-edit>
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
      noticeContent: "dfaksdf",
      noticeTitle: ""
    };
  },
  components: {
    vueEdit
  },
  methods: {
    changeText(data) {
      console.log('change')
        this.noticeContent = data;
    },
    submitNotice() {
      let self = this;
      console.log(this.noticeContent, this.noticeTitle)
      axios
        .post("/updateNotice", {
          params: {
          notice_id: self.$route.params.notice_id,
          notice_title: self.noticeTitle,
          notice_content: self.noticeContent
          }
        })
        .then(function(response) {
          console.log(response);
          self.$router.push({name: 'notice'});
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    console.log(this.$route.params.notice_id);
    let self = this;
    axios
      .post("/getNoticeById", {
        params: {
        notice_id: self.$route.params.notice_id
        }
      })
      .then(function(response) {
        self.noticeTitle = response.data.data[0].notice_title;
        self.noticeContent = response.data.data[0].notice_content;
        console.log(self.noticeContent)
      })
      .catch(function(error) {
        console.log(error);
      });
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
