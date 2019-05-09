<template>
<div class="courseware-container">

  <iframe src="https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/chapter1.html" frameborder="0">

  <!-- <iframe :src="chapterMsg.chapter_courseware" frameborder="0"> -->
  </iframe>
</div>
</template>

<script>
export default{
  data(){
    return {
      chapterMsg: {}
    }
  },
  methods: {
    getChapterById(){
      let self = this;
      axios
        .post("/getChapterById", {
          params: {
            chapter_id: self.$route.params.chapter_id,
          }
        })
        .then(function(response) {
          self.chapterMsg = response.data.data[0];
          console.log(self.chapterMsg)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted(){
    console.log(this.$route.params)
    this.getChapterById()
  }
}
</script >

<style scoped>
.courseware-container, iframe{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgb(40, 40, 40);
}
.courseware-container{
  overflow-y: hidden;
  margin: 0;
  padding: 0;
}
</style>
