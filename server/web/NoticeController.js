let NoticeDao = require('../Dao/NoticeDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getAllNotice(request, response) {
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  NoticeDao.queryAllNotice(function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    // response.write(util.packData(result));sss

    response.end()
  })
}

// getAllNotice()
path.set('/getAllNotice', getAllNotice);

function getNoticeById(request, response) {
  let postData = request.body.params;
  console.log(postData.notice_id)
  NoticeDao.queryNoticeById(parseInt(postData.notice_id), function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end()
  })
}

path.set('/getNoticeById', getNoticeById);


function insertNotice(request, response) {
  // request.on('data', function(data) {
    let postData = request.body.params;
    NoticeDao.insertNotice(postData.notice_title, postData.notice_content, new Date(), new Date(), function (result) {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '插入数据成功', result));
      response.end()
      console.log('ok')
    })
  // })
}
path.set('/insertNotice', insertNotice);

function updateNotice(request, response) {
  // request.on('data', function(data) {
    let postData = request.body.params;
    NoticeDao.updateNotice(postData.notice_id, postData.notice_title, postData.notice_content, new Date(), function (result) {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '修改数据成功', result));
      response.end()
    // })
  })


}
path.set('/updateNotice', updateNotice);

function deleteNotice(request, response) {
  // request.on('data', function(data) {
    let postData = request.body.params
    console.log(postData.notice_id)
    NoticeDao.deleteNotice(parseInt(postData.notice_id), function (result) {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '已删除该条数据', result));
      response.end()
    })
  // })


}
path.set('/deleteNotice', deleteNotice);
// console.log(path)

module.exports.path = path;
