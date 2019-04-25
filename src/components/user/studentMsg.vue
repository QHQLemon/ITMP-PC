<template>
  <div class="student-msg">
    <div class="student-header clearfix">
      <div class="col-lg-5">
        <div class="input-group">
          <input type="text" id="searchWord" class="form-control" placeholder="关键字...">
          <span class="input-group-btn">
            <button class="btn btn-default my-btn" type="button" @click="seachAction">搜索</button>
          </span>
        </div>
      </div>
      <div class="student-add">
        <button class="btn my-btn" data-toggle="modal" data-target="#addStudentModal">
          增加数据
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>
    <!-- <hr class="featurette-divider"> -->
    <div class="student-data">
      <table id="table" class="table" data-side-pagination="client"></table>
    </div>

    <!-- //添加框 -->
    <div
      class="modal fade"
      id="addStudentModal"
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
                <label for="studentId">学生编号</label>
                <input type="text" class="form-control" id="studentId" v-model="studentId">
              </div>
              <div class="form-group">
                <label for="studentName">学生姓名</label>
                <input type="text" class="form-control" id="studentName" v-model="studentName">
              </div>
              <div class="form-group">
                <label for="studentPwd">学生密码</label>
                <input type="text" class="form-control" id="studentPwd" v-model="studentPwd">
              </div>
              <div class="form-group">
                <label for="classId">班级编号</label>
                <select class="form-control" v-model="classId" id="classId">
                  <option
                    v-for="(item, index) in classList"
                    :value="item.class_id"
                    :key="index"
                  >{{item.class_name}}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="insertStudent"
              data-dismiss="modal"
            >保存</button>
          </div>
        </div>
      </div>
    </div>

    <!-- //修改框 -->
    <div
      class="modal fade"
      id="updateStudentModal"
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
                <label for="studentName">学生姓名</label>
                <input type="text" class="form-control" id="studentName" v-model="studentEditName">
              </div>
              <div class="form-group">
                <label for="studentPwd">学生密码</label>
                <input type="text" class="form-control" id="studentPwd" v-model="studentEditPwd">
              </div>
              <div class="form-group">
                <label for="classId">班级编号</label>
                <select class="form-control" id="classId" v-model="classEditId">
                  <option
                    v-for="(item, index) in classList"
                    :value="item.class_id"
                    :key="index"
                  >{{item.class_name}}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateStudent"
              data-dismiss="modal"
            >保存</button>
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
      studentId: "",
      studentName: "",
      studentPwd: "",
      classId: "1",
      studentEditId: "",
      studentEditName: "",
      studentEditPwd: "",
      classEditId: "",
      oldClassId: "",
      classList: [
        { class_id: 1, class_name: "信息管理与信息系统151班", class_num: 1 },
        { class_id: 2, class_name: "信息管理与信息系统161班", class_num: 0 },
        { class_id: 3, class_name: "信息管理与信息系统162班", class_num: 0 },
        { class_id: 4, class_name: "信息管理与信息系统141班", class_num: 0 },
        { class_id: 6, class_name: "信息科学151班", class_num: 0 },
        { class_id: 7, class_name: "信息科学141班", class_num: 0 },
        { class_id: 8, class_name: "管理科学151班", class_num: 0 },
        { class_id: 9, class_name: "管理科学161班", class_num: 0 },
        { class_id: 10, class_name: "应用数学151班", class_num: 0 },
        { class_id: 11, class_name: "汉语言文学151班", class_num: 0 },
        { class_id: 13, class_name: "进阶班", class_num: 1 }
      ]
    };
  },
  methods: {
    getAllClass() {
      let self = this;
      axios
        .get("/getAllClass")
        .then(function(response) {
          console.log(response.data.data);
          self.classList = response.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    insertStudent() {
      let self = this;
      axios
        .post("/insertStudent", {
          params: {
            student_id: self.studentId,
            student_name: self.studentName,
            student_pwd: self.studentPwd,
            student_class_id: self.classId
          }
        })
        .then(function(response) {
          self.seachAction();
          (self.studentId = ""),
            (self.studentName = ""),
            (self.studentPwd = ""),
            (self.classId = "1");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    updateStudent() {
      let self = this;
      console.log(
        self.studentEditId,
        self.studentEditName,
        self.studentEditPwd,
        self.classEditId
      );
      axios
        .post("/updateStudent", {
          params: {
            student_id: self.studentEditId,
            student_name: self.studentEditName,
            student_pwd: self.studentEditPwd,
            student_class_id: self.classEditId,
            student_old_class_id: self.oldClassId
          }
        })
        .then(function(response) {
          console.log("update");
          self.seachAction();
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    seachAction() {
      $("#table").bootstrapTable("refresh");
    },
    operateFormatter() {
      return `<button class="btn btn-default edit" data-toggle="modal" data-target="#updateStudentModal" ><span class="glyphicon glyphicon-edit"></span></button>
        <button class="btn btn-default delete"><span @click="deleteTopic" class="glyphicon glyphicon-trash"></span></button>`;
    },
    InitMainTable() {
      let $table;
      let self = this;

      //记录页面bootstrap-table全局变量$table，方便应用
      $table = $("#table").bootstrapTable({
        url: "/queryStudentByPage", //请求后台的URL（*）
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
        pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
        search: false, //是否显示表格搜索
        // searchAlign: "left",
        // searchText: "",
        strictSearch: true,
        showColumns: true, //是否显示所有的列（选择显示的列）
        showRefresh: true, //是否显示刷新按钮
        minimumCountColumns: 2, //最少允许的列数
        clickToSelect: true, //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "notice_id", //每一行的唯一标识，一般为主键列
        showToggle: true, //是否显示详细视图和列表视图的切换按钮
        cardView: false, //是否显示详细视图
        detailView: false, //是否显示父子表

        ajaxOptions: {
          headers: {
            'Content-type': "application/json;charset=utf-8",
            token: localStorage.getItem("token")
          }
        },
        //设置请求头
        //得到查询的参数
        queryParams: function(params) {
          //这里的键的名字和控制器的变量名必须一致，这边改动，控制器也需要改成一样的
          var temp = {
            rows: params.limit, //页面大小
            page: params.offset / params.limit + 1, //页码
            sort: "notice_id", //排序列名
            sortOrder: params.order, //排位命令（desc，asc）
            searchWord: $("#searchWord").val()
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
          console.log(data, text);
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
            field: "student_id",
            title: "学生编号",
            sortable: true,
            searchable: false
          },
          {
            field: "student_name",
            title: "学生姓名",
            searchable: true
          },
          {
            field: "student_pwd",
            title: "密码",
            searchable: false
          },
          {
            field: "student_class_id",
            title: "所属班级",
            sortable: true,
            searchable: false
          },
          {
            field: "operate",
            title: "操作",
            width: 150,
            align: "center",
            vertical: "middle",
            formatter: self.operateFormatter,
            events: {
              "click .edit": function(e, value, row, index) {
                self.studentEditId = row.student_id;
                self.studentEditName = row.student_name;
                self.studentEditPwd = row.student_pwd;
                self.classEditId = row.student_class_id;
                self.oldClassId = row.student_class_id;
              },
              "click .delete": function(e, value, row, index) {
                axios
                  .post("/deleteStudent", {
                    params: {
                      student_id: row.student_id,
                      student_class_id: row.student_class_id
                    }
                  })
                  .then(function(response) {
                    self.seachAction();
                  })
                  .catch(function(err) {
                    console.lgo(err);
                  });
              }
            }
          }
        ],
        onLoadSuccess: function() {
          console.log("cheng");
        },
        onLoadError: function() {
          console.log("数据加载失败！");
        }
        // onDblClickRow: function(row, $element) {
        //   var id = row.ID;
        //   EditViewById(id, "view");
        // }
      });
    }
  },
  mounted() {
    this.InitMainTable();
    //初始化bootstrap-table的内容

    this.getAllClass();
  }
};
</script >

<style scoped>
.student-msg {
  width: 100%;
  padding-top: 20px;
}
.student-header {
  width: 100%;
  margin-bottom: 50px;
  position: relative;
}
.student-add {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
