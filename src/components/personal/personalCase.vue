<template>
  <div class="presonal_case_item">
    <router-link tag="div" :to="{name: 'caseDetail', params: { case_id: caseItem.case_id}}" class="case_content">{{caseItem.case_title}}</router-link>
    <div class="case_info">
      <span class="case_name">作者： {{caseItem.case_author}}</span>
      <span class="case_theme">所属主题：{{themeList[caseItem.case_type - 1]}}</span>
      <span class="case_time">{{new Date(caseItem.case_ctime).toLocaleString()}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["caseItem"],
  data() {
    return {
      themeList: [
        "项目综合管理",
        "项目范围管理",
        "项目时间管理",
        "项目成本管理",
        "项目质量管理",
        "项目人力资源管理",
        "项目沟通管理",
        "项目风险管理",
        "项目采购管理",
        "项干系人合管理"
      ]
    };
  }
};
</script >

<style scoped>
.case_content {
  line-height: 80px;
}
.case_info {
  position: relative;
}
.case_name {
  margin-right: 30px;
}
.case_time {
  position: absolute;
  right: 0;
}
</style>
