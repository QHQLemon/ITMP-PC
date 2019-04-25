<template>
  <div class="case-item">
    <router-link tag="div" :to="{name: 'caseDetail', params: {case_id: caseItem.case_id}}">
      <h4>{{caseItem.case_title}}</h4>
    </router-link>
    <div class="case-item-content">{{delHtmlTag(caseItem.case_content)}}</div>
    <div>
      <span>作者：{{caseItem.case_author}}</span> &nbsp;&nbsp;&nbsp;
      <span class>
        所属主题：
        <router-link :to="{name: 'home'}" class="tag">{{themeList[caseItem.case_type - 1].themeName}}</router-link>
      </span>
      <span class="case-time">{{new Date(caseItem.case_ctime).toLocaleString()}}</span>
    </div>
    <hr class="featurette-divider">
  </div>
</template>

<script>
export default {
  props: ["caseItem"],
  data(){
    return {
      themeList: [
        { themeTitle: 1, themeName: "项目综合管理" },
        { themeTitle: 2, themeName: "项目范围管理" },
        { themeTitle: 3, themeName: "项目时间管理" },
        { themeTitle: 4, themeName: "项目成本管理" },
        { themeTitle: 5, themeName: "项目质量管理" },
        { themeTitle: 6, themeName: "项目人力资源管理" },
        { themeTitle: 7, themeName: "项目沟通管理" },
        { themeTitle: 8, themeName: "项目风险管理" },
        { themeTitle: 9, themeName: "项目采购管理" },
        { themeTitle: 10, themeName: "项干系人合管理" }
      ],
    }
  },
  methods: {
    delHtmlTag(str) {
      return str.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, "").replace(/Ø/g, ''); //正则去掉所有的html标记
    }
  },
  mounted() {
    console.log(this.caseItem);
  }
};
</script >

<style scoped>
.case-item h4 {
  font-weight: 600;
  cursor: pointer;
}
.case-item h4:hover {
  text-shadow: 2px 2px 2px #ccc;
}
.case-item-content {
  line-height: 1.8em;
  text-indent: 2em;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-bottom: 15px;
}
.tag:hover {
  color: #db6f6a;
}
.case-time {
  float: right;
  margin-right: 20px;
}
</style>
