<template>
  <div class="notice-right">
    <div class="notice-right-top clearfix" v-if="adminFlag">
      <router-link tag="button" :to="{name: 'noticeAdd'}" class="btn my-btn">添加公告</router-link>
      <button class="btn my-btn" @click="showEdit">管理公告</button>
    </div>
    <div class="notice-content">
      <notice-item
        v-for="(item, index) in noticeList"
        :key="noticeList.id"
        :editFlag="editFlag"
        :noticeItem="item"
        :index="index"
      ></notice-item>
    </div>
  </div>
</template>

<script>
import NoticeItem from "./noticeItem";
export default {
  data() {
    return {
      editFlag: false,
      noticeList: []
    };
  },
  computed: {
    adminFlag() {
      if (this.$store.state.userRouter == "all") {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    NoticeItem
  },
  methods: {
    showEdit() {
      this.editFlag = !this.editFlag;
    }
  },
  created() {
    let self = this;
    axios
      .get("/getAllNotice")
      .then(function(response) {
        console.log(response);
        self.noticeList = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script >

<style scoped>
.notice-right {
  padding: 30px;
}
.notice-right-top {
  margin-bottom: 30px;
}
.notice-right-top .my-btn {
  float: right;
  margin-left: 20px;
}
</style>
