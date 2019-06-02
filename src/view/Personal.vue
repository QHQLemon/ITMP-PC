<template>
  <div class="personal-container">
    <div class="personal-data-conatainer">
      <div class="container">
        <div class="personal-header">
          <img src="../assets/img/aa.png" alt>
          <div class="personal-info">
            <div>
              <span>{{user.student_name ? user.student_name : user.admin_name}}</span>
            </div>

            <div>
              <span>{{user.student_id ? user.student_id : user.admin_id}}</span>
            </div>

            <!-- <div>
              <span>{{user.student_class_id ? user.student_class_id : ""}}</span>
            </div> -->
          </div>
          <div class="personal-data">
            <div class="thumbs-up">
              <span class="glyphicon glyphicon-thumbs-up"></span>
            </div>
            <div class="thumbs-up-desc">
              <div class="data-name">获赞</div>
              <div class="data-num">{{topicLikeNum}}</div>
            </div>
            <span class="data-line"></span>
            <div class="reply">
              <span class="glyphicon glyphicon-edit"></span>
            </div>
            <div class="reply-desc">
              <div class="data-name">主题</div>
              <div class="data-num">{{topicList.length}}</div>
            </div>
            <span class="data-line"></span>
            <div class="case">
              <span class="glyphicon glyphicon-star-empty"></span>
            </div>
            <div class="case-desc">
              <div class="data-name">关注案例</div>
              <div class="data-num">{{enshrineList.length}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-content">
      <personal-tab :topicList="topicList" :enshrineList="enshrineList" :replyList="replyList"></personal-tab>
    </div>
  </div>
</template>

<script>
import personalTab from "@/components/personal/personalTab";
export default {
  data() {
    return {
      userId: "",
      topicList: [],
      enshrineList: [],
      replyList: [

      ],
      user: {

      }
    };
  },
  computed: {
    topicLikeNum() {
      let num = 0;
      this.topicList.forEach((ele, index) => {
        num += parseInt(ele.topic_like);
      });
      return num;
    }
  },
  components: {
    personalTab
  },
  methods: {
    getUserMsg() {
      let self = this;
      this.axios
        .post("/getUserMsg", {
          params: {
            user_id: self.userId
          }
        })
        .then(function(response) {
          self.user = response.data.data[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getEnshrineByUserId() {
          // $.bootstrapLoading.end();

      let self = this;
      this.axios
        .post("/getEnshrineByUserId", {
          params: {
            user_id: self.userId
          }
        })
        .then(function(response) {
          self.enshrineList = response.data.data;
          // $.bootstrapLoading.end();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getReplyByUserId() {
      let self = this;
      this.axios
        .post("/getReplyByUserId", {
          params: {
            user_id: self.userId
          }
        })
        .then(function(response) {
          self.replyList = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    getTopicByUserId() {
      let self = this;
      this.axios
        .post("/getTopicByUserId", {
          params: {
            user_id: self.userId
          }
        })
        .then(function(response) {
          self.topicList = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.userId = localStorage.getItem("user_id");
    this.getUserMsg();
    this.getEnshrineByUserId();
    this.getReplyByUserId();
    this.getTopicByUserId();
    // $.bootstrapLoading.start();
  }
};
</script >

<style scoped>
.personal-container {
  width: 100%;
  margin-top: -20px;
}
.personal-data-conatainer {
  width: 100%;
  height: 220px;
  background: #db6f6a;
}
.personal-data-conatainer img {
  height: 96px;
  width: 96px;
  margin-top: 50px;
  margin-left: 50px;
  vertical-align: top;
}
.personal-info {
  display: inline-block;
  width: 300px;
  margin-top: 50px;
  padding: 10px;
}
.personal-data-conatainer .personal-info span {
  display: inline-block;
  font-size: 16px;
  color: #fff;
  line-height: 1.7em;
}
.personal-data {
  display: inline-block;
  width: 400px;
  color: #fff;
  height: 220px;
  vertical-align: top;
  padding-top: 90px;
  margin-left: 250px;
}
.personal-data .thumbs-up,
.thumbs-up-desc,
.reply,
.reply-desc,
.case,
.case-desc {
  display: inline-block;
}
.personal-data .thumbs-up,
.reply,
.case {
  height: 50px;
  width: 50px;
  font-size: 36px;
}
.data-line {
  display: inline-block;
  height: 36px;
  width: 0;
  border-left: 1px solid #fff;
  margin: 0 20px;
}
.personal-content {
  min-height: 800px;
}
</style>
