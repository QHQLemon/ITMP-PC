let AdminDao = require('../Dao/AdminDao');
let Jwt = require('../Jwt');
let util = require('../util/util');


let path = new Map();

function login(request, response) {
  let postData = request.body.params;

  if (postData.user_type == 1) {
    console.log('学生登录');
    AdminDao.getStudentById(postData.user_id, function (res) {
      console.log(res)
      if (res && res.length > 0 && res[0].student_pwd == postData.user_pwd) {
        let cert = new Jwt({
          user_id: res[0].user_id,
          admin: false
        });
        let token = cert.getToken();
        response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
        response.write(util.packData('200', '登录成功', [{ token, user_id: res[0].student_id, user_name: res[0].student_name }]));
        response.end()
      } else {
        console.log('error')
        response.writeHead(404);
        response.end()

      }
    })

  } else if (postData.user_type == 2) {
    console.log('管理员登录');
    AdminDao.getAdminById(postData.user_id, function (res) {
      console.log(res)
      if (res && res.length > 0 && res[0].admin_pwd == postData.user_pwd) {
        let cert = new Jwt({
          user_id: res[0].user_id,
          admin: true
        });
        let token = cert.getToken();
        response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
        response.write(util.packData('200', '登录成功', [{ token, user_id: res[0].admin_id, user_name: res[0].admin_name }]));
        response.end()
      } else {
        console.log('error')
        response.writeHead(404);
        response.end()

      }
    })

  }
}

path.set('/login', login);

function changePwd(request, response) {
  console.log('-------------------')
  let postData = request.body.params;
  console.log(postData)
  var cert = new Jwt(request.headers.token).verifyToken();
  console.log('verify   ', cert)
  if (cert.admin) {  //管理员
    AdminDao.changePwd(2, postData.userId, postData.oldPwd, postData.newPwd, res => {
      if (res === true) {
        response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
        response.write(util.packData('200', '修改成功'));
        response.end()
      } else {
        console.log('error')
        response.writeHead(404);
        response.end()
      }
    })
  } else {  //学生
    AdminDao.changePwd(1, postData.userId, postData.oldPwd, postData.newPwd, res => {
      if (res === true) {
        response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
        response.write(util.packData('200', '修改成功'));
        response.end()
      } else {
        console.log('error')
        response.writeHead(404);
        response.end()
      }
    })
  }
}
path.set('/changePwd', changePwd)


  module.exports.path = path;
