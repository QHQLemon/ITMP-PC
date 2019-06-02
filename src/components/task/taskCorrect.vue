<template>
  <div class="task-correct">
    <div class="task-correct-header">
      <h3>
        批改作业
        <small>请选择作业章节</small>
      </h3>
      <!-- <hr class="featurette-divider"> -->
    </div>
    <div class="task-chapter">
      <router-link
        v-for="(item, index) in chapterList"
        :key="index"
        tag="div"
        class="chapter"
        :to="{name: 'taskItem', params: {chapter_id : item.chapter_id,
        chapter_name: item.chapter_name}}"
      >{{item.chapter_name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapterList: [
        // {
        //   chapter_id: 1,
        //   chapter_name: "第 1 章 总论"
        // },
        // {
        //   chapter_id: 2,
        //   chapter_name: "第 2 章 项目管理和IT背景"
        // },
        // {
        //   chapter_id: 3,
        //   chapter_name: "第 3 章 项目管理过程组：案例研究"
        // },
        // {
        //   chapter_id: 4,
        //   chapter_name: "第 4 章 项目综合管理"
        // },
        // {
        //   chapter_id: 5,
        //   chapter_name: "第 5 章 项目范围管理"
        // },
        // {
        //   chapter_id: 6,
        //   chapter_name: "第 6 章 项目时间管理"
        // }
      ]
    };
  },
  methods: {
    getAllChapter() {
      let self = this;
      this.axios
        .get("/getAllChapter")
        .then(function(response) {
          self.chapterList = response.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.getAllChapter();
  }
};
</script >

<style scoped>
.chapter {
  border-bottom: 1px solid #f1f1f1;
  padding: 10px;
  cursor: pointer;
}
.chapter:hover {
  background: #db6f6a;
  color: #fff;
}

.task-chapter {
  margin-top: 30px;
  padding: 20px;
}
</style>
