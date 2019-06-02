<template>
  <div class="case-right">
    <h5>推荐案例</h5>
    <hr class="featurette-divider">
    <ul>
      <router-link tag="li" v-for="(item, index) in mycase" :key="index" :to="{name: 'caseDetail', params: {case_id: item.case_id}}" >
        <span>{{index + 1}}</span>
        {{item.case_title}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mycase: [
        // {
        //   title: "如何收集有效的项目评价 "
        // },
        // {
        //   title: "超出预算，他的处理的方式对吗？ "
        // },
        // {
        //   title: "如何收集有效的项目评价 "
        // },
        // {
        //   title: "超出预算，他的处理的方式对吗？ "
        // },
        // {
        //   title: "如何收集有效的项目评价 "
        // },
        // {
        //   title: "超出预算，他的处理的方式对吗？ "
        // },
        // {
        //   title: "如何收集有效的项目评价 "
        // }
      ]
    };
  },
  methods: {
    getCaseByEnshrine() {
      let self = this;
      this.axios
        .get("/getCaseByEnshrine")
        .then(function(response) {
          self.mycase = response.data.data;
          console.log(self.mycase, response.data.data)
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted(){
    this.getCaseByEnshrine()
  }
};
</script >

<style scoped>
.case-right {
  min-height: 100px;
}
.case-right h5 {
  font-weight: 600;
}
.case-right .featurette-divider {
  margin-top: 5px;
  margin-bottom: 8px;
}

.case-right ul li {
  padding: 10px 0;
  cursor: pointer;
}
.case-right ul li:hover {
  text-shadow: 1px 1px 1px #ddd;
}
.case-right ul li span {
  display: inlink-block;
  padding: 3px 7px;
  background: #ddd;
  color: #fff;
  margin-right: 5px;
}
.case-right ul li:first-child span {
  background: red;
}
.case-right ul li:nth-child(2) span {
  background: orangered;
}
.case-right ul li:nth-child(3) span {
  background: orange;
}
</style>
