<template>
  <div class="outline-container">
    <div class="course-intro">
      <h4>
        <span class="glyphicon glyphicon-th-large"></span> 课程简介
      </h4>
      <p>
        《IT项目管理》是一门应用学科，是讨论应用管理学、管理信息系统分析与设计、
        统计学等的知识与方法对信息系统开发项目进行管理的一门专业选修课。本课程主要
        讲述如何运用项目管理知识领域(包括项目集成管理以及范围、时间、成本、质量、人力
        资源、沟通、风险和采购管理)以及项目5个过程组(包括启动、计划、执行、控制和收尾)
        进行信息系统项目管理。培养学生用管理理论、数量方法及计算技术解决信息系统项目管理
        问题的能力。本课程是形成信息管理与信息系统专门人才知识结构和能力结构的一门重要课程。
      </p>
      <p>
        本课程的教学环节包括课堂讲授、学生自学、课堂讨论、习题、实验、答疑、质疑和期末考试。
        通过上述基本教学步骤，要求学生掌握和了解项目管理知识领域的内容、方法、步骤与技术，了解
        项目管理过程，并能够正确运用这些理论和方法分析信息系统项目开发过程的问题、解决问题。
      </p>
    </div>
    <div class="course-pre">
      <h4>
        <span class="glyphicon glyphicon-bookmark"></span> 先修课程
      </h4>
      <p>管理学原理、管理信息系统分析与设计、概率论与数理统计等</p>
    </div>
    <div class="course-target">
      <h4>
        <span class="glyphicon glyphicon-bookmark"></span> 教学目标
      </h4>
      <div class="target-item" v-for="(item, index) in target">
        <h5>{{item.title}}</h5>
        <p v-for="k in item.list">{{k}}</p>
      </div>
    </div>

    <div class="reference">
      <h4>
        <span class="glyphicon glyphicon-book"></span> 教材和参考资料
      </h4>
      <div class="textbook">
        <h5>1.建议使用教材</h5>
        <p>[美]Kathy Schwalbe.IT项目管理[M].北京：机械工业出版社，2014.7.</p>
      </div>
      <div class="ref-data" >
        <h5>2.参考资料</h5>
        <p v-for="item in reference">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reference: [
        '[1]左美云主编.信息系统项目管理.北京：电子工业出版社.2009',
        '[2]肖来元，吴涛，陆永忠，武剑洁.编著.软件项目管理与案例分析(第2版). 北京：清华大学出版社.2014',
        '[3](美)杰克·T·马丘卡著;许江林, 梁铜毓, 刘景梅译.信息技术项目管理. 北京：电子工业出版社.2007',
        '[4](美)小米尔顿·D.罗西瑙,格雷戈里·D.吉森斯著;王丽珍,高超,熊芸等译.项目管理：最佳实践案例剖析.北京：电子工业出版社.2008'
      ],
      target: [
        {
          title: "1.知识目标",
          list: [
            "（1）了解项目及特征、项目管理的基本框架的关键因素，项目经理的基本职能；",
            "（2）了解项目管理系统的观点及应用于IT项目，了解组织的框架、结构和文化，懂得利益相关者及管理方法，掌握项目阶段和项目生命周期的概念，掌握IT项目管理的特点；",
            "（3）了解项目管理过程组及它们之间的相互关系，懂得项目管理过程组与项目知识领域之间的关系；",
            "（4）了解项目集成管理的整体框架，理解选择项目的方法，掌握项目计划的方法，了解集成变更控制的一般方法；",
            "（5）掌握项目范围管理的定义、步骤与方法；",
            "（6）掌握项目时间管理基本方法；",
            "（7）掌握项目成本管理的基本方法；",
            "（8）掌握项目质量管理的基本方法；",
            "（9）掌握人力资源管理的基本方法；",
            "（10）掌握项目沟通管理的基本方法；",
            "（11）掌握项目风险管理的基本方法；",
            "（12）掌握项目采购管理的基本方法。"
          ]
        },
        {
          title: "2.能力目标",
          list: [
            "（1）具备解决IT项目集成管理的基本能力；",
            "（2）具备项目范围管理的初步能力；",
            "（3）具备项目时间管理的初步能力；",
            "（4）具有项目成本管理的初步能力；",
            "（5）具有项目质量管理的初步能力；",
            "（6）具有项目人力资源管理沟通管理的初步能力；",
            "（7）具有项目沟通管理的初步能力；",
            "（8）具有项目风险管理的初步能力；",
            "（9）具有项目采购管理的初步能力。"
          ]
        },
        {
          title: "3.素质目标",
          list: [
            "（1）激发学生对IT项目管理学科的兴趣；",
            "（2）树立量化管理的思维方式与意识；",
            "（3）在解决实际IT项目管理问题中具有问题导向的意识；",
            "（4）面对不同类型的管理问题使用不同管理方法；",
            "（5）培养学生团队精神与不怕困难奋力攻关的顽强意志；",
            "（6）培养学生理论联系实际的学风；",
            "（7）学习IT项目管理学研究思维方法、培养具有IT项目管理的初步能力。"
          ]
        }
      ]
    };
  }
};
</script >

<style scoped>
.outline-container {
  padding: 20px;
  padding-bottom: 100px;
}
.course-intro p {
  text-indent: 2em;
  font-size: 12px;
  font-family: "宋体";
  line-height: 1.7em;
}
.course-pre,
.course-target {
  margin-top: 50px;
}
.course-pre p {
  text-indent: 2em;
  color: #555;
}
.course-intro h4,
.course-pre h4,
.course-target h4,
.reference h4 {
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
}
.course-intro .glyphicon,
.course-pre .glyphicon,
.course-target .glyphicon,
.reference .glyphicon {
  color: #db6f6a;
  vertical-align: middle;
  margin-top: -2px;
}
.target-item, .textbook {
  margin-bottom: 30px;
}
.target-item h5, .reference h5 {
  text-indent: 1em;
  font-weight: 600;
}
.target-item p, .reference p {
  padding-left: 25px;
}
</style>
