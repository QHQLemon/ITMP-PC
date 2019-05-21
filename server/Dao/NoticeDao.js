let DBUtil = require ('./dbutil.js');


function queryAllNotice (word, success) {
  let connection = DBUtil.createConnection();

  let sql = `select * from notice where notice_content like  '%` + word + `%' order by notice_utime desc;`;

  connection.connect();
  connection.query(sql , (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end();
}
// queryAllNotice('', res => {
//   console.log(res)
// })

// function queryAllNotice (page, pageSize, sortOrder,searchWord, success) {
//   let connection = DBUtil.createConnection();
//   let params = [(page-1) * pageSize, pageSize]
//   let sql = '';
//   if(searchWord){
//     sql = `select * from notice where notice_title like '%` + searchWord + `%' order by notice_utime ` + sortOrder +` limit ?, ?;`;
//   }else{
//     sql = `select * from notice order by notice_utime ` + sortOrder +` limit ?, ?;`;
//   }


//   connection.connect();
//   connection.query(sql ,params, (err, result) => {
//     if(err == null){
//       success(result)
//     }else{
//       console.log(err)
//     }
//   })
//   connection.end();
// }

// queryAllNotice(1,10, 'desc', (result) => {
//   console.log(result)
// })

function queryNoticeById (notice_id, success) {
  let connection = DBUtil.createConnection();

  let sql = 'select * from notice where notice_id = ?;';

  connection.connect();
  connection.query(sql , notice_id, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end();
}


function insertNotice(notice_title, notice_content, noitce_ctime, notice_utime, success){
  let connection = DBUtil.createConnection();
  let sql = 'insert into notice ( notice_title, notice_content, notice_ctime, notice_utime) value(?, ?, ?, ?);';
  let params = [notice_title, notice_content, noitce_ctime, notice_utime];

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result);
    }else{
      console.log(err)
    }
  })
  connection.end();
}

function deleteNotice(notice_id, success){
  let connection = DBUtil.createConnection();
  let sql = 'delete from notice where notice_id = ?;';
  let params = [notice_id];

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result);
    }else{
      console.log(err)
    }
  })
  connection.end();
}

function updateNotice(notice_id, notice_title, notice_content, notice_utime, success) {
  let connection = DBUtil.createConnection();
  let sql = `update notice set notice_title = ?, notice_content = ?,notice_utime = ? where notice_id = ?;`;
  let params = [notice_title, notice_content, notice_utime, notice_id];

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null) {
      success(result);
    }else{
      console.log(err)
    }
  })
  connection.end();
}


module.exports = {
  queryAllNotice,
  queryNoticeById,
  insertNotice,
  deleteNotice,
  updateNotice
}



