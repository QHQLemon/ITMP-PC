<template>
  <div class="small-item-container" v-show="hasSmall">
    <p v-html="smallItem.reply_content"></p>
    <p>
      <span class="username">{{smallItem.from_name}}</span>
      <span>{{getTime(smallItem.reply_time)}}</span>
      <span class="operate">
        <span
          class="glyphicon glyphicon-trash delete"
          @click="deleteReply"
          v-show="userId == smallItem.from_id"
        >
          <span>删除</span>
        </span>
      </span>
    </p>
    <hr class="featurette-divider">
  </div>
</template>

<script>
export default {
  props: ["smallItem"],
  data() {
    return {
      userId: "",
      hasSmall: true,
      like: false,
      noLike: false,
      reply_like: 0
    };
  },
  methods: {
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
    deleteReply() {
      let self = this;
      this.axios
        .post("/deleteReplyById", {
          params: {
            reply_id: self.smallItem.reply_id
          }
        })
        .then(function(response) {
          console.log(response.data.data);
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.userId = localStorage.getItem("user_id");
  }
};
</script >

<style scoped>
.small-item-container {
  width: 100%;
}
.username {
  color: #db6f6a;
  margin-right: 10px;
}
.operate {
  float: right;
}
.operate span {
  cursor: pointer;
}
.operate span.active {
  color: red;
}

.operate .delete {
  margin-left: 5px;
  color: #aaa;
}
.operate .delete > span {
  font-size: 10px;
  vertical-align: top;
  margin-left: 1px;
}
.operate .delete:hover {
  color: #db6f6a;
}

.small-replay-footer {
  margin-left: 520px;
}
.featurette-divider {
  margin-bottom: 5px;
}
</style>
