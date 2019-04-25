<template>
  <div class="case-container">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 经典案例</p>
      <div class="case-content">
        <div class="case-tab col-md-8">
          <router-view></router-view>
        </div>
        <div class="hot-case col-md-3">
          <case-right></case-right>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import caseLeft from "@/components/case/caseLeft";
import caseRight from "@/components/case/caseRight";

export default {
  components: {
    caseLeft,
    caseRight
  }
};
</script >

<style scoped>
.case-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}

.case-content .case-tab {
  padding: 0;
  min-width: 825px;
  margin-right: 30px;
}
.case-content .hot-case {
  background: #fff;
}
</style>
