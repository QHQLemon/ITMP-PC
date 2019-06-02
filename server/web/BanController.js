let BanDao = require('../Dao/BanDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getAllBan(request, response) {

  BanDao.getAllBan( function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end()
  })
}

path.set('/getAllBan', getAllBan);

function insertBan(request, response) {
  let postData = request.body.params;
  BanDao.insertBan(postData.ban_word, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '增加数据成功', result));
    response.end()
  })
}

path.set('/insertBan', insertBan);

function deleteBan(request, response) {
  let postData = request.body.params;
  console.log(postData.ban_id)
  BanDao.deleteBan(postData.ban_id, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '增加数据成功', result));
    response.end()
  })
}

path.set('/deleteBan', deleteBan);
module.exports.path = path;
