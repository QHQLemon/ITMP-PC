let DBUtil = require('./dbutil');

function getChapterCount(chapter_name, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';
  if (chapter_name) {
    sql = `select count(*) as total from chapter where chapter_name like '%` + chapter_name + `%';`;
  } else {
    sql = `select count(*) as total from chapter`;
  }

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}


function getChapterByPage(page, pageSize, searchWord, success) {
  let connection = DBUtil.createConnection();
  let params = [(page - 1) * pageSize, pageSize]
  let sql = '';
  let total = 0;

  if (searchWord) {
    sql = `select * from chapter where chapter_name like '%` + searchWord + `%'  limit ?, ?;`;
    getChapterCount(searchWord, function (res) {
      total = res[0].total;
      connection.connect();
      connection.query(sql, params, (err, result) => {
        if (err == null) {
          success(result, total)
        } else {
          console.log(err)
        }
      })
      connection.end();
    })

  } else {
    sql = `select * from chapter   limit ?, ?;`;
    getChapterCount('', function (res) {
      total = res[0].total;

      connection.connect();
      connection.query(sql, params, (err, result) => {
        if (err == null) {
          success(result, total)
        } else {
          console.log(err)
        }
      })
      connection.end();
    })
  }
}

// getChapterByPage(1, 3, '', (res, total) => {
//   console.log(res, total)
// })

function getAllChapter( success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql  = `select * from chapter;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function insertChapter(chapter_name, chapter_courseware , success){
  let connection = DBUtil.createConnection();
  let params = [chapter_name, chapter_courseware];
  let sql = `insert into chapter (chapter_name, chapter_courseware) values (?, ?)`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end();
}
// insertChapter('第五章 ', 'http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx', (res) => {
//   console.log(res)
// })

function updateChapter(chapter_id,  chapter_name, chapter_courseware , success){
  let connection = DBUtil.createConnection();
  let params = [chapter_name, chapter_courseware, chapter_id];
  let sql = `update chapter set chapter_name = ?, chapter_courseware = ? where chapter_id = ?`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end();
}

// updateChapter('5', '第 5 章  hahahah', 'http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx', (res) => {
//   console.log(res)
// })

function deleteChapter (chapter_id, success){
  let connection = DBUtil.createConnection();
  let params = [chapter_id];
  let sql = `delete from chapter where chapter_id = ?`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if(err == null){
      success(result)
    }else{
      console.log(err)
    }
  })
  connection.end();
}

// deleteChapter('6',  (res) => {
//   console.log(res)
// })

function getChapterById(chapter_id,  success) {
  let connection = DBUtil.createConnection();
  let params = [chapter_id];
  let sql  = `select * from chapter where chapter_id = ? order by chapter_id;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}

function getSectionByChapterId(chapter_id,  success) {
  let connection = DBUtil.createConnection();
  let params = [chapter_id];
  let sql  = `select * from section where chapter_id = ? order by chapter_id asc, order_num asc;`;

  connection.connect();
  connection.query(sql, params, (err, result) => {
    if (err == null) {
      success(result);
    } else {
      console.log(err)
    }
  })
  connection.end()
}
function getChapterAndSection(success){
  getAllChapter(res => {
    res.forEach((ele, index) => {
      getSectionByChapterId(ele.chapter_id, result => {
        res[index].sectionList = result
      })
    })
    setTimeout(function(){
      success(res)
    }, 500)
  })
}

// getChapterAndSection(res => {
//   console.log(res)
// })

module.exports = {
  getAllChapter,
  insertChapter,
  updateChapter,
  deleteChapter,
   getChapterByPage,
   getChapterById,
   getChapterAndSection
}
