<template>
  <div class="dis-right">
    <div class="send-dis">
      <span class="glyphicon glyphicon-comment"></span>
      <router-link :to="{name: 'disAdd'}" tag="span">发起主题</router-link>
    </div>
    <div class="dis-sort">
      <router-link :to="{name: 'disLeft', params: {sort:1}}" class="dis-sort-item">
        <img src="../../assets/img/消息.png" alt>
        <span>老师答疑区</span>
      </router-link>
      <hr class="featurette-divider">
      <router-link :to="{name: 'disLeft', params: {sort:2}}" class="dis-sort-item">
        <img src="../../assets/img/classTopic.png" alt>
        <span>班级讨论区</span>
      </router-link>
      <hr class="featurette-divider">
      <router-link :to="{name: 'disLeft', params: {sort:0}}" class="dis-sort-item">
        <img class="big-pic" src="../../assets/img/dis4.png" alt>
        <span>综合讨论区</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
};
</script >

<style scoped>

.send-dis {
  height: 45px;
  width: 100%;
  background: #db6f6a;
  color: #fff;
  font-size: 22px;
  text-align: center;
  line-height: 45px;
  border-radius: 5px;
  cursor: pointer;
}
.send-dis span {
  margin-right: 2px;
}
.dis-sort {
  padding: 0 30px;
  background: #fff;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.dis-sort .dis-sort-item {
  height: 60px;
  width: 100%;
  display: inline-block;
  line-height: 60px;
}

.dis-sort .dis-sort-item img {
  height: 60px;
}
.dis-sort .dis-sort-item span {
  font-size: 15px;
  font-weight: 600;
}
.dis-sort .featurette-divider {
  margin: 0;
}
</style>
