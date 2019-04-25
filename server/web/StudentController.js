let StudentDao = require('../Dao/StudentDao');
let url = require('url');
let util = require('../util/util.js')

let path = new Map();

function queryStudentByPage(request, response) {
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  StudentDao.queryStudentByPage(urlData.page, parseInt(urlData.rows), urlData.searchWord, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    // response.write(util.packData('200', '获取数据成功', result));
    response.write(util.ppData(result, total));
    console.log(result, total)

    response.end()
  })
}

path.set('/queryStudentByPage', queryStudentByPage);

function insertStudent(request, response) {
  let postData = request.body.params;
  console.log(postData)
  StudentDao.insertStudent(postData.student_id, postData.student_name, postData.student_pwd,postData.student_class_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '增加数据成功'));
    response.end()
  })
}
path.set('/insertStudent', insertStudent);

function updateStudent(request, response) {
  let postData = request.body.params;
  console.log(postData)
  StudentDao.updateStudent(postData.student_id, postData.student_name, postData.student_pwd, postData.student_class_id,
    postData.student_old_class_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '增加数据成功'));
    response.end()
  })
}
path.set('/updateStudent', updateStudent);

function deleteStudent(request, response) {
  let postData = request.body.params;
  console.log(postData)
  StudentDao.deleteStudent(postData.student_id, postData.student_class_id,function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '增加数据成功'));
    response.end()
  })
}
path.set('/deleteStudent', deleteStudent);

module.exports.path = path;
