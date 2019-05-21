<template>
  <div class="task-msg">
    <!-- task header -->
    <div class="task-msg-header form-inline">
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
      <div class="task-add">
        <button class="btn my-btn" data-toggle="modal" data-target="#taskAddModal">
          增加数据
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>

    <!-- task-table -->
    <div class="task-data">
      <table id="table" class="table"></table>
    </div>

    <!-- 添加框 -->
    <div
      class="modal fade"
      id="taskAddModal"
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
            <form>
              <div class="form-group">
                <label for>作业内容</label>
                <textarea class="form-control" rows="4" v-model="taskContent"></textarea>
              </div>
              <div class="form-group">
                <label for>作业分数</label>
                <input type="text" class="form-control" id v-model="taskScore">
              </div>
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
              @click="insertTask"
              data-dismiss="modal"
            >保存</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 修改框 -->
    <div
      class="modal fade"
      id="taskEditModal"
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
            <h4 class="modal-title" id="myModalLabel">修改数据</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for>作业内容</label>
                <textarea class="form-control" rows="4" v-model="taskEditContent"></textarea>
              </div>
              <div class="form-group">
                <label for>作业分数</label>
                <input type="text" class="form-control" id v-model="taskEditScore">
              </div>
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
            <button type="button" class="btn btn-primary" @click="editTask" data-dismiss="modal">保存</button>
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
      chapterAddId: "1",
      taskContent: "",
      taskScore: "",
      chapterEditId: "1",
      taskEditContent: "ksfjlasfalsd",
      taskEditScore: "20",
      taskEditId: "",
      chapterList: []
    };
  },
  methods: {
    insertTask() {
      let self = this;
      axios
        .post("/insertTask", {
          params: {
            task_content: self.taskContent,
            task_score: self.taskScore,
            chapter_id: self.chapterAddId
          }
        })
        .then(function(response) {
          self.seachAction();
          self.taskContent = "";
          self.taskScore = "";
          self.chapterAddId = "1";
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editTask() {
      let self = this;
      axios
        .post("/updateTask", {
          params: {
            task_content: self.taskEditContent,
            task_score: self.taskEditScore,
            chapter_id: self.chapterEditId,
            task_id: self.taskEditId
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
    operateFormatter() {
      return `<button class="btn btn-default edit" data-toggle="modal" data-target="#taskEditModal"><span class="glyphicon glyphicon-edit"></span></button>
        <button class="btn btn-default delete"><span @click="deleteTopic" class="glyphicon glyphicon-trash"></span></button>`;
    },
    InitMainTable() {
      let $table;
      let self = this;
      //记录页面bootstrap-table全局变量$table，方便应用
      $table = $("#table").bootstrapTable({
        url: "/getTaskByPage", //请求后台的URL（*）
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
        uniqueId: "task_id", //每一行的唯一标识，一般为主键列
        showToggle: true, //是否显示详细视图和列表视图的切换按钮
        cardView: false, //是否显示详细视图
        detailView: false, //是否显示父子表

        ajaxOptions: {
          headers: {
            'Content-type': "application/json;charset=utf-8",
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
          console.log({
            total: res.data.total, //总页数
            rows: res.data.rows //数据
          });
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
            field: "task_id",
            title: "作业编号",
            sortable: true,
            width: 120,
            visible: false
          },
          {
            field: "task_content",
            title: "作业内容"
          },
          {
            field: "task_score",
            title: "分数"
          },
          {
            field: "chapter_id",
            title: "所属章节",
             formatter: function(value, row, index) {
              let len = self.chapterList.length;
              console.log(self.chapterList, value);
              for(let i = 0; i < len; i++){
                if(value == self.chapterList[i].chapter_id){
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
                self.taskEditContent = row.task_content;
                self.taskEditScore = row.task_score;
                self.chapterEditId = row.chapter_id;
                self.taskEditId = row.task_id;
              },
              "click .delete": function(e, value, row, index) {
                axios
                  .post("/deleteTask", {
                    params: {
                      task_id: row.task_id
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
        onLoadSuccess: function() {
        },
        onLoadError: function() {
          console.log("数据加载失败！");
        }
      });
    }
  },
  mounted() {
    this.InitMainTable();
    this.getAllChapter();
  }
};
</script >

<style scoped>
.task-msg {
  padding: 20px;
}
.task-msg-header {
  position: relative;
  margin-bottom: 30px;
}
.task-msg-header .task-add {
  position: absolute;
  right: 0;
  top: 0;
}
.search-div {
  margin-left: 20px;
}
</style>
