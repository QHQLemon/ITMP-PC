<template>
  <div class="admin-msg">
    <div class="admin-header clearfix">
      <!-- <div class="col-lg-5">
        <div class="input-group">
          <input type="text" id="searchWord" class="form-control" placeholder="关键字...">
          <span class="input-group-btn">
            <button class="btn btn-default my-btn" type="button" @click="seachAction">搜索</button>
          </span>
        </div>
      </div>-->
      <div class="admin-add">
        <button class="btn my-btn" data-toggle="modal" data-target="#addAdminModal">
          增加数据
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>
    <!-- <hr class="featurette-divider"> -->
    <div class="admin-data">
      <table id="table" class="table" data-side-pagination="client"></table>
    </div>

    <!-- //添加框 -->
    <div
      class="modal fade"
      id="addAdminModal"
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
                <label for="adminId">管理员编号</label>
                <input type="text" class="form-control" id="adminId" v-model="adminId">
              </div>
              <div class="form-group">
                <label for="adminName">管理员姓名</label>
                <input type="text" class="form-control" id="adminName" v-model="adminName">
              </div>
              <div class="form-group">
                <label for="adminPwd">管理员密码</label>
                <input type="text" class="form-control" id="adminPwd" v-model="adminPwd">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="insertAdmin"
              data-dismiss="modal"
            >保存</button>
          </div>
        </div>
      </div>
    </div>

    <!-- //修改框 -->
    <div
      class="modal fade"
      id="updateAdminModal"
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
                <label for="adminName">管理员姓名</label>
                <input type="text" class="form-control" id="adminName" v-model="adminEditName">
              </div>
              <div class="form-group">
                <label for="adminPwd">管理员密码</label>
                <input type="text" class="form-control" id="adminPwd" v-model="adminEditPwd">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateAdmin"
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
      adminId: "",
      adminName: "",
      adminPwd: "",
      adminEditName: "",
      adminEditPwd: "",
      adminEditId: ""
    };
  },
  methods: {
    insertAdmin() {
      let self = this;
      axios
        .post("/insertAdmin", {
          params: {
            admin_id: self.adminId,
            admin_name: self.adminName,
            admin_pwd: self.adminPwd
          }
        })
        .then(function(response) {
          self.seachAction();
          (self.adminId = ""), (self.adminName = ""), (self.adminPwd = "");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    updateAdmin() {
      let self = this;
      console.log(self.adminEditId, self.adminEditName, self.adminEditPwd);
      axios
        .post("/updateAdmin", {
          params: {
            admin_id: self.adminEditId,
            admin_name: self.adminEditName,
            admin_pwd: self.adminEditPwd
          }
        })
        .then(function(response) {
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
      return `<button class="btn btn-default edit" data-toggle="modal" data-target="#updateAdminModal" ><span class="glyphicon glyphicon-edit"></span></button>
        <button class="btn btn-default delete"><span  class="glyphicon glyphicon-trash"></span></button>`;
    },
    InitMainTable() {
      let $table;
      let self = this;

      //记录页面bootstrap-table全局变量$table，方便应用
      $table = $("#table").bootstrapTable({
        url: "/getAdminByPage", //请求后台的URL（*）
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
        uniqueId: "admin_id", //每一行的唯一标识，一般为主键列
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
            field: "admin_id",
            title: "管理员编号",
            sortable: true,
            searchable: false
          },
          {
            field: "admin_name",
            title: "管理员姓名",
            searchable: true
          },
          {
            field: "admin_pwd",
            title: "密码",
            formatter: function(value, row, index) {
              return  '*'.repeat(value.length)
            }
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
                console.log(row);
                self.adminEditId = row.admin_id;
                self.adminEditName = row.admin_name;
                self.adminEditPwd = row.admin_pwd;
              },
              "click .delete": function(e, value, row, index) {
                axios
                  .post("/deleteAdmin", {
                    params: {
                      admin_id: row.admin_id
                    }
                  })
                  .then(function(response) {
                    self.seachAction();
                  })
                  .catch(function(err) {
                    console.log(err);
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
  }
};
</script >

<style scoped>
.admin-msg {
  width: 100%;
  padding-top: 20px;
}
.admin-header {
  width: 100%;
  margin-bottom: 50px;
  position: relative;
}
.admin-add {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
