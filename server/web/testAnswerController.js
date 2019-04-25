let TestAnswerDao = require('../Dao/TestAnswerDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getTestAnswerByPage(request, response) {
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  TestAnswerDao.getTestAnswerByPage(urlData.page, parseInt(urlData.rows), urlData.chapter_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getTestAnswerByPage', getTestAnswerByPage);

function getTestAnswerByChapterId(request, response) {
  let postData = request.body.params;
  console.log(postData)
  TestAnswerDao.getTestAnswerByChapterId(postData.chapter_id, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取成功', result));
    response.end()
  })
}
path.set('/getTestAnswerByChapterId', getTestAnswerByChapterId);


module.exports.path = path;



