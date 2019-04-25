let TestDao = require('../Dao/TestDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getTestByPage(request, response) {
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  TestDao.getTestByPage(urlData.page, parseInt(urlData.rows), urlData.chapter_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getTestByPage', getTestByPage);

function getTestByChapterId(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TestDao.getTestByChapterId(postData.chapter_id , (res) => {
    response.writeHead(200, { 'content-type': 'text/html;charset=utf8' });
    response.write(util.packData('200', '获取数据成功', res));
    response.end()
  })
}
path.set('/getTestByChapterId', getTestByChapterId);

function insertTest(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TestDao.insertTest(postData.test_content, postData.test_A, postData.test_B, postData.test_C, postData.test_D,  postData.test_answer, postData.chapter_id, (res) => {
    response.writeHead(200, { 'content-type': 'text/html;charset=utf8' });
    response.write(util.packData('200', '增加数据成功', res));
    response.end()
  })
}
path.set('/insertTest', insertTest);

function updateTest(request, response) {
  let postData = request.body.params;
  console.log(postData , 'UPDATE');
  TestDao.updateTest(postData.test_id, postData.test_content, postData.test_A, postData.test_B, postData.test_C, postData.test_D,  postData.test_answer, postData.chapter_id,postData.old_chapter_id, (res) => {
    response.writeHead(200, { 'content-type': 'text/html;charset=utf8' });
    response.write(util.packData('200', '修改数据成功', res));
    response.end()
  })
}
path.set('/updateTest', updateTest);

function deleteTest(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TestDao.deleteTest(postData.chapter_id ,postData.test_id, (res) => {
    response.writeHead(200, { 'content-type': 'text/html;charset=utf8' });
    response.write(util.packData('200', '删除数据成功', res));
    response.end()
  })
}
path.set('/deleteTest', deleteTest);

// function getTaskByChapterId(request, response){
//   let postData = request.body.params;
//   console.log(postData);
//   TestDao.getTaskByChapterId(postData.chapter_id, (res) => {
//     response.writeHead(200, {'content-type': 'text/html;charset=utf8'});
//     response.write(util.packData('200', '获取数据成功', res));
//     response.end()
//   })
// }
// path.set('/getTaskByChapterId', getTaskByChapterId);

module.exports.path = path;



