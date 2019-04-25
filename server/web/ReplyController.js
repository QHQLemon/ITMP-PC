let ReplyDao = require('../Dao/ReplyDao');
let util = require('../util/util');

let path = new Map();

function getReplyByTopicId(request, response) {
  let postData = request.body.params;
  console.log(postData);
  ReplyDao.getReplyByTopicId(postData.topic_id, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '查询数据成功', result));
      response.end();
    })
}
path.set('/getReplyByTopicId', getReplyByTopicId);

function insertReply(request, response) {
  let postData = request.body.params;
  console.log(postData);
  console.log(util.dealHTML(postData.reply_content))
  ReplyDao.insertReply(postData.topic_id, postData.reply_to_id, util.dealHTML(postData.reply_content),
    postData.from_id, postData.from_name, new Date(), (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '增加数据成功'));
      response.end();
    })
}
path.set('/insertReply', insertReply);


function updateReply(request, response) {
  let postData = request.body.params;
  console.log(postData);
  ReplyDao.updateReply(postData.reply_id, util.dealHTML(postData.reply_content),  (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '修改数据成功'));
      response.end();
    })
}
path.set('/updateReply', updateReply);

function deleteReplyById(request, response) {
  let postData = request.body.params;
  console.log(postData);
  ReplyDao.deleteReplyById(postData.topic_id, postData.reply_id,  (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '删除数据成功'));
      response.end();
    })
}
path.set('/deleteReplyById', deleteReplyById);


function insertTopicLike(request, response) {
  let postData = request.body.params;
  console.log(postData);
  ReplyDao.insertTopicLike(postData.user_id,postData.topic_id,   (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '增加数据成功'));
      response.end();
    })
}
path.set('/insertTopicLike', insertTopicLike);


function deleteTopicLike(request, response) {
  let postData = request.body.params;
  console.log(postData);
  ReplyDao.deleteTopicLike(postData.user_id,postData.topic_id,   (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '删除数据成功'));
      response.end();
    })
}
path.set('/deleteTopicLike', deleteTopicLike);

function getTopicLike(request, response) {
  let postData = request.body.params;
  console.log(postData);
  ReplyDao.getTopicLike(postData.user_id,postData.topic_id,   (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '获取数据成功', result));
      response.end();
    })
}
path.set('/getTopicLike', getTopicLike);


module.exports.path = path;
