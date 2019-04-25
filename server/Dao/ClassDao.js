let DBUtil = require('./dbutil');
let StudentDao = require('./StudentDao')

function getClassCount(class_name, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';
  if (class_name) {
    sql = `select count(*) as total from class where class_name like '%` + class_name + `%';`;
  } else {
    sql = `select count(*) as total from class`;
  }

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}


function queryClassByPage(page, pageSize, searchWord, success) {
  let connection = DBUtil.createConnection();
  let params = [(page - 1) * pageSize, pageSize]
  let sql = '';
  let total = 0;

  if (searchWord) {
    sql = `select * from class where class_name like '%` + searchWord + `%' order by class_id desc  limit ?, ?;`;
    getClassCount(searchWord, function (res) {
      total = res[0].total;
      connection.connect();
      connection.query(sql, params, (err, result) => {
        if (err == null) {
          success(result, total)
        } else {
          console.log(err)
        }
      })
      connection.end();
    })

  } else {
    sql = `select * from class order by class_id desc  limit ?, ?;`;
    getClassCount('', function (res) {
      total = res[0].total;

      connection.connect();
      connection.query(sql, params, (err, result) => {
        if (err == null) {
          success(result, total)
        } else {
          console.log(err)
        }
      })
      connection.end();
    })
  }
}

// queryClassByPage(1, 5, '', (res, total) => {
//   console.log(res, total)
// })


function insertClass(class_name, success) {
  let connection = DBUtil.createConnection();
  let params = [class_name];
  let sql = `insert into class (class_name, class_num) values (? , 0)`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function updateClass(class_id, class_name, success) {
  let connection = DBUtil.createConnection();
  let params = [class_name, class_id];
  let sql = `update class set class_name = ? where class_id = ?`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function deleteClass(class_id, success) {
  let connection = DBUtil.createConnection();
  let params = [class_id];
  let sql = `delete from class where class_id = ?`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
      StudentDao.deleteStudentByClassId(class_id, (res) => {
        console.log('delete class and student')
      })
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function getAllClass (success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = `select * from class`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}


module.exports = {
  getAllClass,
  deleteClass,
  updateClass,
  insertClass,
  queryClassByPage,
}
