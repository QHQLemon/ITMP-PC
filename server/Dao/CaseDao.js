let DBUtil = require('./dbutil.js')

function getCaseCount(case_type, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';
  if (case_type) {
    sql = `select count(*) as total from case_info where case_type = ?;`;
    params = [case_type]
  } else {
    sql = `select count(*) as total from case_info`;
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


function getCaseByPage(page, pageSize, case_type, success) {
  let connection = DBUtil.createConnection();
  let params = [(page - 1) * pageSize, pageSize]
  let sql = '';
  let total = 0;

  if (case_type) {
    sql = `select * from case_info where case_type = ?  limit ?, ?;`;
    params = [case_type, (page - 1) * pageSize, pageSize]
    getCaseCount(case_type, function (res) {
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
    sql = `select * from case_info  limit ?, ?;`;
    getCaseCount('', function (res) {
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

// getCaseByPage(1, 5, '1', (res, total) => {
//   console.log(res, total)
// })

function getCaseById(case_id, success) {
  let connection = DBUtil.createConnection();
  let params = [case_id];
  let sql = `select * from case_info where case_id = ?;`;

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

function getAllCase(case_type, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = `select * from case_info ;`;
  if(case_type){
    sql = `select * from case_info where case_type = ?;`;
    params = [case_type]
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

// getAllCase( (res) => {
//   console.log(res)
// })

function insertCase(case_type, case_title, case_content, case_answer, case_ctime, case_media_path, case_ppt, media_type, case_author, success) {
  let connection = DBUtil.createConnection();
  let params = [case_type, case_title, case_content, case_answer, case_ctime, case_media_path, case_ppt, media_type, case_author];
  let sql = `insert into case_info (case_type, case_title, case_content, case_answer, case_ctime, case_media_path, case_ppt, media_type, case_enshrine_num, case_author) values(?, ?, ?, ?, ?, ?,?, ?, 0, ?);`;

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

// insertCase('1', 'aaadddd', 'asdf', 'asdf', new Date() , 'fasdfa', 'asdfasdf', '1', '66', (res) => {
//   console.log(res)
// })


function updateCase(case_id, case_type, case_title, case_content, case_answer, case_media_path, case_ppt, media_type, case_author, success) {
  let connection = DBUtil.createConnection();
  let params = [case_type, case_title, case_content, case_answer, case_media_path, case_ppt, media_type, case_author, case_id];
  let sql = `update case_info set case_type = ?, case_title = ? , case_content = ?, case_answer = ?  , case_media_path = ?, case_ppt = ?, media_type = ?,case_author = ? where case_id = ?;`;

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

// updateCase('3', '5', 'dddd', 'asdf', 'asdf',  'fasdfa', 'asdfasdf', '1', '86', (res) => {
//   console.log(res)
// })

function deleteCase(case_id, success) {
  let connection = DBUtil.createConnection();
  let params = [case_id];
  let sql = `delete from  case_info where case_id = ?;`;

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

// deleteCase('2', (res) => {
//   console.log(res)
// })


function addEnshrineNum(case_id, success) {
  let connection = DBUtil.createConnection();
  let params = [case_id];
  let sql = `update case_info set case_enshrine_num = (case_enshrine_num + 1) where case_id = ?`;

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

// addEnshrineNum('3', (res) => {
//   console.log(res)
// })

function minusEnshrineNum(case_id, success) {
  let connection = DBUtil.createConnection();
  let params = [case_id];
  let sql = `update case_info set case_enshrine_num = (case_enshrine_num - 1) where case_id = ?`;

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



// minusEnshrineNum('3', (res) => {
//   console.log(res)
// })

function addStudentEnshrine(user_id, case_id, success) {
  let connection = DBUtil.createConnection();
  let params = [user_id, case_id];
  let sql = `insert into case_enshrine (user_id, case_id) values (?, ?)`;

  addEnshrineNum(case_id, function (res) {
    connection.connect();
    connection.query(sql, params, (err, result) => {
      if (err == null) {
        success(result);
      } else {
        console.log(err)
      }
    })
    connection.end()
  })
}

// addStudentEnshrine('1511240134', '3', (res) => {
//   console.log(res)
// })

function minusStudentEnshrine(user_id, case_id, success) {
  let connection = DBUtil.createConnection();
  let params = [user_id, case_id];
  let sql = `delete from  case_enshrine  where user_id = ? and case_id = ?;`;

  minusEnshrineNum(case_id, function (res) {
    connection.connect();
    connection.query(sql, params, (err, result) => {
      if (err == null) {
        success(result);
      } else {
        console.log(err)
      }
    })
    connection.end()
  })
}

function getStudentAndEnshrine(user_id, case_id,  success){
  let connection = DBUtil.createConnection();
  let params = [user_id, case_id];
  let sql = `select * from  case_enshrine  where user_id = ? and case_id =  ?;`;

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

function getEnshrineByUserId(user_id, success){
  let connection = DBUtil.createConnection();
  let params = [user_id];
  let sql = `select * from case_enshrine where user_id = ?`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      let arr = []
      for(let i = 0; i < result.length; i++){
        getCaseById(result[i].case_id, res => {
          arr.push(res[0]);
        })
      }
      setTimeout(function() {
        success(arr)
      }, 500);
    } else {
      console.log(err)
    }
  })
  connection.end()
}

// getEnshrineByUserId('1511240134', res => {
//   console.log(res);
// })

module.exports = {
  getCaseByPage,
  getAllCase,
  getCaseById,
  insertCase,
  updateCase,
  deleteCase,
  addStudentEnshrine,
  minusStudentEnshrine,
  getStudentAndEnshrine,
  getEnshrineByUserId
}
