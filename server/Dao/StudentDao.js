let DBUtil = require('./dbutil');
// let ClassDao = require('./ClassDao')
// console.log('dao',ClassDao)

function getStudentCount(class_id, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';
  if (class_id) {
    sql = `select count(*) as total from student where student_class_id  = ?;`;
    params = [class_id]
  } else {
    sql = `select count(*) as total from student`;
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


function queryStudentByPage(page, pageSize, searchWord, success) {
  let connection = DBUtil.createConnection();
  let params = []
  let sql = '';
  let total = 0;

  if (searchWord) {
    sql = `select * from student where student_class_id = ?  limit ?, ?;`;
     params = [searchWord, (page - 1) * pageSize, pageSize]
    getStudentCount(searchWord, function (res) {
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
    sql = `select * from student limit ?, ?;`;
    params = [(page - 1) * pageSize, pageSize]

    getStudentCount('', function (res) {
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


// queryStudentByPage(1, 5, '', (res, total) => {
//   console.log(res, total)
// })

function insertStudent(student_id, student_name, student_pwd, student_class_id, success) {
  let connection = DBUtil.createConnection();
  let params = [student_id, student_name, student_pwd, student_class_id];
  let sql = 'insert into student (student_id, student_name, student_pwd, student_class_id) values (?, ?, ?, ?);';



  connection.connect();

  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
      addClassNum(student_class_id, (res) => {
        console.log('add');
      })
    } else {
      console.log(err)
    }
  });
  connection.end();
}

function updateStudent(student_id, student_name, student_pwd, student_class_id, student_old_class_id, success) {
  let connection = DBUtil.createConnection();
  let params = [student_name, student_pwd, student_class_id, student_id];
  let sql = 'update student set student_name = ?, student_pwd = ?, student_class_id = ? where student_id = ?';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  });
  connection.end();

  if(student_class_id != student_old_class_id){
    addClassNum(student_class_id, (res) => {
      console.log('add num ' + student_class_id)
    });

    desClassNum(student_old_class_id, (res) => {
      console.log('des num ' + student_old_class_id)
    });
  }
}

function deleteStudent(student_id, student_class_id, success) {
  let connection = DBUtil.createConnection();
  let params = [student_id];
  let sql = 'delete from student where student_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
      desClassNum(student_class_id, (res) => {
          console.log('des')
      })
    } else {
      console.log(err)
    }
  });
  connection.end();
}



function deleteStudentByClassId(class_id, success) {
  let connection = DBUtil.createConnection();
  let params = [class_id];
  let sql = 'delete from student where student_class_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  });
  connection.end();
}

function updateStudentPwd(student_id, student_pwd, success) {
  let connection = DBUtil.createConnection();
  let params = [student_pwd, student_id];
  let sql = 'update student set student_pwd = ? where student_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  });
  connection.end();
}

function addClassNum (class_id, success){
  let connection = DBUtil.createConnection();
  let params = [class_id];
  let sql = 'update class set class_num = class_num + 1 where class_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end();
}

function desClassNum (class_id, success){
  let connection = DBUtil.createConnection();
  let params = [class_id];
  let sql = 'update class set class_num = class_num - 1 where class_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end();
}

module.exports = {
  insertStudent,
  updateStudent,
  updateStudentPwd,
  deleteStudent,
  deleteStudentByClassId,
  queryStudentByPage
}




// insertStudent('1511230199', 'lily', 'skdfjal', '4',(res)=>{
//   console.log(res)
// })
// insertStudent('1511230193', 'lily', 'skdfjal', '4',(res)=>{
//   console.log(res)
// })
// insertStudent('1511230192', 'lily', 'skdfjal', '5',(res)=>{
//   console.log(res)
// })
// insertStudent('1511230144', 'lily', 'skdfjal', '5',(res)=>{
//   console.log(res)
// })
// insertStudent('1511230194', 'lily', 'skdfjal', '5',(res)=>{
//   console.log(res)
// })

// updateStudent('1511230199', 'libai', 'hualahuala', '1',(res)=>{
//   console.log(res)
// })

// updateStudentPwd('1511240134', 'yuzuru123456', (res)=> {
//   console.log(res)
// })

// deleteStudent('1511230199',(res)=>{
//   console.log(res)
// })

// getAllStudent((res)=>{
//   console.log(res)
// })

// deleteStudentByClassId('4', (res)=> {
//   console.log(res)
// })
