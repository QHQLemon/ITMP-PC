<template>
  <div class="dis-edit">
    <p class="dis-header">讨论区 &nbsp;>&nbsp; 修改主题</p>
    <div class="dis-edit-content">
      <div class="form-group">
        <label for="dis_title">标题</label>
        <input
          type="text"
          class="form-control"
          id="dis_title"
          placeholder="50字以内"
          v-model="topicTitle"
        >
      </div>
      <div class="form-group">
        <label>内容</label>
        <br>
        <vue-edit @submitText="changeText" :editText="topicContent"></vue-edit>
      </div>
      <button class="btn btn-primary submit-btn" @click="submitTopicEdit">提交</button>
    </div>
  </div>
</template>

<script>
import vueEdit from "@/components/edit/vueEdit";
export default {
  data() {
    return {
      topicId: "",
      topicTitle: "",
      topicContent: ""
    };
  },
  components: {
    vueEdit
  },
  methods: {
    changeText(text) {
      this.topicContent = text;
    },
    submitTopicEdit() {
      console.log(this.topicTitle, this.topicContent);
      this.updateTopic();
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
          self.topicTitle = response.data.data[0].topic_title;
          self.topicContent = response.data.data[0].topic_content;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateTopic() {
      let self = this;
      axios
        .post("/updateTopic", {
          params: {
            topic_id: self.topicId,
            topic_title: self.topicTitle,
            topic_content: self.topicContent
          }
        })
        .then(function(response) {
          console.log(response);
          self.$router.push({
            name: "disDetails",
            params: { topice_id: self.topicId }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    console.log(this.$route.params.topic_id);
    this.topicId = this.$route.params.topic_id;
    this.topicTitle = this.$route.params.topic_title;
    this.topicContent = this.$route.params.topic_content;

    this.getTopicById();
  }
};
</script >

<style scoped>
.dis-edit {
  padding-top: 10px;
}
.submit-btn {
  float: right;
  margin-right: 10px;
}
.dis-edit-content {
  padding-top: 20px;
}
</style>
