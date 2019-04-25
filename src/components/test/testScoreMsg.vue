<template>
  <div class="test-score-msg">
    <div class="test-score-msg-header">
      <div class="col-lg-5 input-group search-div">
        <input
          type="text"
          id="searchWord"
          class="form-control"
          placeholder="输入学号..."
          v-model="studentId"
        >
        <span class="input-group-btn">
          <button class="btn btn-default my-btn" type="button" @click="seachAction">搜索</button>
        </span>
      </div>
    </div>

    <!-- table -->
    <div class="test-score-data">
      <table id="table" class="table"></table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentId: ""
    };
  },
  methods: {
    seachAction() {
      $("#table").bootstrapTable("refresh");
    },
    operateFormatter() {
      return `
        <button class="btn btn-default delete"><span  class="glyphicon glyphicon-trash"></span></button>`;
    },
    InitMainTable() {
      let $table;
      let self = this;
      //记录页面bootstrap-table全局变量$table，方便应用
      $table = $("#table").bootstrapTable({
        url: "/getTestScoreByPage", //请求后台的URL（*）
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
            sortOrder: params.order, //排位命令（desc，asc）
            student_id: self.studentId
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
            field: "chapter_id",
            title: "章节编号",
            sortable: true,
            visible: false
          },
          {
            field: "student_id",
            title: "学生编号"
          },
          {
            field: "student_test_answer",
            title: "提交答案"
          },
          {
            field: "student_test_score",
            title: "得分",
            sortable: true
          },
          {
            field: "operate",
            title: "操作",
            width: 150,
            aglin: "center",
            vertical: "middle",
            formatter: self.operateFormatter,
            events: {
              // "click .edit": function(e, value, row, index) {
              //   self.editTaskId = row.task_id;
              //   self.editStudentId = row.student_id;
              //   self.editAnswer = row.student_answer;
              //   self.editTaskScore = row.student_task_score;
              //   self.editState = row.task_score_state;
              //   console.log(row);
              // },
              "click .delete": function(e, value, row, index) {
                axios
                  .post("/deleteTestScoreByChapterIdAndStudentId", {
                    params: {
                      chapter_id: row.chapter_id,
                      student_id: row.student_id
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
  }
};
</script >

<style scoped>
.test-score-msg {
  padding: 20px;
}
.test-score-msg-header {
  margin-bottom: 30px;
}
</style>
