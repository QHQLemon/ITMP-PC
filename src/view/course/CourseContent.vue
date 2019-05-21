<template>
  <div class="course-content-container">
    <h4>目录</h4>
    <!-- <hr class="featurette-divider"> -->
    <div class="course-content">
      <div class="chpater-item" v-for="(item, index) in CASList" :key="index">
        <div class="chapter-container">
          <span class="chapter-header">章节</span>
          <span class="chapter-num">{{index + 1}}</span>
          <span class="chapter-name">{{item.chapter_name}}</span>
        </div>
        <div class="section-container">
          <div class="courseware-item">
            <router-link :to="{name: 'courseware', params: {chapter_id: item.chapter_id}}">
              <span class="courseware-header">课件</span>
              <span class="courseware-icon glyphicon glyphicon-record"></span>
              <span class="courseware-name">课程资料</span>
              <span class="download">浏览课件</span>
            </router-link>
          </div>
          <router-link
            tag="div"
            class="section-item"
            v-for="(ele, sec_index) in item.sectionList"
            :key="sec_index"
            :to="{name: 'learn', params: {section_id: ele.section_id}}"
          >
            <span class="section-header">课时{{sec_index+1}}</span>
            <span class="section-icon glyphicon glyphicon-record"></span>
            <span class="section-name">{{ele.section_name}}</span>
            <span class="section-video">
              <span class="glyphicon glyphicon-expand"></span>
              <!-- 12:30 -->
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  methods: {
    getChapterAndSection() {
      let self = this;
      axios
        .get("/getChapterAndSection")
        .then(function(response) {
          self.CASList = response.data.data;
          // console.log("getsc", self.CASList);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getChapterAndSection();
  }
};
</script >

<style scoped>
.course-content-container {
  width: 100%;
}
.course-content-container > h4 {
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0;
}
.course-content {
  background: #f6f8fa;
}
.chapter-container {
  height: 40px;
  line-height: 40px;
  color: #888;
  font-weight: 600;
}
.chapter-container .chapter-header {
  display: inline-block;
  margin-left: 30px;
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
  margin-left: 20px;
}
.section-container {
  background: #fff;
  padding-bottom: 10px;
}
.section-container .section-item,
.section-container .courseware-item {
  height: 38px;
  line-height: 38px;
  position: relative;
}
.section-item .section-header,
.courseware-item .courseware-header {
  display: inline-block;
  color: #aaa;
  margin-left: 30px;
  width: 55px;
  text-align: center;
}
.section-item .section-icon,
.courseware-item .courseware-icon {
  display: inline-block;
  width: 30px;
  text-align: center;
  color: #aaa;
}

.section-item .section-name,
.courseware-item .courseware-name {
  display: inline-block;
  margin-left: 20px;
}
.section-item .section-video,
.courseware-item .download {
  display: inline-block;
  position: absolute;
  right: 50px;
}
.courseware-item .download {
  display: none;
}
.section-item:hover,
.courseware-item:hover {
  background: rgba(151, 183, 233, 0.2);
}
.courseware-item:hover .download {
  display: inline-block;
}
</style>
