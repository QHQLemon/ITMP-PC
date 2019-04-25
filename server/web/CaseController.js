let CaseDao = require('../Dao/CaseDao');
let util = require('../util/util');
let url = require('url')

let path = new Map();

function getCaseByPage(request, response) {
  let urlData = url.parse(request.url, true).query;
  CaseDao.getCaseByPage(urlData.page, parseInt(urlData.rows), urlData.case_type, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getCaseByPage', getCaseByPage);

function getAllCase(request, response) {
  let postData = request.body.params;
  CaseDao.getAllCase(postData.case_type,function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end()
  })
}

// getAllCase()
path.set('/getAllCase', getAllCase);

function getCaseById(request, response) {
  let postData = request.body.params;
  CaseDao.getCaseById(postData.case_id, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end()
  })
}

path.set('/getCaseById', getCaseById);


function insertCase(request, response) {
    let postData = request.body.params;
    CaseDao.insertCase(postData.case_type, postData.case_title, postData.case_content, postData.case_answer, new Date(), postData.case_media_path, postData.case_ppt, postData.media_type, postData.case_author, function (result) {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '插入数据成功', result));
      response.end()
      console.log('ok')
    })
}
path.set('/insertCase', insertCase);

function updateCase(request, response) {
  // request.on('data', function(data) {
    let postData = request.body.params;
    console.log(postData);
    CaseDao.updateCase(postData.case_id, postData.case_type, postData.case_title, postData.case_content, postData.case_answer, postData.case_media_path, postData.case_ppt, postData.media_type, postData.case_author, function (result) {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '修改数据成功', result));
      response.end()
    // })
  })


}
path.set('/updateCase', updateCase);

function deleteCase(request, response) {
    let postData = request.body.params
    CaseDao.deleteCase(postData.case_id, function (result) {
      response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
      response.write(util.packData('200', '已删除该条数据', result));
      response.end()
    })
}
path.set('/deleteCase', deleteCase);

function addStudentEnshrine(request, response) {
  let postData = request.body.params
  CaseDao.addStudentEnshrine(postData.student_id, postData.case_id, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '已删除该条数据', result));
    response.end()
  })
}
path.set('/addStudentEnshrine', addStudentEnshrine);

function minusStudentEnshrine(request, response) {
  let postData = request.body.params
  CaseDao.minusStudentEnshrine(postData.student_id, postData.case_id, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '已删除该条数据', result));
    response.end()
  })
}
path.set('/minusStudentEnshrine', minusStudentEnshrine);

function getStudentAndEnshrine(request, response) {
  let postData = request.body.params;
  console.log(postData)
  CaseDao.getStudentAndEnshrine(postData.student_id, postData.case_id, function (result) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '已删除该条数据', result));

    console.log(result)
    response.end()
  })
}
path.set('/getStudentAndEnshrine', getStudentAndEnshrine);

module.exports.path = path;
