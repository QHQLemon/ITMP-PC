<template>
  <div class="replay-item clearfix">
    <p class="replay-content" v-html="replyItem.reply_content"></p>
    <span class="username">{{replyItem.from_name}}</span>
    <span>{{getTime(replyItem.reply_time)}}</span>
    <span class="operate">
      <span class="glyphicon glyphicon-comment replay-icon" @click="showSmall">
        <span>回复</span>
      </span>
      <span
        class="glyphicon glyphicon-trash delete"
        @click="deleteReply"
        v-show="userId == replyItem.from_id"
      >
        <span>删除</span>
      </span>
    </span>
    <div class="clearfix" v-if="smallFalg">
      <small-item-box
        class="small-replay"
        :smallList="replyItem.children"
        :replyId="replyItem.reply_id"
      ></small-item-box>
    </div>
    <hr class="featurette-divider">
  </div>
</template>

<script>
import smallItemBox from "./smallItemBox";
export default {
  props: ["replyItem"],
  data() {
    return {
      userId: "",
      smallFalg: false
    };
  },
  components: {
    smallItemBox
  },
  methods: {
    deleteReply() {
      let self = this;
      axios
        .post("/deleteReplyById", {
          params: {
            topic_id: self.replyItem.topic_id,
            reply_id: self.replyItem.reply_id
          }
        })
        .then(function(response) {
          console.log(response.data.data);
          window.location.reload();
        })
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

    showSmall() {
      this.smallFalg = !this.smallFalg;
    }
  },
  mounted() {
    this.userId = localStorage.getItem("user_id");
  }
};
</script >


<style scoped>
.replay-item {
  margin-bottom: 10px;
}
.replay-item .username {
  margin-right: 10px;
  color: #db6f6a;
}
.replay-item .operate {
  float: right;
  cursor: pointer;
}

.replay-item .operate > span {
  color: #aaa;
  margin-left: 10px;
  font-size: 14px;
}
.replay-item .operate > span:hover {
  color: #db6f6a;
}
.replay-item .operate > span > span {
  display: inline-block;
  font-size: 12px;
  padding-left: 3px;
  vertical-align: top;
}
.small-replay {
  float: right;
}
</style>
