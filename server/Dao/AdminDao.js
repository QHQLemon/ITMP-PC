let DBUtil = require('./dbutil');

function getAdminCount(success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = `select count(*) as total from admin`;

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


function getAdminByPage(page, pageSize, success) {
  let connection = DBUtil.createConnection();
  let params = [(page - 1) * pageSize, pageSize];


  let sql = `select * from admin  limit ?, ?;`;
  getAdminCount(function (res) {
    let total = res[0].total;

    console.log('count', total)

    connection.connect();
    connection.query(sql, params, function (err, result) {
      if (err == null) {
        console.log(total)
        success(result, total)
      } else {
        console.log(err)
      }
    })
    connection.end();
  })
}

function getAllAdmin(success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = 'select * from admin ;'

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      success(result)
    }
  })
  connection.end()
}

function insertAdmin(admin_id, admin_name, admin_pwd, success) {
  let connection = DBUtil.createConnection();
  let params = [admin_id, admin_name, admin_pwd];
  let sql = 'insert into admin (admin_id, admin_name, admin_pwd) value(?, ?, ?);'

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      success(result)
    }
  })
  connection.end()
}
function updateAdmin(admin_id, admin_name, admin_pwd, success) {
  let connection = DBUtil.createConnection();
  let params = [admin_name, admin_pwd, admin_id];
  let sql = 'update admin set admin_name = ?, admin_pwd = ? where admin_id = ?;'

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      success(result)
    }
  })
  connection.end()
}

function deleteAdmin(admin_id, success) {
  let connection = DBUtil.createConnection();
  let params = [admin_id];
  let sql = 'delete from admin where admin_id = ?;'

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      success(result)
    }
  })
  connection.end()
}
function getAdminById(admin_id, success) {
  let connection = DBUtil.createConnection();
  let params = [admin_id];
  let sql = 'select *  from admin where admin_id = ?;'

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      success(result)
    }
  })
  connection.end()
}


function changeAdminPwd(admin_id, admin_pwd, success) {
  let connection = DBUtil.createConnection();
  let params = [admin_pwd, admin_id];
  let sql = 'update admin set admin_pwd = ? where admin_id = ?;'

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      success(result)
    }
  })
  connection.end()
}
// changeAdminPwd('12312312', '654321', res => {
//   console.log(res)
// })
// changeStudentPwd('1511240134', '654321', res => {
//   console.log(res)
// })
function changeStudentPwd(student_id, student_pwd, success) {
  let connection = DBUtil.createConnection();
  let params = [student_pwd, student_id];
  let sql = 'update student set student_pwd = ? where student_id = ? ;'

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      success(result)
    }
  })
  connection.end()
}
function getStudentById(student_id, success) {
  let connection = DBUtil.createConnection();
  let params = [student_id];
  let sql = 'select *  from student where student_id = ? ;'

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      success(result)
    }
  })
  connection.end()
}

function changePwd(flag, user_id, oldPwd, newPwd, success) {
  if (flag == 1) {
    new Promise((resolve, reject) => {
      getStudentById(user_id, res => {
        if (res[0].student_pwd == oldPwd) {
          resolve();
        } else {
          reject()
        }
      })
    }).then(() => {
      changeStudentPwd(user_id, newPwd, res => {
        console.log('更改成功');
        success(true)
      })
    }, () => {
      console.log('密码与之前不一致')
      success(false)
    })
  } else if (flag == 2) {
    new Promise((resolve, reject) => {
      getAdminById(user_id, res => {
        if (res[0].admin_pwd == oldPwd) {
          resolve();
        } else {
          reject()
        }
      })
    }).then(() => {
      changeAdminPwd(user_id, newPwd, res => {
        console.log('更改成功');
        success(true)
      })
    }, () => {
      console.log('密码与之前不一致')
      success(false)
    })
  }
}


// changePwd(2, '12312312', '123456', '123456', re => {
//   console.log(re)
// })
module.exports = {
  getAdminByPage,
  getStudentById,
  getAllAdmin,
  insertAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminById,
  changePwd,
}
