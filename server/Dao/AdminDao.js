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


  let  sql = `select * from admin  limit ?, ?;`;
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

function getStudentById(student_id,  success) {
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



module.exports = {
  getAdminByPage,
  getStudentById,
  getAllAdmin,
  insertAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminById
}
