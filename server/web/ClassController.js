let ClassDao = require('../Dao/ClassDao');
let url = require('url');
let util = require('../util/util.js')

let path = new Map();

function getAllClass(request, response) {
  ClassDao.getAllClass(function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    // response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getAllClass', getAllClass);

function queryClassByPage(request, response) {
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  ClassDao.queryClassByPage(urlData.page, parseInt(urlData.rows), urlData.searchWord, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    // response.write(util.packData('200', '获取数据成功', result));
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/queryClassByPage', queryClassByPage);


function insertClass(request, response) {
  let postData = request.body.params;
  console.log(postData)
  ClassDao.insertClass(postData.class_name, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '增加数据成功'));
    response.end()
  })
}
path.set('/insertClass', insertClass);

function updateClass(request, response) {
  let postData = request.body.params;
  console.log(postData)
  ClassDao.updateClass(postData.class_id,postData.class_name, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '增加数据成功'));
    response.end()
  })
}
path.set('/updateClass', updateClass);

function deleteClass(request, response) {
  let postData = request.body.params;
  ClassDao.deleteClass(postData.class_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '删除数据成功'));
    response.end()
  })
}
path.set('/deleteClass', deleteClass);



module.exports.path = path;
