<template>
  <div class="class-msg">
    <div class="class-header clearfix">
      <div class="col-lg-5 input-group">
        <input type="text" id="searchWord" class="form-control" placeholder="关键字...">
        <span class="input-group-btn">
          <button class="btn btn-default my-btn" type="button" @click="seachAction">搜索</button>
        </span>
      </div>
      <div class="class-add">
        <button class="btn my-btn" data-toggle="modal" data-target="#myModal">
          增加数据
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </div>
    </div>
    <!-- <hr class="featurette-divider"> -->
    <div class="class-data">
      <table id="table" class="table"></table>
    </div>

    <!-- //添加框 -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
                <label for="calss-name">班级名称</label>
                <input type="text" class="form-control" id="calss-name" v-model="className">
              </div>
              <!-- <div class="form-group">
                <label for="calss-num">班级人数</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="classNum"
                  id="calss-num"
                >
              </div>-->
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="insertClass"
              data-dismiss="modal"
            >保存</button>
          </div>
        </div>
      </div>
    </div>

    <!-- //修改框 -->
    <div
      class="modal fade"
      id="editModal"
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
                <label for="calss-name">班级名称</label>
                <input type="text" class="form-control" id="calss-name" v-model="editClassName">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateClass"
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
      className: "",
      classId: "",
      editClassName: ""
    };
  },
  mounted() {
    this.InitMainTable();
  },
  methods: {
    insertClass() {
      // console.log(this.className, this.classNum)
      let self = this;
      axios
        .post("/insertClass", {
          params: {
            class_name: self.className
          }
        })
        .then(function(response) {
          self.seachAction();
          self.className = "";
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updateClass() {
      let self = this;
      axios
        .post("/updateClass", {
          params: {
            class_name: self.editClassName,
            class_id: self.classId
          }
        })
        .then(function(response) {
          console.log(response);
          self.seachAction();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    operateFormatter() {
      return `<button class="btn btn-default edit" data-toggle="modal" data-target="#editModal"><span class="glyphicon glyphicon-edit"></span></button>
        <button class="btn btn-default delete"><span @click="deleteTopic" class="glyphicon glyphicon-trash"></span></button>`;
    },
    seachAction() {
      $("#table").bootstrapTable("refresh");
    },
    InitMainTable() {
      let $table;
      let self = this;
      //记录页面bootstrap-table全局变量$table，方便应用
      $table = $("#table").bootstrapTable({
        url: "/queryClassByPage", //请求后台的URL（*）
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
        //得到查询的参数
        queryParams: function(params) {
          //这里的键的名字和控制器的变量名必须一致，这边改动，控制器也需要改成一样的
          var temp = {
            rows: params.limit, //页面大小
            page: params.offset / params.limit + 1, //页码
            sort: "class_id", //排序列名
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
            field: "class_id",
            title: "班级编号",
            sortable: true,
            searchable: false,
            visible: false
          },
          {
            field: "class_name",
            title: "班级名称",
            searchable: true
          },
          {
            field: "class_num",
            title: "班级人数",
            searchable: false
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
                self.editClassName = row.class_name;
                self.classId = row.class_id;
              },
              "click .delete": function(e, value, row, index) {
                axios
                  .post("/deleteClass", {
                    params: { class_id: row.class_id }
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
  }
};
</script >

<style scoped>
.class-msg {
  padding: 20px;
}
.class-header {
  margin-bottom: 30px;
  position: relative;
}
.class-add {
  position: absolute;
  right: 0;
  top: 0;
}
.modal-body {
  min-height: 200px;
  padding: 20px;
}
</style>
