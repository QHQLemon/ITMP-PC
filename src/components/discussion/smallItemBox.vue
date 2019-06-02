<template>
  <div class="small-item-box">
    <div class="small-item box-container" v-for="(item, index) in smallList" :key="index">
      <small-item :smallItem="item"></small-item>
    </div>
    <div class="clearfix">
      <textarea
        placeholder="回复："
        @focus="changeRows"
        name="small-content"
        id="small-text"
        cols="85"
        rows="1"
        class="dis-small-text"
        v-model="replySmallContent"
      ></textarea>
      <button class="btn btn-sm btn-primary" @click="postSmallReply">提交</button>
    </div>
  </div>
</template>

<script>
import smallItem from "./smallItem";

export default {
  props: ["smallList", "replyId"],
  data() {
    return {
      userId: "",
      userName: "",
      replySmallContent: "",
      submitFlag: true,
      noGoodWord: []
    };
  },
  components: {
    smallItem
  },
  methods: {
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

    postSmallReply() {
      let len = this.noGoodWord.length;
      console.log(this.replySmallContent, this.noGoodWord);
      for (let i = 0; i < len; i++) {
        let word = this.noGoodWord[i].ban_word;
        if (this.replySmallContent.indexOf(word) != -1) {
          this.submitFlag = false;
          alert("你所提交的主题含有涉及不符合国家法律的内容，请重新输入并提交");
          window.location.reload();
        }
      }
      if (this.submitFlag) {
        let self = this;
        this.axios
          .post("/insertReply", {
            params: {
              reply_type: 1,
              reply_content: self.replySmallContent,
              from_id: self.userId,
              from_name: self.userName,
              reply_to_id: self.replyId
            }
          })
          .then(function(response) {
            console.log(response.data, "加smallreply");
            window.location.reload();
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    changeRows() {
      $("#small-text").attr("rows", "4");
    }
  },
  mounted() {
    this.userId = localStorage.getItem("user_id");
    this.userName = localStorage.getItem("user_name");
    this.getAllBan();
  }
};
</script >

<style scoped>
.small-item-box {
  min-height: 100px;
  width: 600px;
  border: 1px solid #f6f8fa;
  box-shadow: 1px 1px 1px 1px #ddd;
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.6em;
  padding: 10px;
}
.dis-small-text {
  margin-top: 10px;
  padding: 5px;
}
.btn-sm.btn-primary {
  float: right;
  margin: 5px 0px;
}
</style>
