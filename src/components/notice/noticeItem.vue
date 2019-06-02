<template>
  <div class="notice-item">
    <div>
      <div class="notice-item-title">{{noticeItem.notice_title}}</div>
      <div class="notice-item-content" v-html="noticeItem.notice_content"></div>
      <div class="notice-item-time clearfix">
        <span>{{new Date(noticeItem.notice_utime).toLocaleString()}}</span>
      </div>
      <div class="notice-item-edit clearfix" v-if="editFlag">
        <div>
          <router-link :to="{name: 'noticeEdit', params: {notice_id:noticeItem.notice_id }}">编辑</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
          <span @click="deleteNotice(noticeItem.notice_id)">删除</span>
        </div>
      </div>
      <hr class="featurette-divider">
    </div>
  </div>
</template>

<script>
export default {
  props: ["editFlag", "noticeItem", "index"],
  methods: {
    deleteNotice(id) {
      let self = this;
      this.axios
        .post("/deleteNotice", {
          params: {
            notice_id: id
          }
        })
        .then(function(response) {
          // console.log(response);
          // self.$store.commit("deleteNotice", id);
          // console.log(self.noticeItem)
          // $(".notice-item-content")
          //   .eq(self.index)
          //   .html(self.noticeItem.notice_content);
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script >

<style scoped>
.notice-item-title {
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 20px;
}

.notice-item-time {
  padding: 10px 0;
}
.notice-item-time span,
.notice-item-edit div {
  float: right;
}

.notice-item-edit div a:hover,
.notice-item-edit div span:hover {
  text-decoration: none;
  cursor: pointer;
  color: #db6f6a;
}
</style>
