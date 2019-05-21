<template>
  <div class="dis-left">
    <div class="dis-left-header">
      <router-link :to="{name: 'disLeft', params: {sort:0}}">讨论区</router-link>
      &nbsp;{{sortId == false ? '' : '>'}}&nbsp; {{disSort[sortId]}}
    </div>
    <div class="topic_order btn-group">
      <button class="btn btn-default  btn-sm order-active" @click="change(0)">最新发表</button>
      <button class="btn btn-default  btn-sm" @click="change(1)">浏览数</button>
      <button class="btn btn-default  btn-sm" @click="change(2)">回复数</button>
      <button class="btn  btn-default btn-sm" @click="change(3)">点赞数</button>
    </div>
    <div v-for="(item, index) in topicList" :key="index">
      <dis-item :topicItem="item" :sortId="sortId"></dis-item>
    </div>
    <div class="page-container">
      <paging-plugin
        :myPage="nowPage"
        :pagingList="pagingList"
        :pageNum="pageNum"
        @changePage="changeNowPage"
      ></paging-plugin>
    </div>
  </div>
</template>

<script>
import disItem from "./disItem";
import pagingPlugin from "@/components/paging/pagingPlugin";

export default {
  data() {
    return {
      searchWord: "",
      nowPage: 1,
      pagingList: [],
      pageNum: 0,
      total: "",
      pageSize: 5,
      disSort: ["", "老师答疑区", "全班讨论区"],
      sortId: 0,
      orderTypeIndex: 0,
      orderList: ["topic_ctime", "topic_look", "topic_reply", "topic_like"],
      topicList: [
        // {
        //   topic_id: 1,
        //   topic_type: 0,
        //   topic_title: "it项目管理总共分为几大模块？",
        //   topic_content: "求助！！！！！！！",
        //   topic_ctime: "2019-02-23T19:45:05.000Z",
        //   topic_look: 5,
        //   topic_reply: 1,
        //   topic_like: 0,
        //   user_id: 1,
        //   user_name: 'lemon'
        // },
        // {
        //   topic_id: 3,
        //   topic_type: 0,
        //   topic_title: "2019琦玉世锦赛的男单冠军是谁？",
        //   topic_content: "求助！！！！！！！",
        //   topic_ctime: "2019-03-14T19:48:05.000Z",
        //   topic_look: 4,
        //   topic_reply: 4,
        //   topic_like: 7,
        //   user_id: 1,
        //   user_name: 'lemon'
        // },
        // {
        //   topic_id: 2,
        //   topic_type: 1,
        //   topic_title: "叮当猫到底有几只手指头？",
        //   topic_content: "求助！！！！！！！",
        //   topic_ctime: "2019-03-14T19:45:05.000Z",
        //   topic_look: 2,
        //   topic_reply: 9,
        //   topic_like: 0,
        //   user_id: 1,
        //   user_name: 'lemon'
        // },
        // {
        //   topic_id: 5,
        //   topic_type: 1,
        //   topic_title: "2019琦玉世锦赛？",
        //   topic_content: "求助！！！！！！！",
        //   topic_ctime: "2019-03-14T19:48:05.000Z",
        //   topic_look: 2,
        //   topic_reply: 4,
        //   topic_like: 5,
        //   user_id: 1,
        //   user_name: 'lemon'
        // },
        // {
        //   topic_id: 4,
        //   topic_type: 1,
        //   topic_title: "hahahah",
        //   topic_content: "lemon-nana",
        //   topic_ctime: "2019-03-15T05:13:02.000Z",
        //   topic_look: 0,
        //   topic_reply: 0,
        //   topic_like: 0,
        //   user_id: 1,
        //   user_name: 'lemon'
        // }
      ]
    };
  },
  components: {
    disItem,
    pagingPlugin
  },
  methods: {
    getPagingList() {
      this.pagingList = [];
      this.pageNum = (this.total + this.pageSize - 1) / this.pageSize;
      if (this.nowPage > 2) {
        this.pagingList.push({
          text: this.nowPage - 2,
          page: this.nowPage - 2
        });
      }
      if (this.nowPage > 1) {
        this.pagingList.push({
          text: this.nowPage - 1,
          page: this.nowPage - 1
        });
      }

      this.pagingList.push({ text: this.nowPage, page: this.nowPage });

      if (this.nowPage + 1 <= this.pageNum) {
        this.pagingList.push({
          text: this.nowPage + 1,
          page: this.nowPage + 1
        });
      }
      if (this.nowPage + 2 <= this.pageNum) {
        this.pagingList.push({
          text: this.nowPage + 2,
          page: this.nowPage + 2
        });
      }
    },
    changeNowPage(page) {
      this.nowPage = page;
      this.getData();
    },
    change(index) {
      // 请求数据
      this.orderTypeIndex = index;
      this.getData();
      $(".order-active").removeClass("order-active");
      $(".topic_order .btn")
        .eq(index)
        .addClass("order-active");
    },
    getData(val = "") {
      let self = this;
      console.log('val---', val)
      axios
        .post("/getAllTopic", {
          params: {
            topic_type: self.sortId,
            order_type: self.orderList[self.orderTypeIndex],
            page: self.nowPage,
            pageSize: self.pageSize,
            word: val
          }
        })
        .then(function(response) {
          self.topicList = response.data.data.rows;
          self.total = response.data.data.total;
          console.log(response.data.data);
          self.getPagingList();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {
    $route: function(to, from) {
      this.sortId = this.$route.params.sort;
      // 请求数据
      this.getData();
    }
  },
  mounted() {
    this.sortId = this.$route.params.sort;
    this.getData();
  }
};
</script >

<style scoped>
.dis-left {
  position: relative;
  min-height: 800px;
}
.dis-left-header {
  height: 50px;
  line-height: 40px;
}
.topic_order {
  position: absolute;
  right: 10px;
  top: 10px;
}
.btn.order-active {
  background: #db6f6a;
  color: #fff;
  border: 1px solid #ccc;
}
.page-container {
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
