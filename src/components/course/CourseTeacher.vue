<template>
  <div class="teacher-container">
    <div class="school">
      <a href="http://www.gxu.edu.cn/">
        <img src="../../assets/img/school2.jpg" alt>
        广西大学
      </a>
      <hr class="featurette-divider">
      <div class="teacher">
        <p class="teacher-title">
          <span class="glyphicon glyphicon-paperclip"></span>
          <span class="t-b">授课老师</span>
        </p>
        <div class="teacher-content">
          <p>
            <img src="../../assets/img/small.jpg" alt>
            <span class='teacher-name'>梁革英</span>
          </p>
          <p>
             <span class="glyphicon glyphicon-erase"></span>&nbsp;
             女硕士教师<br>
             <span class="glyphicon glyphicon-erase"></span>&nbsp;
            讲师<br>
             <span class="glyphicon glyphicon-erase"></span>&nbsp;
            广西大学数学与信息科学学院管理科学副教授<br>
            1990年毕业与广西大学计算机软件专业, 1999年毕业与天津财经学院获信息管理与信息系统方向硕士,从事信息管理与信息
            系统专业的教学工作,主要研究方向:信息管理与信息系统。目前为止,在有关期刊上发表了8篇论
            文,其中《略谈多媒体教学课件中界面的设计》获得教学论文三等奖,两篇文章发表在核心期刊
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script >

<style scoped>
.teacher-container {
  padding: 10px;
}

.school img {
  height: 80px;
}
.school a {
  font-size: 18px;
  font-weight: 800px;
}
.teacher-title span.t-b {
  font-size: 16px;
  margin-left: 5px;
  font-weight: 600;
}
.teacher-title span.glyphicon {
  font-size: 20px;
  color: #db6f6a;
}
.teacher-content img {
  height: 50px;
  border-radius: 50%;
}
.teacher-name{
  margin-left: 25px;
  font-weight: 600;
}
</style>
