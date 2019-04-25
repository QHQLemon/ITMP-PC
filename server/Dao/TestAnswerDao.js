let DBUtil = require('./dbutil');

function getCountOfTestAnswer(chapter_id, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';

  if (chapter_id) {
    sql = 'select count(*) as total from test_answer where chapter_id = ?';
    params = [chapter_id]
  } else {
    sql = 'select count(*) as total from test_answer'
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

function getTestAnswerByPage(page, pageSize, chapter_id, success) {
  getCountOfTestAnswer(chapter_id, function (res) {
    let total;
    total = res[0].total;

    let connection = DBUtil.createConnection();
    let params = [];
    let sql = '';

    if (chapter_id) {
      sql = 'select * from test_answer where chapter_id = ? limit ?, ?';;
      params = [chapter_id, (page - 1) * pageSize, pageSize];
    } else {
      sql = 'select * from test_answer  limit ?, ?'
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

// getTestAnswerByPage(1, 5, '', (res, total) => {
//   console.log(res, total)
// })




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




module.exports = {
  getTestAnswerByPage,
  getTestAnswerByChapterId

}
