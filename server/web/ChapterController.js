let ChapterDao = require('../Dao/ChapterDao');
let util = require('../util/util');
let url = require('url');

let path = new Map();

function getChapterById(request, response) {
  let postData = request.body.params;
  console.log(postData)
  ChapterDao.getChapterById(postData.chapter_id, (result) => {
    console.log(result)
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end();
  })
}

path.set('/getChapterById', getChapterById);

function getChapterAndSection(request, response) {
  let postData = request.body.params;
  console.log(postData)
  ChapterDao.getChapterAndSection((result) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end();
  })
}

path.set('/getChapterAndSection', getChapterAndSection);


function getChapterByPage(request, response) {
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  ChapterDao.getChapterByPage(urlData.page, parseInt(urlData.rows), urlData.searchWord, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getChapterByPage', getChapterByPage);


function getAllChapter(request, response) {
  ChapterDao.getAllChapter((result) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end();
  })
}

path.set('/getAllChapter', getAllChapter)

function insertChapter(request, response) {
  let postData = request.body.params;
  ChapterDao.insertChapter(postData.chapter_name, postData.chapter_courseware, (result) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '添加数据成功', result));
    response.end()
  })
}

path.set('/insertChapter', insertChapter);

function updateChapter(request, response) {
  let postData = request.body.params;
  ChapterDao.updateChapter(postData.chapter_id, postData.chapter_name, postData.chapter_courseware, (result) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '修改数据成功', result));
    response.end()
  })
}

path.set('/updateChapter', updateChapter);

function deleteChapter(request, response) {
  let postData = request.body.params;
  ChapterDao.deleteChapter(postData.chapter_id, (result) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '删除数据成功', result));
    response.end()
  })
}

path.set('/deleteChapter', deleteChapter);



// console.log(path)

module.exports.path = path;
