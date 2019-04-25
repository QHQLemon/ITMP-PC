<template>
  <div class="task-step">
    <div class="tasl-step-submit " :class="stepFlag != 0 ? 'active' : '' "  >
      <p>提交作业</p>
      <span class="glyphicon glyphicon-ok" v-if='stepFlag != 0'></span>
      <!-- <span>准备提交作业</span> -->
      <span class="glyphicon glyphicon-pencil" v-else></span>
    </div>
    <span class="glyphicon glyphicon-arrow-right "></span>
    <div class="tasl-step-correct " :class="stepFlag == 2 || stepFlag == 3  ? 'active' : ''" >
      <p>批改作业</p>
      <span class="glyphicon glyphicon-ok"></span>

    </div>
    <span class="glyphicon glyphicon-arrow-right"></span>
    <div class="tasl-step-complete " :class="stepFlag == 3 ? 'active' : ''"  >
      <p>公布成绩</p>
      <span class="glyphicon glyphicon-ok"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stepFlag'],
  watch: {
    // stepFlag(){
    //   if(this.stepFlag == 0){
    //     $('.active').removeClass('active')
    //   }else if(this.stepFlag == 1){
    //      $('.active').removeClass('active');
    //      $('.task-step div').eq(1).addClass('active');
    //   }else if(this.stepFlag == 2){
    //     $('.active').removeClass('active');
    //      $('.task-step div').eq(1).add($('.task-step div').eq(2)).addClass('active');
    //   }else if(this.stepFlag == 3){
    //     $('.task-step div').addClass('active')
    //   }
    // }
  }
};
</script >

<style scoped>
.task-step {
  display: flex;
  justify-content: space-around;
}
.task-step div {
  width: 200px;
  height: 80px;
  background: aliceblue;
  padding: 20px;
  font-weight: 600;
  text-align: center;

  border: 1px solid #ddd;
}
.task-step div span.glyphicon-ok {
  color: aliceblue;
}
.task-step div span.glyphicon-pencil{
  color: #49AF4F
}

.task-step .glyphicon-arrow-right{
  margin-top: 30px;
  font-size: 20px;
  color: #888;
}
.task-step div.active + .glyphicon-arrow-right{
  color: #49AF4F;
}

.task-step div.active span{
  color: #49AF4F
}

</style>
