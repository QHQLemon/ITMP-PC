let DBUtil = require('./dbutil');

function getCountOfTaskScore(student_id, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';

  if (student_id) {
    sql = 'select count(*) as total from task_score where student_id = ?';
    params = [student_id]
  } else {
    sql = 'select count(*) as total from task_score'
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





function getTaskScoreByPage(page, pageSize, student_id, success) {
  getCountOfTaskScore(student_id, function (res) {
    let total;
    total = res[0].total;

    let connection = DBUtil.createConnection();
    let params = [];
    let sql = '';

    if (student_id) {
      sql = 'select * from task_score where student_id = ? limit ?, ?';;
      params = [student_id, (page - 1) * pageSize, pageSize];
    } else {
      sql = 'select * from task_score  limit ?, ?'
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

// getTaskScoreByPage(1, 5, '', (res, total) => {
//   console.log(res, total)
// })

function insertTaskScore (task_id, student_id, student_answer, success){
  let connection = DBUtil.createConnection();
  let params = [task_id, student_id, student_answer];
  let sql = `insert into task_score (task_id, student_id, student_answer, task_score_state)
   values (?, ?, ?, 0);`;

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
// insertTaskScore('2', '1511240134', '不知道', (res) => {
//   console.log(res)
// })

function updateTaskScore (task_id, student_id, student_task_score, success){
  let connection = DBUtil.createConnection();
  let params = [student_task_score, task_id, student_id];
  let sql = 'update task_score set student_task_score = ?, task_score_state = 1 where task_id = ? and student_id = ?;';

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

// updateTaskScore('2', '1511240134', '18', (res) => {
//   console.log(res)
// })


function deleteTaskScore (task_id, student_id,  success){
  let connection = DBUtil.createConnection();
  let params = [task_id, student_id];
  let sql = 'delete from task_score where task_id = ? and student_id = ?;';

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

// deleteTaskScore('2', '1511240134', (res) => {
//   console.log(res)
// })

// function getTaskScoreByState(success){
//   let connection = DBUtil.createConnection();
//   let params = [];
//   let sql = 'select * from task_score where task_score_state = 0 limit 1';

//   connection.connect();
//   connection.query(sql, params, (err, result) => {
//     if (err == null) {
//       success(result)
//     } else {
//       console.log(err)
//     }
//   })
//   connection.end()
// }

// getTaskScoreByState((res) => {
//   console.log(res)
// })
function getTaskScoreByTaskId(task_id, success){
  let connection = DBUtil.createConnection();
  let params = [task_id];
  let sql = 'select * from task_score where task_id = ? and task_score_state = 0;';

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

function getTaskScoreByTaskIdAndStudentId(task_id, student_id, success){
  let connection = DBUtil.createConnection();
  let params = [task_id, student_id];
  let sql = 'select * from task_score where task_id = ? and student_id = ?;';

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

module.exports ={
  insertTaskScore,
  getTaskScoreByPage,
  updateTaskScore,
  deleteTaskScore,
  getTaskScoreByTaskId,
  getTaskScoreByTaskIdAndStudentId
}
