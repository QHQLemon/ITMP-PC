let DBUtil = require('./dbutil');

//根据主题类型按所传入排列(时间/浏览/回复)要求返回主题
function queryTopicByTypeAndOrder(topic_type, order_type, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = ''
  if (topic_type == '0') {
    sql = `select * from topic order by ` + order_type + ` desc ;`;
  } else {
    sql = `select * from topic where topic_type = ? order by ` + order_type + ` desc;`
    params = [topic_type]
  }

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end();
}

//增加新主题

function insertTopic(topic_type, topic_title, topic_content, topic_ctime,
  user_id, user_name, success) {
  let connection = DBUtil.createConnection();
  let params = [topic_type, topic_title, topic_content, topic_ctime, user_id, user_name];
  let sql = `insert into topic (topic_type, topic_title, topic_content, topic_ctime,user_id, user_name, topic_look, topic_reply, topic_like)
            values (?, ?, ?, ?, ?, ?, 0, 0, 0);`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end()
}



// 增加浏览数/点赞数/回复数
function addTopicLookOrLikeOrReply(topic_id, add_type, success) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `update topic set ` + add_type + ` = ` + add_type + ` + 1 where topic_id = ?;`

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

// 修改主题
function updateTopic(topic_id, topic_title, topic_content, success) {
  let connection = DBUtil.createConnection();
  let params = [topic_title, topic_content, topic_id];
  let sql = `update topic set topic_title = ? , topic_content = ? where topic_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end()
}

// 删除主题

function deleteTopicById(topic_id, success) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `delete from topic where topic_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end()
  deleteReplyByTopicId(topic_id)
}

function deleteReplyByTopicId(topic_id) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `select * from reply where topic_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      for (var i = 0; i < result.length; i++) {
        console.log(result[i].reply_id)
        deleteReplyById(result[i].reply_id, res => {})
        sql = `select * from reply where reply_to_id = ` + result[i].reply_id;
        connection.query(sql, [], function (err, res) {
          if (res.length > 0) {
            res.forEach((ele, index) => {

              console.log('---fasdfasd----', ele.reply_id)
              deleteReplyById(ele.reply_id, res => {})
            })
          }
        })
      }
    } else {
      console.log(err)
    }
  })

}

// deleteReplyByTopicId(2);

// 删除回复
function deleteReplyById(reply_id, success) {
  let connection = DBUtil.createConnection();
  let params = [reply_id];
  let sql = `delete from reply where reply_id = ?;`;
  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end()

}


// 搜索主题

function queryTopicByTitle(topic_title, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = `select  * from topic where topic_title like '%` + topic_title + `%';`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end()
}

//按id查询主题
function queryTopicById(topic_id, success) {
  let connection = DBUtil.createConnection();
  let params = [topic_id];
  let sql = `select  * from topic where topic_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end()
}

//按id查询主题
function getTopicByUserId(user_id, success) {
  let connection = DBUtil.createConnection();
  let params = [user_id];
  let sql = `select  * from topic where user_id = ?;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err);
    }
  })
  connection.end()
}



// queryTopicByTitle('世锦赛', (result) => {
//     console.log(result)
//   })
// queryAllTopic('', 'topic_look', (result) => {
//   console.log(result)
// })
// addTopicLookOrLikeOrReply('3', 'topic_look', (result) => {
//   console.log(result)
// })
// updateTopic(4, 'hahahah', 'lemon-nana', (result) => {
//   console.log(result)
// })
// deleteTopicById(6, (result) => {
//   console.log(result)
// })

module.exports = {
  queryTopicByTypeAndOrder,
  insertTopic,
  addTopicLookOrLikeOrReply,
  updateTopic,
  deleteTopicById,
  queryTopicByTitle,
  queryTopicById,
  getTopicByUserId
}
