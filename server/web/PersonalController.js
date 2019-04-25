let AdminDao = require('../Dao/AdminDao');
let TopicDao = require('../Dao/TopicDao');
let ReplyDao = require('../Dao/ReplyDao');
let CaseDao = require('../Dao/CaseDao');
let util = require('../util/util');
let url = require('url')
let Jwt = require('../Jwt')

let path = new Map();

function getUserMsg(request, response) {
  let postData = request.body.params;
  var cert = new Jwt(request.headers.token).verifyToken();
  if (cert.admin) {  //管理员
    AdminDao.getAdminById(postData.user_id, (res) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '获取数据成功', res));
      response.end()
    })
  } else {  //学生
    AdminDao.getStudentById(postData.user_id, (res) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '获取数据成功', res));
      response.end()
    })
  }

}

path.set('/getUserMsg', getUserMsg);

// 按用户id查询主题
function getTopicByUserId(request, response) {
  let postData = request.body.params;
  console.log(postData);
  TopicDao.getTopicByUserId(postData.user_id, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '查询成功', result));
      response.end();
    })
}
path.set('/getTopicByUserId', getTopicByUserId);

// 按用户id查询回复
function getReplyByUserId(request, response) {
  let postData = request.body.params;
  console.log(postData);
  ReplyDao.getReplyByUserId(postData.user_id, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '查询成功', result));
      response.end();
    })
}
path.set('/getReplyByUserId', getReplyByUserId);

// 按用户id查询案例
function getEnshrineByUserId(request, response) {
  let postData = request.body.params;
  console.log(postData);
  CaseDao.getEnshrineByUserId(postData.user_id, (result) => {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '查询成功', result));
      response.end();
    })
}
path.set('/getEnshrineByUserId', getEnshrineByUserId);

module.exports.path = path;
