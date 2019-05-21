let TopicDao = require('../Dao/TopicDao');
let util = require('../util/util');

let path = new Map();

// 按要求查询主题
function getAllTopic(request, response) {
  let postData = request.body.params;
  console.log(postData)
  TopicDao.queryTopicByTypeAndOrder(postData.page, parseInt(postData.pageSize),postData.topic_type, postData.order_type, postData.word, function (total, result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));

    console.log(result,total)
    response.end()
  })
}
path.set('/getAllTopic', getAllTopic)


// 增加主题
function insertTopic(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TopicDao.insertTopic(parseInt(postData.topic_type), postData.topic_title, postData.topic_content,
    new Date(), postData.user_id, postData.user_name, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '增加数据成功'));
      response.end();
    })
}
path.set('/insertTopic', insertTopic);


// 增加主题点赞、浏览、回复等
function addTopicLookOrLikeOrReply(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TopicDao.addTopicLookOrLikeOrReply(postData.topic_id, postData.add_type, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '增加数据成功'));
      response.end();
    })
}
path.set('/addTopicLookOrLikeOrReply', addTopicLookOrLikeOrReply);


// 修改主题
function updateTopic(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TopicDao.updateTopic(postData.topic_id, postData.topic_title, postData.topic_content, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '修改数据成功'));
      response.end();
    })
}
path.set('/updateTopic', updateTopic);


// 删除主题
function deleteTopicById(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TopicDao.deleteTopicById(postData.topic_id, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '删除数据成功'));
      response.end();
    })
}
path.set('/deleteTopicById', deleteTopicById);


// 按标题查询主题
function queryTopicByTitle(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TopicDao.queryTopicByTitle(postData.topic_title, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '查询成功', result));
      response.end();
    })
}
path.set('/queryTopicByTitle', queryTopicByTitle);


// 按id查询主题
function queryTopicById(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TopicDao.queryTopicById(postData.topic_id, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '查询成功', result));
      response.end();
    })
}
path.set('/queryTopicById', queryTopicById);




module.exports.path = path;
