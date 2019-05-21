<template>
  <div class="test-msg">
    <!-- test-header -->
    <div class="test-msg-header">
      <div class="col-lg-5 input-group">
        <select
          class="form-control"
          name="chapter"
          id="chapterId"
          v-model="chapterId"
          @change="seachAction"
        >
          <option value>全部章节</option>
          <option
            v-for="(item, index) in chapterList"
            :value="item.chapter_id"
            :key="index"
          >{{item.chapter_name}}</option>
        </select>
      </div>
      <div class="test-add">
        <button class="btn my-btn" data-toggle="modal" data-target="#testAddModal">
          增加数据
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>

    <!-- table -->
    <div class="test-data">
      <table id="table" class="table"></table>
    </div>

    <!--增加框 -->
    <div
      class="modal fade"
      id="testAddModal"
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
            <h4 class="modal-title" id="myModalLabel">增加数据</h4>
          </div>
          <div class="modal-body">
            <form class>
              <div class="form-group">
                <label for>试题内容</label>
                <textarea class="form-control" rows="2" v-model="testContent"></textarea>
              </div>
              <div class="form-inline">
                <label for>选项A</label>
                <input type="text" class="form-control" v-model="testA">
                <label for style="margin-left: 16px">选项B</label>
                <input type="text" class="form-control" v-model="testB">
              </div>
              <div class="form-group"></div>
              <div class="form-inline">
                <label for>选项C</label>
                <input type="text" class="form-control" v-model="testC">
                <label for style="margin-left: 16px">选项D</label>
                <input type="text" class="form-control" v-model="testD">
              </div>
              <div class="form-group"></div>
              <div class="form-inline">
                <label for>答案</label>
                <input type="text" class="form-control" v-model="testAnswer">
              </div>
              <div class="form-group"></div>

              <div class="form-group">
                <label for>所属章节</label>
                <select name="chapter_id" id class="form-control" v-model="chapterAddId">
                  <option
                    v-for="(item, index) in chapterList"
                    :key="index"
                    :value="item.chapter_id"
                  >{{item.chapter_name}}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="insertTest"
              data-dismiss="modal"
            >保存</button>
          </div>
        </div>
      </div>
    </div>

    <!--修改框 -->
    <div
      class="modal fade"
      id="testEditModal"
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
            <h4 class="modal-title" id="myModalLabel">增加数据</h4>
          </div>
          <div class="modal-body">
            <form class>
              <div class="form-group">
                <label for>试题内容</label>
                <textarea class="form-control" rows="2" v-model="testEditContent"></textarea>
              </div>
              <div class="form-inline">
                <label for>选项A</label>
                <input type="text" class="form-control" v-model="testEditA">
                <label for style="margin-left: 16px">选项B</label>
                <input type="text" class="form-control" v-model="testEditB">
              </div>
              <div class="form-group"></div>
              <div class="form-inline">
                <label for>选项C</label>
                <input type="text" class="form-control" v-model="testEditC">
                <label for style="margin-left: 16px">选项D</label>
                <input type="text" class="form-control" v-model="testEditD">
              </div>
              <div class="form-group"></div>
              <div class="form-inline">
                <label for>答案</label>
                <input type="text" class="form-control" v-model="testEditAnswer">
              </div>
              <div class="form-group"></div>
              <div class="form-group">
                <label for>所属章节</label>
                <select name="chapter_id" id class="form-control" v-model="chapterEditId">
                  <option
                    v-for="(item, index) in chapterList"
                    :key="index"
                    :value="item.chapter_id"
                  >{{item.chapter_name}}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" @click="editTest" data-dismiss="modal">保存</button>
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
      testContent: "",
      testA: "",
      testB: "",
      testC: "",
      testD: "",
      testE: "",
      testAnswer: "",
      chapterAddId: 1,
      testEditId: "",
      testEditContent: "",
      testEditA: "",
      testEditB: "",
      testEditC: "",
      testEditD: "",
      testEditE: "",
      testEditAnswer: "",
      chapterEditId: 1,
      oldChapterId: "",
      chapterId: "",
      chapterList: []
    };
  },
  methods: {
    getAllChapter() {
      let self = this;
      axios
        .get("/getAllChapter")
        .then(function(response) {
          self.chapterList = response.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    insertTest() {
      let self = this;
      axios
        .post("/insertTest", {
          params: {
            test_content: self.testContent,
            test_A: self.testA,
            test_B: self.testB,
            test_C: self.testC,
            test_D: self.testD,
            test_answer: self.testAnswer,
            chapter_id: self.chapterAddId
          }
        })
        .then(function(response) {
          self.seachAction();
          self.testContent = "";
          self.testA = "";
          self.testB = "";
          self.testC = "";
          self.testD = "";
          self.testAnswer = "";
          self.chapterAddId = 1;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editTest() {
      let self = this;
      axios
        .post("/updateTest", {
          params: {
            test_id: self.testEditId,
            test_content: self.testEditContent,
            test_A: self.testEditA,
            test_B: self.testEditB,
            test_C: self.testEditC,
            test_D: self.testEditD,
            test_score: self.testEditScore,
            test_answer: self.testEditAnswer,
            chapter_id: self.chapterEditId,
            old_chapter_id: self.oldChapterId
          }
        })
        .then(function(response) {
          self.seachAction();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    seachAction() {
      $("#table").bootstrapTable("refresh");
    },
    operateFormatter() {
      return `<button class="btn btn-default edit" data-toggle="modal" data-target="#testEditModal"><span class="glyphicon glyphicon-edit"></span></button>
        <button class="btn btn-default delete"><span  class="glyphicon glyphicon-trash"></span></button>`;
    },
    InitMainTable() {
      let $table;
      let self = this;
      console.log(self.chapterList,  '-------')
      //记录页面bootstrap-table全局变量$table，方便应用
      $table = $("#table").bootstrapTable({
        url: "/getTestByPage", //请求后台的URL（*）
        method: "GET", //请求方式（*）
        // toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true, //是否显示行间隔色
        cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true, //是否显示分页（*）
        sortable: true, //是否启用排序
        sortOrder: "asc", //排序方式
        sidePagination: "server", //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1, //初始化加载第一页，默认第一页,并记录
        pageSize: 5, //每页的记录行数（*）
        pageList: [5, 10, 15, 20], //可供选择的每页的行数（*）
        search: false, //是否显示表格搜索
        // searchAlign: "left",
        // searchText: "",
        strictSearch: true,
        showColumns: true, //是否显示所有的列（选择显示的列）
        showRefresh: true, //是否显示刷新按钮
        minimumCountColumns: 2, //最少允许的列数
        clickToSelect: true, //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "test_id", //每一行的唯一标识，一般为主键列
        showToggle: true, //是否显示详细视图和列表视图的切换按钮
        cardView: false, //是否显示详细视图
        detailView: false, //是否显示父子表

        ajaxOptions: {
          headers: {
            "Content-type": "application/json;charset=utf-8",
            token: localStorage.getItem("token")
          }
        },
        //得到查询的参数
        queryParams: function(params) {
          //这里的键的名字和控制器的变量名必须一致，这边改动，控制器也需要改成一样的
          var temp = {
            rows: params.limit, //页面大小
            page: params.offset / params.limit + 1, //页码
            // sortOrder: params.order, //排位命令（desc，asc）
            chapter_id: self.chapterId
          };
          return temp;
        },
        responseHandler: function(res) {
          // console.log({
          //   total: res.data.total, //总页数
          //   rows: res.data.rows //数据
          // });
          return {
            total: res.data.total, //总页数
            rows: res.data.rows //数据
          };
        },
        customSearch(data, text) {
          return data.filter(function(row) {
            return row.field.indexOf(text) > -1;
          });
        },

        columns: [
          {
            checkbox: true,
            visible: true //是否显示复选框
          },
          {
            field: "test_id",
            title: "试题编号",
            sortable: true,
            width: 120,
            visible: false
          },
          {
            field: "test_content",
            title: "试题内容"
          },
          {
            field: "test_A",
            title: "选项A"
          },
          {
            field: "test_B",
            title: "选项B"
          },
          {
            field: "test_C",
            title: "选项C"
          },
          {
            field: "test_D",
            title: "选项D"
          },
          {
            field: "test_answer",
            title: "答案"
          },
          {
            field: "chapter_id",
            title: "所属章节",
            formatter: function(value, row, index) {
              let len = self.chapterList.length;
              console.log(self.chapterList, value);
              for (let i = 0; i < len; i++) {
                if (value == self.chapterList[i].chapter_id) {
                  return self.chapterList[i].chapter_name;
                }
              }
            }
          },
          {
            field: "operate",
            title: "操作",
            width: 150,
            aglin: "center",
            vertical: "middle",
            formatter: self.operateFormatter,
            events: {
              "click .edit": function(e, value, row, index) {
                self.testEditId = row.test_id;
                self.testEditContent = row.test_content;
                self.testEditA = row.test_A;
                self.testEditB = row.test_B;
                self.testEditC = row.test_C;
                self.testEditD = row.test_D;
                // self.testEditE = row.test_E;
                self.testEditAnswer = row.test_answer;
                self.chapterEditId = row.chapter_id;
                self.oldChapterId = row.chapter_id;
              },
              "click .delete": function(e, value, row, index) {
                axios
                  .post("/deleteTest", {
                    params: {
                      test_id: row.test_id,
                      chapter_id: row.chapter_id
                    }
                  })
                  .then(function(response) {
                    self.seachAction();
                  })
                  .catch(function(error) {
                    console.log(error);
                  });
              }
            }
          }
        ],
        onLoadSuccess: function() {},
        onLoadError: function() {
          console.log("数据加载失败！");
        }
      });
    }
  },

  mounted() {
    this.InitMainTable();
    this.getAllChapter();
  },
};
</script >

<style scoped>
.test-msg {
  padding: 20px;
}
.test-msg-header {
  position: relative;
  margin-bottom: 30px;
}
.test-add {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
