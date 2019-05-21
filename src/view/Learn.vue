<template>
  <div class="learn-container">
    <div class="course-menu">
      <p>
        <span class="glyphicon glyphicon-th-list"></span> 课程目录
        <router-link class="returnContent" tag="span" :to="{name: 'courseContent'}">
          课程首页
          <span class="glyphicon glyphicon-share-alt"></span>
        </router-link>
      </p>
      <div class="course-list">
        <div class="chapter-item" v-for="(item, index) in CASList" :key="index">
          <div class="chapter-container">
            <span class="chapter-header">章节</span>
            <span class="chapter-num">{{index+1}}</span>
            <span class="chapter-name">{{item.chapter_name}}</span>
          </div>
          <div class="section-container">
            <router-link
              tag="div"
              class="section-item"
              v-for="(ele, sec_index) in item.sectionList"
              :to="{name: 'learn', params: {section_id: ele.section_id}}"
              :key="sec_index"
              :class="ele.section_id === sectionId ? 'active' : ''"
            >
              <span class="section-header">课时{{sec_index + 1}}</span>
              <span class="section-icon glyphicon glyphicon-record"></span>
              <span class="section-name">{{ele.section_name}}</span>
              <span class="section-video">
                <span class="glyphicon glyphicon-expand"></span>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="video-container">
      <div class="video-controller">
        <button class="btn btn-last" @click="getLastSection">
          <span class="glyphicon glyphicon-chevron-left"></span>
        </button>
        <button class="btn btn-next" @click="getNextSection">
          <span class="glyphicon glyphicon-chevron-right"></span>
        </button>
        <p
          class="course-title"
        > 第 {{ sectionItem.order_num }} 节 {{sectionItem.section_name }}</p>
      </div>
      <div class="player-container">
        <div class="player">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
          ></video-player>
        </div>
      </div>
    </div>

    <div class="modal fade" tabindex="-1" role="dialog" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              @click="fadeModal"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">提示</h4>
          </div>
          <div class="modal-body">
            <p>{{showMsg}}&hellip;</p>
          </div>
          <div class="modal-footer">
            <button type="button" @click="fadeModal" class="btn btn-default" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
export default {
  data() {
    return {
      sectionId: 1,
      maxId: "",
      sectionItem: {},
      showMsg: "",
      CASList: [
        // {
        //   chapter_id: 1,
        //   chapter_name: "总论",
        //   chapter_courseware: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
        //   sectionList: [
        //     {
        //       section_id: 1,
        //       section_name: "第 1 节 引言",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 1
        //     },
        //     {
        //       section_id: 2,
        //       section_name: "第 2 节  项目及项目管理",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 1
        //     },
        //     {
        //       section_id: 3,
        //       section_name: "项目群和项目组合管理",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 1
        //     },
        //     {
        //       section_id: 4,
        //       section_name: "项目经理的作用",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 1
        //     }
        //   ]
        // },
        // {
        //   chapter_id: 2,
        //   chapter_name: "项目管理和IT背景",
        //   chapter_courseware: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
        //   sectionList: [
        //     {
        //       section_id: 5,
        //       section_name: "项目管理的系统观",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 2
        //     },
        //     {
        //       section_id: 6,
        //       section_name: "干系人管理",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 2
        //     },
        //     {
        //       section_id: 7,
        //       section_name: "项目生命周期",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 2
        //     }
        //   ]
        // },
        // {
        //   chapter_id: 3,
        //   chapter_name: "项目管理过程组",
        //   chapter_courseware: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
        //   sectionList: [
        //     {
        //       section_id: 8,
        //       section_name: "项目管理过程组及其映射知识领域",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 3
        //     },
        //     {
        //       section_id: 9,
        //       section_name: "开发项目管理的方法学",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 3
        //     },
        //     {
        //       section_id: 10,
        //       section_name: "案例研究：JWD咨询公司项目",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 3
        //     },
        //     {
        //       section_id: 11,
        //       section_name: "过程组模板",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 3
        //     }
        //   ]
        // },
        // {
        //   chapter_id: 4,
        //   chapter_name: "项目综合管理",
        //   chapter_courseware: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
        //   sectionList: [
        //     {
        //       section_id: 12,
        //       section_name: "什么是项目综合管理",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 4
        //     },
        //     {
        //       section_id: 13,
        //       section_name: "项目选择",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 4
        //     },
        //     {
        //       section_id: 14,
        //       section_name: "制订项目章程",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 4
        //     },
        //     {
        //       section_id: 15,
        //       section_name: "指导和管理项目实施",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 4
        //     },
        //     {
        //       section_id: 16,
        //       section_name: "监控项目工作",
        //       section_video: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4",
        //       chapter_id: 4
        //     }
        //   ]
        // },
        // {
        //   chapter_id: 5,
        //   chapter_name: "项目范围管理",
        //   chapter_courseware: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
        //   sectionList: []
        // },
        // {
        //   chapter_id: 6,
        //   chapter_name: "项目时间管理",
        //   chapter_courseware: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
        //   sectionList: []
        // },
        // {
        //   chapter_id: 7,
        //   chapter_name: "项目成本管理",
        //   chapter_courseware: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
        //   sectionList: []
        // }
      ],
      playerOptions: {
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
            src: "http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4" //你的视频地址（必填）
          }
        ],
        // poster: "../assets/img/bg2.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  components: {
    videoPlayer
  },
  methods: {
    fadeModal() {
      $("#myModal")
        .removeClass("show")
        .addClass("fade");
    },
    getLastSection() {
      if (this.CASList[0].sectionList[0].section_id <= this.sectionId - 1) {
        this.$router.push({
          name: "learn",
          params: { section_id: this.sectionId - 1 }
        });
      } else {
        this.showMsg = "这已经是第一个视频了";
        $("#myModal")
          .removeClass("fade")
          .addClass("show");
      }
    },
    getNextSection() {
      if (16 >= this.sectionId + 1) {
        this.$router.push({
          name: "learn",
          params: { section_id: this.sectionId + 1 }
        });
      } else {
        this.showMsg = "这已经是最后一个视频了";
        $("#myModal")
          .removeClass("fade")
          .addClass("show");
      }
    },
    getClient() {
      if (window.innerWidth != null) {
        return {
          clientWidth: window.innerWidth,
          clientHeight: window.innerHeight
        };
      } else if (document.compatMode === "CSS1Compat") {
        return {
          clientWidth: document.documentElement.clientWidth,
          clientHeight: document.documentElement.clientHeight
        };
      } else {
        return {
          clientWidth: document.body.clientWidth,
          clientHeight: document.body.clientHeight
        };
      }
    },
    getChapterAndSection() {
      let self = this;
      axios
        .get("/getChapterAndSection")
        .then(function(response) {
          self.CASList = response.data.data;
          $.bootstrapLoading.end();
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    getSectionMaxId() {
      let self = this;
      axios
        .get("/getSectionMaxId")
        .then(function(response) {
          self.maxId = response.data.data[0].max_id;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getSectionById() {
      let self = this;
      axios
        .post("/getSectionById", {
          params: {
            section_id: self.sectionId
          }
        })
        .then(function(response) {
          self.sectionItem = response.data.data[0];
          self.$refs.videoPlayer.player.src(self.sectionItem.section_video);
          $.bootstrapLoading.end();
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    let client = this.getClient();
    $(".learn-container").css({
      height: client.clientHeight
    });
    this.sectionId = this.$route.params.section_id;
    this.getChapterAndSection();
    this.getSectionById();
    this.getSectionMaxId();
    $.bootstrapLoading.start();
  },
  watch: {
    $route(to, from) {
      $.bootstrapLoading.start();
      this.sectionId = this.$route.params.section_id;
      this.getSectionById();
    }
  }
};
</script >

<style scoped>
.learn-container {
  width: 100%;
  background: rgb(40, 40, 40);
  display: flex;
  overflow: hidden;
}
.course-menu {
  height: 100%;
  width: 25%;
  background: #292929;
  color: #888;
  overflow-y: scroll;
}
.course-menu::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}
.course-menu::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  background-color: #333;
}
.course-menu::-webkit-scrollbar-thumb {
  border-radius: 4px;
  box-shadow: inset 0 0 1px #bbb;
  background-color: #292929;
}

.course-menu p {
  color: #888;
  height: 40px;
  line-height: 40px;
  color: 16px;
  border-bottom: 1px solid #888;
  padding-left: 20px;
  margin-bottom: 0;
}
.course-menu .course-list {
  background: #292929;
}
.video-container {
  width: 75%;
  height: 100%;
}
.video-container .player-container {
  width: 96%;
  transform: translateX(2%);
  background: #333;
}
.player-container .player {
  width: 90%;
  transform: translateX(5%);
}
.video-controller {
  height: 100px;
  position: relative;
}
.video-container .btn {
  position: absolute;
  background: #333;
  padding: 5px 20px;
  top: 15px;
}
.video-container .btn:hover span {
  color: #ddd;
}
.video-container .btn-last {
  left: 20px;
}
.video-container .btn-next {
  right: 20px;
}
.video-container .course-title {
  text-align: center;
  line-height: 80px;
  color: #ddd;
  font-weight: 600;
}
.video-container span {
  font-size: 32px;
  color: #abadb0;
}

.chapter-item {
  width: 100%;
}
.chapter-container {
  height: 40px;
  line-height: 40px;
  font-weight: 600;
}
.chapter-container .chapter-header {
  display: inline-block;
  margin-left: 10px;
  width: 55px;
  text-align: center;
}
.chapter-container .chapter-num {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 2px solid #888;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
  line-height: 28px;
}
.chapter-container .chapter-name {
  display: inline-block;
  margin-left: 10px;
}
.section-container {
  padding-bottom: 10px;
}
.section-container .section-item {
  height: 38px;
  position: relative;
  line-height: 38px;
  cursor: pointer;
}
.section-container .section-item.active {
  color: rgb(141, 193, 73);
}
.section-item .section-header {
  display: inline-block;
  margin-left: 10px;
  width: 50px;
  text-align: center;
  overflow: hidden;
}
.section-item .section-icon {
  width: 38px;
  height: 38px;
  display: inline-block;
  vertical-align: top;
  line-height: 38px;
  text-align: center;
}

.section-item .section-name {
  display: inline-block;
  margin-left: 10px;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.section-item .section-video {
  display: inline-block;
  position: absolute;
  right: 10px;
}
.section-item:hover {
  background: rgba(151, 183, 233, 0.2);
}
.returnContent {
  float: right;
  cursor: pointer;
  margin-right: 5px;
}
.returnContent:hover {
  color: #ddd;
}
</style>
