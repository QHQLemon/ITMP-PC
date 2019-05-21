let fs = require('fs')
let url = require('url')
let xlsx = require('node-xlsx')
let util = require('../util/util');
let studentDao = require('../Dao/StudentDao')
let path = new Map();

function upload(request, response) {
  console.log(request.file);
  response.write(JSON.stringify({ path: request.file.path }))
  response.end()
}

path.set('/upload', upload);


function upload(req, res) {

  console.log(req.file);
  var worksheet = xlsx.parse('file/student.xlsx');
  var data = worksheet[0].data.filter((ele, index) => {
    return ele.length !== 0;
  });
  console.log(data)

  studentDao.insertMoreStudent(data, result => {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    res.write(util.packData('200', '增加数据成功'));
    res.end();
  })
}

path.set('/upload', upload);

module.exports.path = path;
