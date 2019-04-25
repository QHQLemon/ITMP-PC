<template>
  <div class="dis-details-contanier">
    <p class="dis-header">讨论区 &nbsp;>&nbsp; 主题详情</p>
    <div class="dis-details-content clearfix">
      <p class="details-title">{{topicItem.topic_title}}</p>
      <p class="details-content" v-html="topicItem.topic_content"></p>
      <div class="dis-footer clearfix">
        <span class="username">{{topicItem.user_name}}</span>
        <span>{{getTime(new Date(topicItem.topic_ctime))}}</span>
        <span class="good">
          <a href="#replayInput" class="replay-btn btn btn-primary">
            回复
            <span class="glyphicon glyphicon-share-alt"></span>
          </a>
          <span class="glyphicon glyphicon-thumbs-up" @click="changeGood" :class="{'active': like}"></span>
          &nbsp; {{topicItem.topic_like}} &nbsp;
        </span>
      </div>
      <hr class="featurette-divider">
      <div class="dis-details-footer" v-show="userId == topicItem.user_id">
        <router-link
          :to="{name: 'disEdit', params: {topic_id: topicItem.topic_id, topic_title: topicItem.topic_title, topic_content: topicItem.topic_content }}"
          tag="span"
        >
          <span class="glyphicon glyphicon-edit"></span>
        </router-link>|
        <span @click="deleteTopic" class="glyphicon glyphicon-trash"></span>
      </div>
    </div>
    <div class="replay-container">
      <p>共 {{replyList.length}} 条回复</p>
      <hr class="featurette-divider">
      <div v-for="(item, index) in replyList" :key="index">
        <replay-item :replyItem="item"></replay-item>
      </div>
    </div>
    <div id="replayInput">
      <p>回复主题</p>
      <vue-edit @submitText="changeText" :editText="replyContent"></vue-edit>
    </div>
    <button class="btn btn-primary submit-btn" @click="submitDis">提交</button>
  </div>
</template>

<script>
import replayItem from "./replayItem";
import vueEdit from "@/components/edit/vueEdit";
export default {
  data() {
    return {
      replyContent: "",
      topicId: 1,
      userId: "",
      userName: "小H",
      like: false,
      replyList: [
        //   {
        //     reply_id: 1,
        //     topic_id: 11,
        //     reply_type: 0,
        //     from_id: 3,
        //     from_name: "kerry",
        //     to_id: 6,
        //     reply_time: "2019-03-15T19:44:05.000Z",
        //     replyed_num: 1,
        //     reply_like: 2,
        //     reply_content: "nana-and-nana",
        //     children: [
        //       {
        //         reply_id: 4,
        //         topic_id: 11,
        //         reply_type: 1,
        //         from_id: 1,
        //         from_name: "lemon",
        //         to_id: 3,
        //         reply_time: "2019-03-15T21:44:05.000Z",
        //         replyed_num: 0,
        //         reply_like: 0,
        //         reply_content: "hello"
        //       }
        //     ]
        //   },
        //   {
        //     reply_id: 2,
        //     topic_id: 11,
        //     reply_type: 0,
        //     from_id: 1,
        //     from_name: "lemon",
        //     to_id: 6,
        //     reply_time: "2019-03-15T19:44:05.000Z",
        //     replyed_num: 0,
        //     reply_like: 1,
        //     reply_content: "铃儿响叮当",
        //     children: []
        //   }
      ],
      topicItem: {
        // topic_id: 10,
        // topic_type: 2,
        // topic_title: "大家好呀！",
        // topic_content: "咚咚咚",
        // topic_ctime: "2019-03-15T09:38:35.000Z",
        // topic_look: 5,
        // topic_reply: 3,
        // topic_like: 3,
        // user_id: 6,
        // user_name: "小H"
      }
    };
  },
  components: {
    replayItem,
    vueEdit
  },
  methods: {
    changeText(text) {
      this.replyContent = text;
    },
    getTopicById() {
      let self = this;
      axios
        .post("/queryTopicById", {
          params: {
            topic_id: self.topicId
          }
        })
        .then(function(response) {
          self.topicItem = response.data.data[0];
          $.bootstrapLoading.end();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getReplyByTopicId() {
      let self = this;
      axios
        .post("/getReplyByTopicId", {
          params: {
            topic_id: self.topicId
          }
        })
        .then(function(response) {
          self.replyList = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteTopic() {
      let self = this;
      axios
        .post("/deleteTopicById", {
          params: {
            topic_id: self.topicItem.topic_id
          }
        })
        .then(function(response) {
          self.$router.push({ name: "disLeft", params: { sort: 0 } });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    addTopicLook() {
      let self = this;
      axios
        .post("/addTopicLookOrLikeOrReply", {
          params: {
            topic_id: self.topicId,
            add_type: "topic_look"
          }
        })
        .then(function(response) {
          // console.log(response.data, "加look");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addTopicReply() {
      let self = this;
      axios
        .post("/addTopicLookOrLikeOrReply", {
          params: {
            topic_id: self.topicId,
            add_type: "topic_reply"
          }
        })
        .then(function(response) {
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // addTopicLike() {
    //   let self = this;
    //   axios
    //     .post("/addTopicLookOrLikeOrReply", {
    //       params: {
    //         topic_id: self.topicId,
    //         add_type: "topic_like"
    //       }
    //     })
    //     .then(function(response) {})
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    getTopicLike() {
      let self = this;
      axios
        .post("/getTopicLike", {
          params: {
            topic_id: self.topicId,
            user_id: self.userId
          }
        })
        .then(function(response) {
          if(response.data.data.length > 0){
            self.like = true;
          }
          console.log(self.like)
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteTopicLike() {
      let self = this;
      axios
        .post("/deleteTopicLike", {
          params: {
            topic_id: self.topicId,
            user_id: self.userId
          }
        })
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    },
    insertTopicLike() {
      let self = this;
      axios
        .post("/insertTopicLike", {
          params: {
            topic_id: self.topicId,
            user_id: self.userId
          }
        })
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    },

    getTime(ctime) {
      let date = new Date(ctime);
      return (
        date.getFullYear() +
        " 年 " +
        (date.getMonth() + 1) +
        " 月 " +
        date.getDate() +
        " 日 "
      );
    },
    changeGood() {
      if (this.like == false) {
        this.topicItem.topic_like++;
        this.like = true;
        this.insertTopicLike()
      } else {
        this.topicItem.topic_like--;
        this.like = false;
        this.deleteTopicLike()
      }
    },
    submitDis() {
      let self = this;
      axios
        .post("/insertReply", {
          params: {
            topic_id: self.topicId,
            reply_content: self.replyContent,
            from_id: self.userId,
            from_name: self.userName
          }
        })
        .then(function(response) {
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.topicId = this.$route.params.topic_id;
    this.userId = localStorage.getItem("user_id");
    this.userName = localStorage.getItem("user_name");
    this.getTopicById();
    this.getReplyByTopicId();
    this.addTopicLook();
    this.getTopicLike()
    $.bootstrapLoading.start();
  }
};
</script >

<style scoped>
.dis-details-contanier {
  padding: 10px;
  padding-bottom: 100px;
}
.dis-details-content {
  padding: 20px;
  background: #f6f8fa;
}
.details-title {
  font-size: 1.3em;
}
.details-content {
  font-size: 12px;
}
.dis-footer {
  line-height: 64px;
}
.dis-details-content .username {
  margin-right: 10px;
  color: #db6f6a;
}
.dis-details-content .good {
  float: right;
  cursor: pointer;
}
.dis-details-content .good span:hover {
  transform: scale(1.1);
}
.dis-details-content .good span.active {
  color: red;
}
.dis-details-footer {
  float: right;
}
.dis-details-footer span:hover {
  color: #db6f6a;
  cursor: pointer;
}
.replay-container {
  margin-top: 30px;
}
.submit-btn {
  float: right;
  margin-top: 20px;
}
.replay-btn {
  margin: 15px;
}

#replayInput p {
  color: #db6f6a;
  font-weight: 600;
  font-size: 12px;
}
</style>
