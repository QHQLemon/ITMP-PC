<template>
  <div class="topic-msg-container">
    <div class="container">
      <div class="topic-msg-content col-md-10 col-lg-offset-1">
        <div class="topic-msg-header">
          <h4>讨论区敏感词管理</h4>
          <hr class="featurette-divider">
        </div>
        <div class="topic-option">
          <button class="btn my-btn" data-toggle="modal" data-target="#addWordModal">增加敏感词</button>
        </div>
        <div class="topic-word-box">
          <span class="no-good-word" v-for="(item, index) in noGoodWord">
            {{item.ban_word}}
            <span
              class="glyphicon glyphicon-remove"
              @click="deleteWord(item)"
            ></span>
          </span>
        </div>
      </div>
    </div>

    <!-- //添加框 -->
    <div
      class="modal fade"
      id="addWordModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">增加需限制的敏感词</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="calss-name">敏感词</label>
                <input type="text" class="form-control" id="calss-name" v-model="banWord">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="addWord" data-dismiss="modal">保存</button>
          </div>
        </div>
      </div>
    </div>

    <!-- //删除框 -->
    <!-- <div class="modal fade" id="deleteWordModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">删除敏感词</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <p>确定要删除这个敏感词么？</p>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="deleteWord"
              data-dismiss="modal"
            >保存</button>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      banWord: "",
      noGoodWord: [
        { ban_word: "社会主义" },
        { ban_word: "马克思主义" },
        { ban_word: "毛泽东" },
        { ban_word: "社会主义" },
        { ban_word: "马克思主义" },
        { ban_word: "毛泽东" },
        { ban_word: "社会主义" },
        { ban_word: "马克思主义" },
        { ban_word: "毛泽东" }
      ]
    };
  },
  methods: {
    deleteWord(item) {
      var a = confirm("确定要删除" + item.ban_word + "么？");
      if (a == true) {
        let self = this;
        this.axios
          .post("/deleteBan", {
            params: {
              ban_id: item.ban_id
            }
          })
          .then(function(response) {
            self.getAllBan();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("false");
      }
    },
    addWord() {
      let self = this;
      this.axios
        .post("/insertBan", {
          params: {
            ban_word: self.banWord
          }
        })
        .then(function(response) {
          self.getAllBan();
          self.banWord = "";
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getAllBan() {
      let self = this;
      this.axios
        .get("/getAllBan")
        .then(function(response) {
          self.noGoodWord = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getAllBan();
  }
};
</script >

<style scoped>
.topic-msg-container {
  width: 100%;
  background: #f6f8fa;
  margin-top: -20px;
  padding-top: 20px;
  min-height: 600px;
}

.topic-msg-content {
  background: #fff;
  min-height: 600px;
  margin-bottom: 200px;
  border: 1px solid #ccc;
}
.topic-msg-header {
  margin-top: 20px;
}
.topic-word-box {
  margin-top: 30px;
  border: 1px solid #ccc;
  width: 80%;
  min-height: 200px;
  padding: 10px;
}
.no-good-word {
  position: relative;
  display: inline-block;
  padding: 5px 15px;
  border: 1px solid #ccc;
  margin-right: 20px;
  margin-top: 10px;
  border-radius: 2px;
}
.no-good-word .glyphicon-remove {
  position: absolute;
  font-size: 8px;
  top: 0;
  right: 0;
}
</style>
