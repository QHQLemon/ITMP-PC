<template>
  <div class="notice-right">
    <div class="clearfix notice-header">
      <div class="dis-search col-lg-6 ">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="搜索公告内容" v-model="keyword">
          <span class="input-group-btn">
            <button class="btn my-btn" type="button" @click="search">搜索</button>
          </span>
        </div>
      </div>
      <div class="notice-right-top clearfix" v-if="adminFlag">
        <router-link tag="button" :to="{name: 'noticeAdd'}" class="btn my-btn">添加公告</router-link>
        <button class="btn my-btn" @click="showEdit">管理公告</button>
      </div>
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
      noticeList: [],
      keyword: ""
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
    },
    search() {
      this.getAllNotice();
    },
    getAllNotice() {
      let self = this;
      console.log(self.keyword);
      this.axios
        .post("/getAllNotice", {
          params: {
            searchWord: self.keyword
          }
        })
        .then(function(response) {
          console.log(response, "---------");
          self.noticeList = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getAllNotice();
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
.notice-header{
  margin-bottom: 30px;
}
</style>
