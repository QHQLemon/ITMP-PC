let DBUtil = require('./dbutil');

function getCountOfTest(chapter_id, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';

  if (chapter_id) {
    sql = 'select count(*) as total from test where chapter_id = ?';
    params = [chapter_id]
  } else {
    sql = 'select count(*) as total from test'
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

function getTestByPage(page, pageSize, chapter_id, success) {
  getCountOfTest(chapter_id, function (res) {
    let total;
    total = res[0].total;

    let connection = DBUtil.createConnection();
    let params = [];
    let sql = '';

    if (chapter_id) {
      sql = 'select * from test where chapter_id = ? order by test_id desc limit ?, ?';;
      params = [chapter_id, (page - 1) * pageSize, pageSize];
    } else {
      sql = 'select * from test order by test_id desc limit ?, ?'
      params = [(page - 1) * pageSize, pageSize];
    }

    connection.connect();
    connection.query(sql, params, (err, result) => {
      if (err == null) {
        success(result, total)
      } else {
        console.log(err)
      }
    })
    connection.end()
  })
}


function getMaxTestId(success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = 'select max(test_id) as test_id from test';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result[0].test_id);
    } else {
      console.log(err)
    }
  })
  connection.end()
}

// function getTotalScoreByChapterId(chapter_id, success) {
//   let connection = DBUtil.createConnection();
//   let params = [chapter_id];
//   let sql = 'select sum(test_score) as total_score from test where chapter_id = ?';

//   connection.connect();
//   connection.query(sql, params, (err, result) => {
//     if (err == null) {
//       success(result[0].total_score);
//     } else {
//       console.log(err)
//     }
//   })
//   connection.end()
// }

// getMaxTestId((res) => {
//   console.log(res)
// })

// getTestByPage(1, 5, '', (res, total) => {
//   console.log(res, total)
// })

function insertTest(test_content, test_A, test_B, test_C, test_D, test_answer, chapter_id, success) {
  let connection = DBUtil.createConnection();
  let params = [test_content, test_A, test_B, test_C, test_D, test_answer, chapter_id];
  let sql = `insert into test (test_content, test_A, test_B, test_C, test_D, test_answer,  chapter_id) values (?, ?, ?, ?, ?, ?, ?);`;

  connection.connect();
  connection.query(sql, params, function (err, result) {
    if (err == null) {
      success(result);
      getMaxTestId(function (max_id) {
        updateTestAnswer(chapter_id, max_id, test_answer, function (res) {
          console.log(res)
        })
      })
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function updateTest(test_id, test_content, test_A, test_B, test_C, test_D, test_answer, chapter_id, old_chapter_id, success) {
  let connection = DBUtil.createConnection();
  let params = [test_content, test_A, test_B, test_C, test_D, test_answer, chapter_id, test_id];

  let sql = 'update test set test_content = ?, test_A = ? , test_B = ?, test_C = ?, test_D = ?, test_answer = ?, chapter_id = ? where test_id = ?;';

  connection.connect();
  connection.query(sql, params, function (err, result) {
    if (err == null) {
      success(result);
      deleteTestAnswer(old_chapter_id, test_id, res => {
        console.log(res, 'deldel');
        updateTestAnswer(chapter_id, test_id, test_answer, res => {
          console.log(res, 'upup')
        })
      })

    } else {
      console.log(err)
    }
  })
  connection.end()
}

function deleteTest(chapter_id, test_id, success) {
  let connection = DBUtil.createConnection();
  let params = [test_id];
  let sql = 'delete from test where test_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
        deleteTestAnswer(chapter_id, test_id, res => {
          console.log(res)
        })
    } else {
      console.log(err)
    }
  })
  connection.end()
}



// testAnswer
function insertTestAnswer(chapter_id, chapter_test_answer, success) {
  let connection = DBUtil.createConnection();
  let params = [chapter_id, chapter_test_answer];
  let sql = `insert into test_answer ( chapter_id, chapter_test_answer, test_total_score) values (?, ?, 10);`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result)
    } else {
      console.log(err)
    }
  })
  connection.end()
}


function updateTestAnswer(chapter_id, test_id, test_answer, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = 'update test_answer set chapter_test_answer = ?, test_total_score = (test_total_score + 10) where chapter_id = ? ;';

  getTestAnswerByChapterId(chapter_id, function (res) {
    if (res.length == 0) {
      let answerObj = {};
      answerObj[test_id] = test_answer;
      let str = JSON.stringify(answerObj);
      insertTestAnswer(chapter_id, str, function (result) {
        console.log(answerObj, str)
      });
    } else {
      let str = res[0].chapter_test_answer;
      console.log(str)
      let answerObj = JSON.parse(str);
      answerObj[test_id] = test_answer;
      str = JSON.stringify(answerObj);
      params = [str, chapter_id];

      connection.connect();
      connection.query(sql, params, (err, result) => {
        if (err == null) {
          success(result)
        } else {
          console.log(err)
        }
      })
      connection.end()
    }
  })
}



// updateTestAnswer(5, 13, "C", 5, res => {
//   console.log(res)
// })
// updateTestAnswer(5, 14, "B", 10, res => {
//   console.log(res)
// })
// updateTestAnswer(5, 15, "C", 15, res => {
//   console.log(res)
// })
// deleteTestAnswer(5, 14, 10, (res) => {
//   console.log(res)
// })

function deleteTestAnswer(chapter_id, test_id, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = 'update test_answer set chapter_test_answer = ?, test_total_score = (test_total_score - 10)  where chapter_id = ? ;';

  getTestAnswerByChapterId(chapter_id, function (res) {
    console.log(res)
    let str = res[0].chapter_test_answer;
    let answerObj = JSON.parse(str);
    // answerObj[test_id] = test_answer;
    delete answerObj[test_id];
    str = JSON.stringify(answerObj);
    params = [str, chapter_id];

    connection.connect();
    connection.query(sql, params, function (err, result) {
      if (err == null) {
        success(result)
      } else {
        console.log(err)
      }
    })
    connection.end()
  })
}

function getTestAnswerByChapterId(chapter_id, success) {
  let connection = DBUtil.createConnection();
  let params = [chapter_id];
  let sql = 'select * from test_answer where chapter_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result)
    } else {
      console.log(err)
    }
  })
  connection.end()
}





// updateTest(6, 'CC-nanan项目定义专题会参加者不包括( )',
//   '项目发起人和项目推动者',
//   '项目设计阶段和实施阶段的管理者',
//   '关键的职能经理',
//   '所有施工人员',
//   'A',
//   3,
//   6,
//   (res) => {
//     console.log(res)
//   })
// insertTest( '6666项目定义专题会参加者不包括( )',
//   '项目发起人和项目推动者',
//   '项目设计阶段和实施阶段的管理者',
//   '关键的职能经理',
//   '所有施工人员',
//   'C',
//   6,
//   (res) => {
//     console.log(res)
//   })

// deleteTest(2, 2, (res) => {
//   console.log(res)
// })

// deleteTest(4,
//   (res) => {
//     console.log(res)
//   })
function getTestByChapterId(chapter_id, success){
  let connection = DBUtil.createConnection();
  let params = [chapter_id];
  let sql = 'select * from test where chapter_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result)
    } else {
      console.log(err)
    }
  })
  connection.end()
}



// getTaskByChapterId('2', (res) => {
//   console.log(res)
// })

// getTaskScoreByChaptergetTestByChapterId('1', (res) => {
//   console.log(res)
// })


module.exports = {
  getTestByChapterId,
  getTestByPage,
  insertTest,
  updateTest,
  deleteTest
}
