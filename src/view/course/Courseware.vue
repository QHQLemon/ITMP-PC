<template>
<div class="courseware-container">

  <!-- <iframe src="https://www.91suke.com/s/47f075aa" frameborder="0"> -->

  <iframe :src="chapterMsg.chapter_courseware" frameborder="0">
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
}
.courseware-container{
  overflow-y: hidden;
  margin: 0;
  padding: 0;
}
</style>
