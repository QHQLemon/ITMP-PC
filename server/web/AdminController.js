let AdminDao = require('../Dao/AdminDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getAdminByPage(request, response) {
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  AdminDao.getAdminByPage(urlData.page, parseInt(urlData.rows), function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}

path.set('/getAdminByPage', getAdminByPage);


function insertAdmin(request, response) {
  let postData = request.body.params;
  AdminDao.insertAdmin(postData.admin_id, postData.admin_name, postData.admin_pwd, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '插入数据成功', result));
    response.end()
    console.log('ok')
  })
}
path.set('/insertAdmin', insertAdmin);

function updateAdmin(request, response) {
  let postData = request.body.params;
  AdminDao.updateAdmin(postData.admin_id, postData.admin_name, postData.admin_pwd, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '修改数据成功', result));
    response.end()
  })


}
path.set('/updateAdmin', updateAdmin);

function deleteAdmin(request, response) {
  // request.on('data', function(data) {
  let postData = request.body.params;
  console.log(postData.admin_id)
  AdminDao.deleteAdmin(parseInt(postData.admin_id), function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '已删除该条数据', result));
    response.end()
  })
  // })


}
path.set('/deleteAdmin', deleteAdmin);
// console.log(path)

module.exports.path = path;
