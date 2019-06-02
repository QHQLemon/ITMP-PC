<template>
  <div class="dis-add-container">
    <p class="dis-header">讨论区 &nbsp;>&nbsp; 添加新主题</p>
    <div class="dis-content">
      <div class="form-group">
        <label for>主题类型</label>
        <select class="form-control" v-model="disType">
          <option value="1">老师答疑区</option>
          <option value="2">班级评论区</option>
        </select>
      </div>
      <div class="form-group">
        <label for="dis_title">标题</label>
        <input
          type="text"
          class="form-control"
          id="dis_title"
          placeholder="50字以内"
          v-model="disTitle"
        >
      </div>
      <div class="form-group" style="margin-top: 20px">
        <label>内容</label>
        <vue-edit @submitText="changeText" :editText="disContent"></vue-edit>
      </div>
      <button class="btn btn-primary submit-btn" @click="submitdis">提交</button>
    </div>
  </div>
</template>

<script>
import vueEdit from "@/components/edit/vueEdit";

export default {
  data() {
    return {
      disTitle: "",
      disContent: "",
      disType: 1,
      userId: "",
      userName: "",
      submitFlag: true,
      noGoodWord: []
    };
  },
  components: {
    vueEdit
  },
  methods: {
    changeText(text) {
      this.disContent = text;
    },
    getAllBan() {
      let self = this;
      this.axios
        .get("/getAllBan")
        .then(function(response) {
          self.noGoodWord = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submitdis() {
      let len = this.noGoodWord.length;
      console.log(this.disTitle, this.disContent, this.noGoodWord)
      for (let i = 0; i < len; i++) {
        let word = this.noGoodWord[i].ban_word;
        if (
          this.disTitle.indexOf(word) != -1 ||
          this.disContent.indexOf(word) != -1
        ) {
          this.submitFlag = false;
          alert("你所提交的主题含有涉及不符合国家法律的内容，请重新输入并提交");
          window.location.reload();
        }
      }
      if (this.submitFlag) {
        let self = this;
        this.axios
          .post("/insertTopic", {
            params: {
              topic_title: self.disTitle,
              topic_content: self.disContent,
              topic_type: self.disType,
              user_id: self.userId,
              user_name: self.userName
            }
          })
          .then(function(response) {
            console.log(response);
            self.$router.push({ name: "disLeft", params: { sort: 0 } });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  mounted() {
    this.userId = localStorage.user_id;
    this.userName = localStorage.user_name;
    this.getAllBan();
  }
};
</script >

<style scoped>
.dis-add-container {
  padding: 10px 0;
}
.dis-content {
  margin-top: 20px;
}
.submit-btn {
  float: right;
  margin-right: 10px;
}
</style>
