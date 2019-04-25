<template>
  <div class="paging-container">
    <div>
      <ul>
        <li
          class="btn btn-default"
          @click="changeNowPage(nowPage - 1 > 0 ? nowPage - 1 : 1)"
        >&laquo;</li>
        <li
          class="btn btn-default"
          @click="changeNowPage(item.page)"
          v-for="(item, index) in pagingList"
          v-html="item.text"
          :class="nowPage == item.page ? 'my-btn' : ''"
        ></li>
        <li
          class="btn btn-default"
          @click="changeNowPage(nowPage + 1 <= pageNum ? nowPage + 1 : pageNum)"
        >&raquo;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["myPage", "pagingList", "pageNum"],
  data() {
    return {
      nowPage: this.myPage
    };
  },
  methods: {
    changeNowPage(index) {
      if (index != this.myPage) {
        this.nowPage = index;
        this.$emit("changePage", this.nowPage);
      }
    }
  },
  mounted() {}
};
</script >

<style scoped>
</style>
