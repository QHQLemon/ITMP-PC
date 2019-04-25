let DBUtil = require('./dbutil');

function getCountOfTestScore(student_id, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';

  if (student_id) {
    sql = 'select count(*) as total from test_score where student_id = ?';
    params = [student_id]
  } else {
    sql = 'select count(*) as total from test_score'
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





function getTestScoreByPage(page, pageSize, student_id, success) {
  getCountOfTestScore(student_id, function (res) {
    let total;
    total = res[0].total;

    let connection = DBUtil.createConnection();
    let params = [];
    let sql = '';

    if (student_id) {
      sql = 'select * from test_score where student_id = ? limit ?, ?';;
      params = [student_id, (page - 1) * pageSize, pageSize];
    } else {
      sql = 'select * from test_score  limit ?, ?'
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



function insertTestScore(chapter_id, student_id, student_test_answer,student_test_score, success){
  let connection =  DBUtil.createConnection();
  let params = [chapter_id, student_id, student_test_answer,student_test_score];
  let sql = `insert into test_score (chapter_id, student_id, student_test_answer, student_test_score)
              values (?, ?, ?, ?);`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result);
    }else{
      console.log(err)
    }
  });
  connection.end();
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

function checkAndInsertTestAnswer(chapter_id, student_id, student_test_answer, success){
 test_answer = JSON.parse(student_test_answer)
  getTestAnswerByChapterId(chapter_id, function(res){
    let test_score = 0;
    let answerObj = JSON.parse(res[0].chapter_test_answer);
    for (const key in answerObj) {
      console.log(answerObj[key],test_answer[key])
      if(answerObj[key] == test_answer[key]){
        test_score += 10;6
      }
    }
    // console.log(chapter_id, student_id, student_test_answer, test_score)
    insertTestScore(chapter_id, student_id, student_test_answer, test_score, success)
  })
}

function getTestScoreByChapterIdAndStudentId(chapter_id, student_id, success){
  let connection = DBUtil.createConnection();
  let params = [chapter_id, student_id];
  let sql = 'select * from test_score where chapter_id = ? and student_id = ?;';

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

function deleteTestScoreByChapterIdAndStudentId(chapter_id, student_id, success){
  let connection = DBUtil.createConnection();
  let params = [chapter_id, student_id];
  let sql = 'delete from test_score where chapter_id = ? and student_id = ?;';

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

module.exports = {
  getTestScoreByPage,
  checkAndInsertTestAnswer,
  getTestScoreByChapterIdAndStudentId,
  deleteTestScoreByChapterIdAndStudentId
}


