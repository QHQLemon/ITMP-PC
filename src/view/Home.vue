<template>
  <div class="main-container">
    <!-- banner -->
    <div class="container">
      <div class="banner row">
      <div class="banner-left col-md-6">
        <img src="../assets/img/software.png" alt>
      </div>
      <div class="banner-right col-md-6">
        <div class="jumbotron my-jumbotron">
          <h3>I项目管理</h3>
          <p>
            项目管理在IT领域的应用，结合IT行业特点运用项目管理技术、理念和方法，包括9大知识领域（项目综合、范围、时间、
            成本、 质量、人力资源、沟通、风险和采购管理）以及启动、计划、实施、控制和收尾等过程组成
          </p>
          <p>
            <router-link class="btn btn-default btn-lg my-btn" :to="{name: 'courseOutline'}" tag="span" >了解更多</router-link>
          </p>
        </div>
      </div>
    </div>
    </div>
    <!-- mark -->
    <div class="about clearfix container">
      <div class="about-in">
        <p>课堂·讨论·案例</p>
      </div>
      <div class="about-content">
        <div class="item col-sm-6 col-md-4 col-xs-12">
        <div class="item-in">
          <p>
            <span class="glyphicon glyphicon-blackboard item-icon"></span>
          </p>
          <p class="item-title">上课</p>
          <p class="item-dire">在线学习·方便快捷</p>
          <p class="item-detail">学员可以根据自己的时间和地点，随时通过电脑联网来学习，这样可以减少时间的浪费，在线学习也是一个很好的补充</p>
          <router-link :to="{name: 'courseContent'}" tag="span" class="btn btn-default">了解更多</router-link>
        </div>
      </div>
      <div class="item col-sm-6 col-md-4 col-xs-12">
        <div class="item-in">
          <p>
            <span class="glyphicon glyphicon-globe"></span>
          </p>
          <p class="item-title">讨论</p>
          <p class="item-dire">在线讨论·各抒己见</p>
          <p class="item-detail">
            以学生为中心，在教师与学生，学生与学生之间，通过积极的讨论各抒己见，
            互相启发，使大家参与到教学中来，不断训练和提高大家自学能力，推理能力
          </p>
          <router-link tag="span" :to="{name: 'discussion'}" class="btn btn-default">了解更多</router-link>
        </div>
      </div>
      <div class="item col-sm-6 col-md-4 col-xs-12">
        <div class="item-in">
          <p>
            <span class="glyphicon glyphicon-book"></span>
          </p>
          <p class="item-title">经典案例</p>
          <p class="item-dire">案例讨论·总结学习</p>
          <p class="item-detail">
            可以通过分析、比较，研究各种各样的成功的和失败的案例，从中抽象出
            某些一般性的管理结论或管理原理，也可以通过自己的思考或者他人的思考来拓宽自己的视野，从而丰富自己的知识
          </p>
          <router-link tag="span" :to="{name: 'case'}" class="btn btn-default">了解更多</router-link>
        </div>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
};
</script >

<style scoped>
.main-container,
case-container {
  width: 100%;
}
.banner {
  margin-top: 100px;
}

.my-btn {
  color: #fff;
  background: #db6f6a;
}
.banner-left img {
  width: 100%;
}
.banner-right .my-jumbotron {
  background: #fff;
}
.banner-right .my-jumbotron p {
  font-size: 16px;
}

.about {
  margin-top: 80px;
  text-align: center;
  margin-bottom: 250px;

}
.about-content{
  justify-content: space-between;
  display: flex;
}
.item:hover {
   box-shadow: 1px 1px 1px 1px #888;;
}

.about .about-in {
  height: 80px;
  font-size: 20px;
}

.about .item {
  padding: 10px 30px;
  max-width: 320px;
}

.item .item-title {
  font-weight: 600;
}
.item .item-detail {
  min-height: 80px;
}
.about .item .item-in p span{
  color: #db6f6a;
  font-size: 40px;
}

.case-container {
  margin-top: 150px;
  background: #f6f8fa;
  padding-bottom: 30px;
}


.case-container .case-title{
  padding: 30px 0;
}

.case-container .case-item{
  margin-top: 60px;
}
.case-container  .my-btn{
  float: right;
}
</style>
