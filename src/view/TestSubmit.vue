<template>
  <div class="test-submit">
    <div class="container">
      <p>首页 &nbsp;>&nbsp; 测试 &nbsp;>&nbsp; {{chapterName}}</p>
      <div class="col-lg-10 col-lg-offset-1">
        <div class="test-submit-header">
          <h4>
            {{chapterName}}
            <small>测试</small>
          </h4>
          <p>满分({{testList.length * 10}})分</p>
          <hr class="featurette-divider">
        </div>
        <div class="test-submit-content" v-if="testList.length!= 0">
          <div class="test-list-container">
            <div class="test-item" v-for="(item, index) in testList" :key="index">
              <p class="test-question">
                {{index + 1}}.
                <span>单选</span>
                {{item.test_content}}
              </p>
              <div class="radio">
                <p>
                  <input type="radio" :name="item.test_id" value="A">
                  A. {{item.test_A}}
                </p>
                <p>
                  <input type="radio" :name="item.test_id" value="B">
                  B. {{item.test_B}}
                </p>
                <p>
                  <input type="radio" :name="item.test_id" value="C">
                  C. {{item.test_C}}
                </p>
                <p>
                  <input type="radio" :name="item.test_id" value="D">
                  D. {{item.test_D}}
                </p>
              </div>
              <div class="answer-container" v-if="completeFlag">
                <p>
                  <span
                    class="glyphicon glyphicon-ok"
                    v-if="submitStudentAnswer[item.test_id] == test_answer[item.test_id]"
                  ></span>
                  <span class="glyphicon glyphicon-remove" v-else></span>
                </p>
                <div class="answer">
                  答案：
                  <span>{{test_answer[item.test_id]}}</span>
                </div>
              </div>
            </div>
            <div class="test-list-footer">
              <button class="btn my-btn" @click="submitTestAnswer" v-if="!completeFlag">提交答案</button>
              <router-link
                class="btn my-btn return-btn"
                tag="button"
                :to="{name: 'courseHomework'}"
                v-else
              >返回测试</router-link>
            </div>
          </div>

          <div class="show-score" v-if="completeFlag">测试结果：{{student_total_score}} 分</div>
        </div>
        <div class="no-task-item" v-else>
          <div class="no-data">
            <p>本章测试尚未设置，请稍待</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapterId: "",
      chapterName: "",
      studentId: "",
      completeFlag: false,
      student_total_score: 20,
      submitStudentAnswer: {
        "1": "A",
        "2": "C",
        "3": "D"
      },
      test_answer: {
        "1": "A",
        "2": "D",
        "3": "C"
      },
      testList: [
        // {
        //   test_id: 5,
        //   test_content: "投机风险导致的结果是( )",
        //   test_A: "损失",
        //   test_B: "没损失",
        //   test_C: "损失或没损失",
        //   test_D: "损失、没损失或获利",
        //   test_answer: "C",
        //   chapter_id: 2
        // },
        // {
        //   test_id: 4,
        //   test_content: "马斯洛认为，最低层次的需求是( )",
        //   test_A: "自我实现需要",
        //   test_B: "安全需要",
        //   test_C: "社交需要",
        //   test_D: "生理需要",
        //   test_answer: "A",
        //   chapter_id: 2
        // },
        // {
        //   test_id: 3,
        //   test_content: "风险按照形态可分为( )",
        //   test_A: "自然风险和人为风险",
        //   test_B: "可管风险和不可管风险",
        //   test_C: "静态风险和动态风险",
        //   test_D: "局部风险和总体风险",
        //   test_answer: "C",
        //   chapter_id: 1
        // },
        // {
        //   test_id: 2,
        //   test_content: "项目定义专题会参加者不包括( )",
        //   test_A: "项目发起人和项目推动者",
        //   test_B: "项目设计阶段和实施阶段的管理者",
        //   test_C: "关键的职能经理",
        //   test_D: "所有施工人员",
        //   test_answer: "D",
        //   chapter_id: 1
        // },
        // {
        //   test_id: 1,
        //   test_content: "( )是项目的主导目标",
        //   test_A: "约束性目标",
        //   test_B: "激励性目标",
        //   test_C: "决策性目标",
        //   test_D: "成果性目标",
        //   test_answer: "A",
        //   chapter_id: 1
        // }
      ]
    };
  },
  methods: {
    getTestByChapterId() {
      let self = this;
      axios
        .post("/getTestByChapterId", {
          params: {
            chapter_id: self.chapterId
          }
        })
        .then(function(response) {
          self.testList = response.data.data;

          self.getTestScoreByChapterIdAndStudentId();
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getTestScoreByChapterIdAndStudentId() {
      let self = this;
      axios
        .post("/getTestScoreByChapterIdAndStudentId", {
          params: {
            chapter_id: self.chapterId,
            student_id: self.studentId
          }
        })
        .then(function(response) {
          if (response.data.data.length == 0) {
          } else {
            self.student_total_score = response.data.data[0].student_test_score;
            self.submitStudentAnswer = JSON.parse(
              response.data.data[0].student_test_answer
            );
            console.log(self.submitStudentAnswer);
            self.completeFlag = true;
            self.getTestAnswerByChapterId();
            self.testList.forEach(function(ele, index) {
              console.log(
                ele.test_id,
                self.submitStudentAnswer,
                self.submitStudentAnswer[ele.test_id]
              );
              console.log(
                $(
                  ":radio[name=" +
                    ele.test_id +
                    "][value=" +
                    self.submitStudentAnswer[ele.test_id] +
                    "]"
                )
              );
              $(
                ":radio[name=" +
                  ele.test_id +
                  "][value='" +
                  self.submitStudentAnswer[ele.test_id] +
                  "']"
              ).attr("checked", "checked");
            });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    getTestAnswerByChapterId() {
      let self = this;
      axios
        .post("/getTestAnswerByChapterId", {
          params: {
            chapter_id: self.chapterId
          }
        })
        .then(function(response) {
          self.test_answer = JSON.parse(
            response.data.data[0].chapter_test_answer
          );
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    submitTestAnswer() {
      let self = this;
      this.testList.forEach(function(ele, index) {
        console.log($(":radio[name=" + ele.test_id + "]:checked").val());
        self.submitStudentAnswer[ele.test_id] = $(
          ":radio[name=" + ele.test_id + "]:checked"
        ).val();
      });
      axios
        .post("/checkAndInsertTestAnswer", {
          params: {
            chapter_id: self.chapterId,
            student_id: self.studentId,
            student_test_answer: JSON.stringify(self.submitStudentAnswer)
          }
        })
        .then(function(response) {
          self.getTestScoreByChapterIdAndStudentId();
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.chapterId = this.$route.params.chapter_id;
    this.chapterName = this.$route.params.chapter_name;
    this.studentId = localStorage.getItem("user_id");
    this.getTestByChapterId();
  }
};
</script >

<style scoped>
.test-submit {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
  padding-bottom: 100px;
}
.test-submit .col-lg-10 {
  padding: 10px 15px;
  margin-top: 10px;
  background: #fff;
  border: 1px solid #ccc;
  min-height: 600px;
  margin-bottom: 100px;
}
.test-submit-header {
  position: relative;
}
.test-submit-header p {
  position: absolute;
  right: 50px;
  top: 5px;
}

.test-list-container {
  padding: 30px 200px 100px 20px;
}
.test-item {
  margin-bottom: 50px;
  font-size: 16px;
  border-bottom: 1px dashed #ccc;
}
.test-item .test-question span {
  font-size: 14px;
  background: aliceblue;
  border: 1px solid rgb(192, 245, 227);
  padding: 4px;
}
.test-item .radio p {
  margin-left: 30px;
}

.complete-test-container {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.complete-test-container p span {
  color: #49af4f;
}

.test-list-footer {
  margin-top: 30px;
  position: relative;
}

.answer-container {
  height: 50px;
  line-height: 50px;
  font-weight: 600;
  position: relative;
}
.answer-container span {
  color: #49af4f;
}
.answer-container .answer {
  position: absolute;
  top: 0;
  right: 0;
}
.answer-container span.glyphicon-remove {
  color: #f40;
}

.test-list-footer .return-btn {
  position: absolute;
  right: 0;
  top: 0;
}

.test-submit-content {
  position: relative;
}
.show-score {
  transform: rotateZ(30deg);
  height: 40px;
  position: absolute;
  top: -20px;
  right: 20px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 600;
  color: #49af49;
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
