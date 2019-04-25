let TaskScoreDao = require('../Dao/TaskScoreDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getTaskScoreByPage(request, response){
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  TaskScoreDao.getTaskScoreByPage(urlData.page, parseInt(urlData.rows), urlData.student_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getTaskScoreByPage', getTaskScoreByPage);

function insertTaskScore(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskScoreDao.insertTaskScore(postData.task_id, postData.student_id, util.dealHTML(postData.student_answer), (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '增加数据成功', res));
    response.end()
  })
}
path.set('/insertTaskScore', insertTaskScore);

function updateTaskScore(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskScoreDao.updateTaskScore(postData.task_id, postData.student_id, postData.student_task_score, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '修改数据成功', res));
    response.end()
  })
}
path.set('/updateTaskScore', updateTaskScore);

function deleteTaskScore(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskScoreDao.deleteTaskScore(postData.task_id, postData.student_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '删除数据成功', res));
    response.end()
  })
}
path.set('/deleteTaskScore', deleteTaskScore);

function getTaskScoreByTaskId(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskScoreDao.getTaskScoreByTaskId(postData.task_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '删除数据成功', res));
    response.end()
  })
}
path.set('/getTaskScoreByTaskId', getTaskScoreByTaskId);

function getTaskScoreByTaskIdAndStudentId(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskScoreDao.getTaskScoreByTaskIdAndStudentId(postData.task_id,postData.student_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '删除数据成功', res));
    response.end()
  })
}
path.set('/getTaskScoreByTaskIdAndStudentId', getTaskScoreByTaskIdAndStudentId);

module.exports.path = path;



