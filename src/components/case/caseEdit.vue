<template>
  <div class="case-edit-container">
    <h4>修改案例</h4>
    <router-link :to="{name: 'caseMsgRight'}" class="return">
      返回
      <span class="glyphicon glyphicon-share-alt"></span>
    </router-link>
    <hr class="featurette-divider">

    <div class="case-eidt-container">
      <div class="form-group">
        <label for>主题</label>
        <select class="form-control" v-model="caseType">
          <option
            v-for="(item, index) in themeList"
            :key="index"
            :value="item.themeTitle"
          >{{item.themeName}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for>标题</label>
        <input type="text" class="form-control" v-model="caseTitle">
      </div>
      <div class="form-group">
        <label for>作者</label>
        <input type="text" class="form-control" v-model="caseAuthor">
      </div>

      <div class="form-group">
        <label for>内容</label>
        <vue-edit :editText="caseContentStr" @submitText="submitCaseContent"></vue-edit>
      </div>
      <div class="form-group">
        <label for>答案</label>
        <vue-edit :editText="caseAnswerStr" @submitText="submitCaseAnswer"></vue-edit>
      </div>
      <div class="upload col-md-12">
        <div class="form-group col-md-6">
          <div class="upload-header">
            <label for>音频/视频地址</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="upload-type" id value="1" checked> 视频 &nbsp;&nbsp;&nbsp;
            <input type="radio" name="upload-type" id value="2"> 音频
          </div>
          <div class="col-md-12">
            <input type="text" class="form-control" v-model="caseMediaPath">
          </div>
        </div>
        <div class="form-group col-md-6">
          <div class="upload-header">
            <label for>附件ppt地址</label>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div class="col-md-12">
            <input type="text" class="form-control" v-model="casePpt">
          </div>
        </div>
      </div>
      <button class="btn my-btn" @click="updateCase">修改案例</button>
    </div>
  </div>
</template>

<script>
import vueEdit from "@/components/edit/vueEdit";

export default {
  data() {
    return {
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
      caseContentStr: "",
      caseAnswerStr: "",
      caseType: "",
      caseTitle: "",
      caseMediaPath: "",
      casePpt: "",
      mediaType: "",
      caseAuthor: "",
      caseId: ""
    };
  },
  components: {
    vueEdit
  },
  methods: {
    submitCaseAnswer(text) {
      this.caseAnswerStr = text;
    },
    submitCaseContent(text) {
      this.caseContentStr = text;
    },
    updateCase() {
      let self = this;
      this.mediaType = $(':radio[name="upload-type"]:checked').val();
      console.log(this.caseType);

      this.axios
        .post("/updateCase", {
          params: {
            case_type: self.caseType,
            case_title: self.caseTitle,
            case_content: self.caseContentStr,
            case_answer: self.caseAnswerStr,
            case_media_path: self.caseMediaPath,
            case_ppt: self.casePpt,
            media_type: self.mediaType,
            case_author: self.caseAuthor,
            case_id: self.caseId
          }
        })
        .then(function(response) {
          self.$router.push({ name: "caseMsg" });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getCaseById() {
      let self = this;
      this.mediaType = $(':radio[name="upload-type"]:checked').val();
      this.axios
        .post("/getCaseById", {
          params: {
            case_id: self.caseId
          }
        })
        .then(function(response) {
          self.caseType = response.data.data[0].case_id;
          self.caseTitle = response.data.data[0].case_title;
          self.caseContentStr = response.data.data[0].case_content;
          self.caseAnswerStr = response.data.data[0].case_answer;
          self.caseMediaPath = response.data.data[0].case_media_path;
          self.casePpt = response.data.data[0].case_ppt;
          self.caseType = response.data.data[0].case_type;
          self.caseAuthor = response.data.data[0].case_author;
          self.mediaType = response.data.data[0].media_type;
          $(':radio[name="upload-type"][value=' + self.mediaType + "]").attr(
            "checked",
            "checked"
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.caseId = this.$route.params.case_id;
    this.getCaseById();
  }
};
</script >

<style scoped>
.case-edit-container {
  padding: 20px;
  position: relative;
  padding-bottom: 200px;
}

.case-edit-container .return {
  position: absolute;
  top: 25px;
  right: 20px;
  color: #bbb;
}
.case-edit-container .return:hover {
  color: #db6f6a;
}
.upload-type {
  margin-left: 20px;
  display: inline-block;
}
.upload-header {
  margin-bottom: 10px;
}

.form-group.col-md-6,
.col-md-6 > .col-md-12,
.upload {
  padding-left: 0;
}

.case-edit-container .form-group {
  margin-bottom: 30px;
}
.case-edit-container {
  padding-bottom: 100px;
}
.case-edit-container .btn {
  position: absolute;
  right: 0;
  bottom: -50px;
}
</style>
