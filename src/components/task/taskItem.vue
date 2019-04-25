<template>
  <div class="task-item">
    <div class="task-item-header">
      <h4>
        {{chapterName}} &nbsp;&nbsp;
        <small>作业</small>
      </h4>
      <button class="btn my-btn task-next-btn" @click="nextTaskScore">
        <span class="glyphicon glyphicon-arrow-right"></span>
      </button>
    </div>
    <hr class="featurette-divider">

    <div v-if="!correctState">
      <div class="task-item-student">
        <p>学号： {{taskScoreList[taskScoreIndex] ? taskScoreList[taskScoreIndex].student_id : ''}}</p>
      </div>

      <div class="task-list-content">
        <div class="task-item-content">
          <h4>
            {{taskListIndex+1}}.
            <small>（{{taskList[taskListIndex] ? taskList[taskListIndex].task_score: ""}}）分</small>
          </h4>
          <p
            class="task-question"
          >{{taskList[taskListIndex] ? taskList[taskListIndex].task_content : ""}}</p>
          <span>答：</span>
          <p
            class="task-answer"
            v-html="taskScoreList[taskScoreIndex].student_answer"
          >{{taskScoreList[taskScoreIndex] ? taskScoreList[taskScoreIndex].student_answer : ""}}</p>
          <div class="task-corrent">
            <p>得分</p>
            <input type="text" v-model="taskScore">
          </div>
        </div>
      </div>

      <div class="submit-score clearfix">
        <button class="btn score-btn" @click="submitTaskScore">提交分数</button>
      </div>
    </div>

    <div v-else>
      <p>
        本章作业已批改完成！
        请前往下一章
      </p>
      <router-link tag="span" class="btn my-btn" :to="{name: 'taskCorrect'}">返回章节选择</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapterId: "",
      chapterName: "",
      taskScoreIndex: 0,
      taskListIndex: 0,
      taskScore: "",
      correctState: false,
      taskList: [],
      taskScoreList: []
    };
  },
  methods: {
    nextTaskScore() {
      if (this.taskScoreIndex < this.taskScoreList.length - 1) {
        this.taskScoreIndex++;
      } else {
        if (this.taskListIndex < this.taskList.length - 1) {
          this.taskListIndex++;
          this.taskScoreIndex = 0;
          this.getTaskScoreByTaskId();
        } else {
          this.correctState = true;
        }
      }
    },
    submitTaskScore() {
      let self = this;
      axios
        .post("/updateTaskScore", {
          params: {
            task_id: self.taskScoreList[self.taskScoreIndex].task_id,
            student_id: self.taskScoreList[self.taskScoreIndex].student_id,
            student_task_score: self.taskScore
          }
        })
        .then(function(response) {
          self.taskScore = "";
          self.nextTaskScore();
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTaskByChapterId() {
      let self = this;
      axios
        .post("/getTaskByChapterId", {
          params: {
            chapter_id: self.chapterId
          }
        })
        .then(function(response) {
          self.taskList = response.data.data;
          if (self.taskList.length == 0) {
            self.correctState = true;
            return;
          }
          self.getTaskScoreByTaskId();
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTaskScoreByTaskId() {
      let self = this;
      axios
        .post("/getTaskScoreByTaskId", {
          params: {
            task_id: self.taskList[self.taskListIndex].task_id
          }
        })
        .then(function(response) {
          self.taskScoreList = response.data.data;
          if (self.taskScoreList.length == 0) {
            if (self.taskListIndex < self.taskList.length - 1) {
              self.nextTaskScore();
            } else {
              self.correctState = true;
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.chapterId = this.$route.params.chapter_id;
    this.chapterName = this.$route.params.chapter_name;
    this.getTaskByChapterId();
    $("#correct-task").addClass("active");
  },
  beforeDestroy() {
    $("#correct-task").removeClass("active");
  }
};
</script >

<style scoped>
.task-item {
  padding: 20px;
}
.task-item-header {
  position: relative;
  margin-bottom: 30px;
}
.task-item-header h4 {
  font-weight: 600;
}
.task-next-btn {
  position: absolute;
  right: 0;
  top: 0;
}

.task-list-content {
  margin-top: 30px;
}
.task-item-content {
  margin-bottom: 50px;
  position: relative;
  min-height: 150px;
}
.task-item-content p {
  width: 650px;
}
.task-question {
  font-family: "KaiTi";
  font-size: 18px;
  text-indent: 2em;
}
.task-answer {
  line-height: 1.7em;
}

.task-corrent {
  right: 80px;
  top: 30px;
  position: absolute;
  width: 80px;
  height: 80px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
.task-corrent p {
  font-family: "KaiTi";
  background: #db6f6a;
  font-size: 18px;
  color: #fff;
  height: 36px;
  width: 100%;
  line-height: 36px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  border-bottom: 1px solid #ddd;
}
.task-corrent input {
  height: 40px;
  width: 78px;
  border: none;
  text-align: center;
  outline: none;
}
.submit-score {
  margin-top: 50px;
  margin-bottom: 30px;
}
.submit-score .score-btn {
  float: right;
  margin-right: 80px;
  font-size: 16px;
  width: 100px;
  height: 40px;
  font-weight: 600;
  font-family: "KaiTi";
  border-radius: 2px;
  color: #fff;
  background: #db6f6a;
}
</style>
