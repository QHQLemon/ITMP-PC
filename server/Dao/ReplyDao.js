let DBUtil = require('./dbutil');
let util = require('../util/util')

// 根据主题查询回复
function getReplyByTopicId(topic_id, success) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `select * from reply where topic_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      for (var i = 0; i < result.length; i++) {
        sql = `select * from reply where reply_to_id = ` + result[i].reply_id;
        (function(i){
          connection.query(sql, [], function (err, res) {
            console.log(res, i)
            if (res.length > 0) {
              result[i]['children'] = res;
              console.log('item', res)
            }
          })
        })(i)
      }

      setTimeout(function () {
        success(result);
        console.log(result)
      }, 1000)

  connection.end()
    } else {
      console.log(err)
    }
  })
}

// 根据id查询回复
function getReplyByReplyToId(reply_id, success) {
  let connection = DBUtil.createConnection();
  let params = [reply_id];
  let sql = `select * from reply where reply_to_id = ?;`;

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


// 插入回复
function insertReply(topic_id, reply_to_id, reply_content, from_id, from_name, reply_time, success) {
  let connection = DBUtil.createConnection();
  console.log(reply_to_id)
  let params = [topic_id, reply_to_id, reply_content, from_id, from_name, reply_time];
  let sql = `insert into reply ( topic_id, reply_to_id, reply_content, from_id, from_name, reply_time)
  values (?, ?, ?, ?, ?, ?);`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      addTopicReply(topic_id, res=> {});
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end();
}

//修改回复
function updateReply(reply_id, reply_content, success) {
  let connection = DBUtil.createConnection();
  let params = [reply_content, reply_id,];
  let sql = `update reply set reply_content = ? where reply_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end();
}


// 删除回复
function deleteReplyById(topic_id, reply_id, success) {
  let connection = DBUtil.createConnection();
  let params = [reply_id];
  let sql = `delete from reply where reply_id = ?;`;
  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      if(topic_id){
        decTopicReply(topic_id, res=> {})
        deleteReplyByReplyToId(reply_id, res=> {});
      }
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end()
}

function deleteReplyByReplyToId(reply_to_id, success) {
  let connection = DBUtil.createConnection();
  let params = [reply_to_id];
  let sql = `delete from reply where reply_to_id = ?;`;
  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
      // console.log(result)
    } else {
      console.log(err);
    }
  })
  connection.end()
}

// deleteReplyByReplyToId(20)


function addTopicReply(topic_id,  success) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `update topic set topic_reply = (topic_reply  + 1) where topic_id = ?;`

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(err)
    } else {
      console.log(err)
    }
  })
  connection.end()
}
function decTopicReply(topic_id,  success) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `update topic set topic_reply = (topic_reply  - 1) where topic_id = ?;`

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(err)
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function insertTopicLike(user_id, topic_id, success){
  let connection = DBUtil.createConnection();
  let params = [user_id, topic_id];
  let sql  = `insert into topic_like (user_id, topic_id) value (?, ?);`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      addTopicLike(topic_id, res => {});
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function deleteTopicLike(user_id, topic_id, success){
  let connection = DBUtil.createConnection();
  let params = [user_id, topic_id];
  let sql  = `delete from topic_like where user_id = ? and topic_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      decTopicLike(topic_id, res => {});
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function getTopicLike(user_id, topic_id, success){
  let connection = DBUtil.createConnection();
  let params = [user_id, topic_id];
  let sql  = `select *  from topic_like where user_id = ? and topic_id = ?;`;

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

function addTopicLike(topic_id,  success) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `update topic set topic_like = (topic_like  + 1) where topic_id = ?;`

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(err)
    } else {
      console.log(err)
    }
  })
  connection.end()
}
function decTopicLike(topic_id,  success) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `update topic set topic_like = (topic_like  - 1) where topic_id = ?;`

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(err)
    } else {
      console.log(err)
    }
  })
  connection.end()
}

// 根用户id查询回复
function getReplyByUserId(user_id, success) {
  let connection = DBUtil.createConnection();
  let params = [user_id];
  let sql = `select * from reply where from_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      for(let i = 0; i< result.length; i++){
        if(!result[i].topic_id){
          getReplyByReplyId(result[i].reply_to_id, res => {
            result[i].topic_id = res;
          })
        }
      }
      setTimeout(function(){
        success(result)
      }, 500)
    } else {
      console.log(err)
    }
  })
  connection.end()
}

// getReplyByUserId('1511240134', res => {
//   console.log(res)
// })

// 根据id查询回复
function getReplyByReplyId(reply_id, success) {
  console.log(reply_id)
  let connection = DBUtil.createConnection();
  let params = [reply_id];
  let sql = `select * from reply where reply_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      console.log(result[0])
      success(result[0].topic_id)
    } else {
      console.log(err)
    }
  })
  connection.end()
}

// getReplyByReplyId(12)

// insertTopicLike('1511240134', '1', res => console.log(res))
// deleteTopicLike(1511240134, 1, res => console.log(res))

module.exports = {
  getReplyByTopicId,
  insertReply,
  updateReply,
  deleteReplyById,
  insertTopicLike,
  deleteTopicLike,
  getTopicLike,
  getReplyByUserId
}
