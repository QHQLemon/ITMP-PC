let TaskDao = require('../Dao/TaskDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getTaskByPage(request, response){
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  TaskDao.getTaskByPage(urlData.page, parseInt(urlData.rows), urlData.chapter_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getTaskByPage', getTaskByPage);

function insertTask(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskDao.insertTask(util.dealHTML(postData.task_content), postData.task_score, postData.chapter_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '增加数据成功', res));
    response.end()
  })
}
path.set('/insertTask', insertTask);

function updateTask(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskDao.updateTask(postData.task_id, util.dealHTML(postData.task_content), postData.task_score, postData.chapter_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '修改数据成功', res));
    response.end()
  })
}
path.set('/updateTask', updateTask);

function deleteTask(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskDao.deleteTask(postData.task_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '删除数据成功', res));
    response.end()
  })
}
path.set('/deleteTask', deleteTask);

function getTaskByChapterId(request, response){
  let postData = request.body.params;
  console.log(postData);
  TaskDao.getTaskByChapterId(postData.chapter_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '获取数据成功', res));
    response.end()
  })
}
path.set('/getTaskByChapterId', getTaskByChapterId);

module.exports.path = path;



