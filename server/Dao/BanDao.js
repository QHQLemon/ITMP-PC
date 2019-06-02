let DBUtil = require('./dbutil');

function getAllBan(success){
  let connection = DBUtil.createConnection();
  let sql = "select * from ban;";

  connection.connect();
  connection.query(sql, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end()
}

// getAllBan(res => {
//   console.log(res)
// })
function insertBan(ban_word, success){
  let connection = DBUtil.createConnection();
  let params = [ban_word]
  let sql = "insert into ban (ban_word) value(?);";

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end()
}

// insertBan('马克思主义', res => {
//   console.log(res)
// })

function deleteBan(ban_id, success){
  let connection = DBUtil.createConnection();
  let params = [ban_id]
  let sql = "delete from ban where ban_id = ?;";

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end()
}



module.exports = {
  getAllBan,
  insertBan,
  deleteBan
}
