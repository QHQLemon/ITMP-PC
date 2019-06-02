<template>
  <div class="case-detail-container">
    <h3>{{caseItem.case_title}}</h3>

    <router-link :to="{name: 'case'}" tag="span" class="return">
      返回案例首页
      <span class="glyphicon glyphicon-share-alt"></span>
    </router-link>

    <div class="case-detail-header">
      <span>所属主题：{{themeList[caseItem.case_type - 1].themeName}}</span>
      <span>作者： {{caseItem.case_author}}</span>
    </div>
    <div class="case-detail-content" v-html="caseItem.case_content"></div>

    <div class="case-video-container">
      <div class="music-player" v-show="caseItem.media_type == 2" v-if="caseItem.case_media_path">
        <audio controls :src="caseItem.case_media_path"></audio>
      </div>
      <div class="player" v-show="caseItem.media_type == 1">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
        ></video-player>
      </div>
      <div class="video-intro" v-show="caseItem.media_type == 1" v-if="caseItem.case_media_path">{{caseItem.case_title}}解说视频</div>
    </div>
    <div class="case-detail-answer">
      <div
        class="btn my-btn"
        role="button"
        data-toggle="collapse"
        href="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >查看参考答案</div>

      <div class="collapse" id="collapseExample">
        <div class="well" v-html="caseItem.case_answer"></div>
      </div>
    </div>
    <div class="case-inshrine">
      <div class="top">
        <span
          class="glyphicon glyphicon-star"
          @click="changeInshrine"
          :class="enshrineFlag ? 'active' : ''"
        ></span>
      </div>
      <div class="bottom">
        <span v-show="!enshrineFlag">收藏案例</span>
        <span v-show="enshrineFlag">已收藏</span>
      </div>
    </div>
    <!-- <div class="case-download">
      <a href="">下载ppt<span class="glyphicon glyphicon-save"></span></a>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseId: "",
      enshrineFlag: false,
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
      caseItem: {
        // case_id: 8,
        // case_type: 1,
        // case_title: "IT项目的特点与规划",
        // case_content:
        //   "<p>【案例1】考虑下列问题：</p><p>Ø&nbsp;编辑一个版报纸</p><p>Ø&nbsp;在火星上投放机器人设备搜索生命迹象</p><p>Ø&nbsp;准备结婚</p><p>Ø&nbsp;改进财务计算机系统以处理通用的欧币问题</p><p>Ø&nbsp;开发优秀人机界面的研究项目</p><p>Ø&nbsp;对用户使用计算机系统时出现的问题的原因进行调查</p><p>Ø&nbsp;为计算领域学生分配第二年的编程任务</p><p>Ø&nbsp;为一台新计算机编制操作系统</p><p>Ø&nbsp;在组织中安装新版本的字处理软件包</p><p>\t其中，有些用“项目”描述可能比其他更合适。把它们按照最接近你的构成项目的概念的顺序排列起来，越在上面，越符合“项目”的概念。并说明与上一条作为项目的不同点。</p>",
        // case_answer:
        //   "<p>【参考答案1.1】答案不唯一，一种可能的顺序如下：</p><p>Ø&nbsp;在火星上投放机器人设备搜索生命迹象</p><p>Ø&nbsp;为一台新计算机编制操作系统</p><p>Ø&nbsp;改进财务计算机系统以处理通用的欧币问题</p><p>Ø&nbsp;在组织中安装新版本的字处理软件包</p><p>Ø&nbsp;对用户使用计算机系统时出现的问题的原因进行调查</p><p>Ø&nbsp;准备结婚</p><p>Ø&nbsp;开发优秀人机界面的研究项目</p><p>Ø&nbsp;编辑一个版报纸</p><p>Ø&nbsp;为计算领域学生分配第二年的编程任务</p>",
        // case_ctime: "2019-04-06T04:07:52.000Z",
        // case_media_path:
        //   "http://ppdzfcm6e.bkt.clouddn.com/course_video_demo.mp4",
        // case_ppt: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
        // media_type: 1,
        // case_enshrine_num: 0,
        // case_author: "佚名"
      },
      studentId: ""
    };
  },
  computed: {
    playerOptions() {
      return {
        playbackRates: [0.5, 0.75, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: this.caseItem.case_media_path //你的视频地址（必填）
          }
        ],
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      };
    }
  },
  methods: {
    changeInshrine() {
      if (this.enshrineFlag == false) {
        this.addStudentEnshrine();
      } else {
        this.minusStudentEnshrine();
      }
      this.enshrineFlag = !this.enshrineFlag;
    },
    getCaseById() {
      let self = this;
      this.axios
        .post("/getCaseById", {
          params: {
            case_id: self.caseId
          }
        })
        .then(function(response) {
          self.caseItem = response.data.data[0];
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    addStudentEnshrine() {
      let self = this;
      this.axios
        .post("/addStudentEnshrine", {
          params: {
            case_id: self.caseId,
            student_id: self.studentId
          }
        })
        .then(function(response) {
          console.log("add");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    minusStudentEnshrine() {
      let self = this;
     this.axios
        .post("/minusStudentEnshrine", {
          params: {
            case_id: self.caseId,
            student_id: self.studentId
          }
        })
        .then(function(response) {
          console.log("minus");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getStudentAndEnshrine() {
      let self = this;
      this.axios
        .post("/getStudentAndEnshrine", {
          params: {
            case_id: self.caseId,
            student_id: self.studentId
          }
        })
        .then(function(response) {
          console.log(response.data.data);
          if (response.data.data.length == 1) {
            self.enshrineFlag = true;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.caseId = this.$route.params.case_id;
    this.studentId = localStorage.getItem("user_id");
    this.getCaseById();
    this.getStudentAndEnshrine();
  }
};
</script >

<style scoped>
.case-detail-container {
  background: #fff;
  min-height: 600px;
  padding: 20px;
  padding-bottom: 200px;
  margin-bottom: 100px;
  position: relative;
}
.case-detail-container h3 {
  text-align: center;
  font-weight: 600;
}
.case-detail-header {
  margin-top: 30px;
  text-align: center;
}
.case-detail-header span:first-child {
  margin-right: 50px;
}
.case-detail-content {
  margin-top: 10px;
  padding: 20px;
}
.case-detail-container .return {
  position: absolute;
  top: 10px;
  right: 10px;
}
.case-detail-container .return:hover {
  color: #db6f6a;
}
.case-detail-answer {
  margin-top: 50px;
}
.case-video-container .player {
  width: 600px;
  margin: 0 auto;
}
.case-video-container .video-intro {
  font-size: 12px;
  color: #888;
  text-align: center;
  margin-top: 10px;
}

.case-answer-btn {
  line-height: 2.4em;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
}

.case-inshrine {
  margin-top: 50px;
  display: inline-block;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
  line-height: 2.5em;
  position: absolute;
  top: -30px;
}
.case-inshrine .top {
  border-bottom: 1px solid #ccc;
  font-size: 16px;
}
.case-inshrine .top span {
  cursor: pointer;
  color: #ddd;
}
.case-inshrine .top span.active {
  color: #db6f6a;
}
</style>
