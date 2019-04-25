let DBUtil = require('./dbutil');

function getCountOfTask(chapter_id, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';

  if (chapter_id) {
    sql = 'select count(*) as total from task where chapter_id = ?';
    params = [chapter_id]
  } else {
    sql = 'select count(*) as total from task'
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

function getTaskByPage(page, pageSize, chapter_id, success) {
  getCountOfTask(chapter_id, function (res) {
    let total;
    total = res[0].total;

    let connection = DBUtil.createConnection();
    let params = [];
    let sql = '';

    if (chapter_id) {
      sql = 'select * from task where chapter_id = ? order by task_id desc limit ?, ?';;
      params = [chapter_id, (page - 1) * pageSize, pageSize];
    } else {
      sql = 'select * from task order by task_id desc limit ?, ?'
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

// getTaskByPage(1, 5, '', (res, total) => {
//   console.log(res, total)
// })

function insertTask (task_content, task_score, chapter_id, success){
  let connection = DBUtil.createConnection();
  let params = [task_content, task_score, chapter_id];
  let sql = 'insert into task (task_content, task_score, chapter_id) values (?, ?, ?);';

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

function updateTask (task_id, task_content, task_score, chapter_id, success){
  let connection = DBUtil.createConnection();
  let params = [task_content, task_score, chapter_id, task_id];
  let sql = 'update task set task_content = ?, task_score = ?, chapter_id = ? where task_id = ?;';

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
      console.log(params)
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function deleteTask (task_id, success){
  let connection = DBUtil.createConnection();
  let params = [task_id];
  let sql = 'delete from task where task_id = ?;';

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

function getTaskByTaskId(task_id, success){
  let connection = DBUtil.createConnection();
  let params = [task_id];
  let sql = 'select * from task where task_id = ?;';

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

function getTaskByChapterId(chapter_id, success){
  let connection = DBUtil.createConnection();
  let params = [chapter_id];
  let sql = 'select * from task where chapter_id = ?;';

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

// getTaskScoreByTaskId('1', (res) => {
//   console.log(res)
// })


module.exports ={
  getTaskByChapterId,
  getTaskByPage,
  insertTask,
  updateTask,
  deleteTask
}
