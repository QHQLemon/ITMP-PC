<template>
  <div class="task-submit">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 作业 &nbsp;>&nbsp; {{chapterName}}</p>
      <div class="col-lg-10 col-lg-offset-1">
        <div class="task-submit-header">
          <h4>
            {{chapterName}}
            <small>作业</small>
          </h4>
          <hr class="featurette-divider">
          <task-step :stepFlag="completeFlag"></task-step>
        </div>

        <div class="task-submit-content" v-if="taskList.length != 0">
          <div class="task-content" v-if="completeFlag == 0">
            <div class="task-list-content">
              <div class="task-item-content" v-for="(item, index) in taskList" :key="index">
                <h4>
                  {{index + 1}}.
                  <small>（{{item.task_score}}）分</small>
                </h4>
                <p class="task-question">{{item.task_content}}</p>
                <p>答：</p>
                <textarea name id class rows="8" :id="'taskAnswer' + item.task_id"></textarea>
              </div>
              <div class="task-content-footer clearfix">
                <button class="btn my-btn" @click="sumbitTask">提交作业</button>
              </div>
            </div>
          </div>
          <div class="task-correct" v-if="completeFlag == 1">
            <span class="glyphicon glyphicon-pencil"></span>
            <p>作业已提交，老师正在批改作业</p>
          </div>
          <div class="task-complete-score" v-if="completeFlag == 3">
            <p>
              满分：
              <span class="score">{{totalScore}}分</span>
            </p>
            <p>
              本章节您的成绩为：
              <span class="score">{{totalStudentScore}}分</span>
            </p>
          </div>
        </div>
        <div class="no-task-item" v-else>
          <div class="no-data">
            <p>本章作业尚未布置，请稍待</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import taskStep from "@/components/task/taskStep";
export default {
  components: {
    taskStep
  },
  data() {
    return {
      studentId: "",
      completeFlag: 0,
      chapterId: "",
      chapterName: "第一章 总论",
      taskAnswer: "",
      totalStudentScore: 0,
      totalScore: 0,
      taskScoreList: [],
      taskList: [],
      taskStateList: []
    };
  },
  methods: {
    sumbitTask() {
      let self = this;
      $.bootstrapLoading.start();
      for (let i = 0; i < self.taskList.length; i++) {
        self.taskAnswer = $("#taskAnswer" + self.taskList[i].task_id).val();
        axios
          .post("/insertTaskScore", {
            params: {
              task_id: self.taskList[i].task_id,
              student_id: self.studentId,
              student_answer: self.taskAnswer
            }
          })
          .then(function(response) {
            self.taskList = response.data.data;
            self.completeFlag = 1;
            $.bootstrapLoading.end();
            window.scrollTo(0, 0);
          })
          .catch(function(err) {
            console.log(err);
          });
      }
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

          self.taskList.forEach(function(ele, index) {
            self.totalScore += parseInt(ele.task_score);
          });
          self.checkCompleteFlag();
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    checkCompleteFlag() {
      let self = this;
      for (let i = 0; i < self.taskList.length; i++) {
        axios
          .post("/getTaskScoreByTaskIdAndStudentId", {
            params: {
              task_id: self.taskList[i].task_id,
              student_id: self.studentId
            }
          })
          .then(function(response) {
            if (response.data.data.length == 0) {
              self.completeFlag = 0;
            } else {
              self.taskScoreList = response.data.data[0];
              self.taskStateList = response.data.data[0].task_score_state;
              console.log(self.taskStateList, self.taskScoreList);
              if (self.taskStateList == 0) {
                self.completeFlag = 1;
              } else {
                self.totalStudentScore += parseInt(
                  self.taskScoreList.student_task_score
                );
                self.completeFlag = 3;
              }
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.chapterId = this.$route.params.chapter_id;
    this.chapterName = this.$route.params.chapter_name;
    this.studentId = localStorage.getItem("user_id");
    this.getTaskByChapterId();
  }
};
</script >

<style scoped>
.task-submit {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
  padding-bottom: 100px;
}

.task-submit div.col-lg-10 {
  padding: 10px 15px;
  margin-top: 10px;
  background: #fff;
  border: 1px solid #ccc;
  min-height: 600px;
  margin-bottom: 100px;
}

.task-submit-content {
  min-height: 600px;
  padding: 20px;
  margin-top: 20px;
}
.task-correct {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.task-complete-score {
  margin-top: 50px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
.task-complete-score span.score {
  color: #49af4f;
}

.task-content {
  margin-bottom: 20px;
}
.task-content .task-question {
  font-family: "KaiTi";
  font-size: 18px;
  text-indent: 2em;
}

.task-content .task-question + p {
  font-family: "KaiTi";
  font-size: 18px;
}

.task-item-content textarea {
  resize: none;
  width: 700px;
  margin-left: 20px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px 12px;
}

.task-content-footer {
  margin-top: 30px;
  position: relative;
  height: 100px;
}
.task-content-footer .btn {
  position: absolute;
  right: 130px;
  top: 30px;
}
.no-task-item {
  margin-top: 30px;
  background: #fff;
  padding: 10px;
  padding-bottom: 50px;
  min-height: 600px;
}
.no-task-item .no-data {
  height: 300px;
  width: 350px;
  margin: 50px auto;
  background-image: url("../assets/img/暂无数据.png");
  background-size: 200px;
  background-repeat: no-repeat;
  opacity: 0.3;
}
.no-task-item .no-data p {
  line-height: 200px;
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-right: -20px;
}
</style>
