<template>
  <div class="rec-container">
      <div class="row">
        <div class="col-md-6 rec-img-container">
          <img class=" rec-img" src="../../assets/img/b2.png" alt="">
        </div>
        <div class="col-md-6">
          <div class="rec-heading">IT项目管理</div>
          <div class="rec-time">
            <p>讲师：梁革英</p>
            <p>建议学时： 4小时每周</p>
          </div>
          <div class="rec-btn">
            <button class="btn btn-default  my-btn">开始学习</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default{

}
</script >

<style scoped>
.rec-container{
  background: #fff;
  height: 300px;
  padding: 30px;
  position: relative;
  border: 1px solid #ddd;
}

.rec-img{
  height: 220px;
  vertical-align:middle ;
}

.rec-heading{
  font-size: 24px
}

.rec-time{
  margin-top: 20px;
}
.rec-container .my-btn{
  position: absolute;
  right: 100px;
  bottom: -100px;
}

</style>
