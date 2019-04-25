let SectionDao = require('../Dao/SectionDao');
let util = require('../util/util');
let url = require('url')


let path = new Map();

function getAllSection(request, response) {
  SectionDao.getAllSection( (result) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end();
  })
}

path.set('/getAllSection', getAllSection);

function getSectionMaxId(request, response) {
  SectionDao.getSectionMaxId( (result) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end();
  })
}

path.set('/getSectionMaxId', getSectionMaxId);

function getSectionById(request, response) {
  let postData = request.body.params;
  console.log(postData)
  SectionDao.getSectionById(postData.section_id,  (result) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.packData('200', '获取数据成功', result));
    response.end();
    console.log('----fa------')
  })
}

path.set('/getSectionById', getSectionById);


function getSectionByPage(request, response) {
  let urlData = url.parse(request.url, true).query;
  console.log(urlData)
  SectionDao.getSectionByPage(urlData.page, parseInt(urlData.rows), urlData.chapter_id, function (result, total) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(util.ppData(result, total));
    response.end()
  })
}
path.set('/getSectionByPage', getSectionByPage);

function insertSection(request, response){
  let postData = request.body.params;
  SectionDao.insertSection(postData.section_name, postData.section_video, postData.chapter_id, postData.order_num , (result) => {
    response.writeHead(200, {'content-type': 'text/html; charset=utf8'});
    response.write(util.packData('200', '添加数据成功', result));
    response.end()
  })
}

path.set('/insertSection', insertSection);

function updateSection(request, response){
  let postData = request.body.params;
  SectionDao.updateSection(postData.section_id, postData.section_name, postData.section_video, postData.chapter_id,postData.order_num , (result) => {
    response.writeHead(200, {'content-type': 'text/html; charset=utf8'});
    response.write(util.packData('200', '修改数据成功', result));
    response.end()
  })
}

path.set('/updateSection', updateSection);

function deleteSection(request, response){
  let postData = request.body.params;
  SectionDao.deleteSection(postData.section_id, (result) => {
    response.writeHead(200, {'content-type': 'text/html; charset=utf8'});
    response.write(util.packData('200', '删除数据成功', result));
    response.end()
  })
}

path.set('/deleteSection', deleteSection);


module.exports.path = path;
