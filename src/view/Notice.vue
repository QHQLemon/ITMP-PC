<template>
  <div class="notice-container">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 公告 {{this.$store.state.count}}</p>
      <div class="notice-content">
        <div class="col-md-3">
          <notice-left ></notice-left>
        </div>
        <div class="col-md-8">
          <notice-right></notice-right>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoticeLeft from "@/components/notice/noticeLeft";
import NoticeRight from "@/components/notice/noticeRight";

export default {
  components: {
    NoticeLeft,
    NoticeRight
  },
  methods: {
    a(){

  }
  },
  created() {
    // $.ajax({
    //   url: '/getAllNotice',
    //   type: 'GET',
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  }
};


</script >

<style scoped>
.notice-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}
.notice-content > .col-md-3 {
  background: #fff;
  border: 1px solid #ccc;
  margin-right: 25px;
  min-height: 250px;
}
.notice-content > .col-md-8 {
  background: #fff;
  border: 1px solid #ccc;
  min-width: 825px;
  min-height: 600px;
  margin-bottom: 100px;
}
</style>
