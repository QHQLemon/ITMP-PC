let TestScoreDao = require('../Dao/TestScoreDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getTestScoreByPage(request, response){
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  TestScoreDao.getTestScoreByPage(urlData.page, parseInt(urlData.rows), urlData.student_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getTestScoreByPage', getTestScoreByPage);

function checkAndInsertTestAnswer(request, response){
  let postData = request.body.params;
  console.log(postData);
  TestScoreDao.checkAndInsertTestAnswer(postData.chapter_id, postData.student_id, postData.student_test_answer, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '增加数据成功', res));
    response.end()
  })
}
path.set('/checkAndInsertTestAnswer', checkAndInsertTestAnswer);

function getTestScoreByChapterIdAndStudentId(request, response){
  let postData = request.body.params;
  console.log(postData);
  TestScoreDao.getTestScoreByChapterIdAndStudentId(postData.chapter_id, postData.student_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '获取数据成功', res));
    response.end()
  })
}
path.set('/getTestScoreByChapterIdAndStudentId', getTestScoreByChapterIdAndStudentId);

function deleteTestScoreByChapterIdAndStudentId(request, response){
  let postData = request.body.params;
  console.log(postData);
  TestScoreDao.deleteTestScoreByChapterIdAndStudentId(postData.chapter_id, postData.student_id, (res) => {
    response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    response.write(util.packData('200', '删除数据成功', res));
    response.end()
  })
}
path.set('/deleteTestScoreByChapterIdAndStudentId', deleteTestScoreByChapterIdAndStudentId);

module.exports.path = path;



