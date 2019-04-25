let DBUtil = require('./dbutil');

function getAllSection( success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql  = `select * from section order by chapter_id asc, order_num asc;`;

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

function getSectionMaxId( success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql  = `select max(section_id) as max_id from section;`;

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


function getCountOfSection(chapter_id, success) {
  let connection = DBUtil.createConnection();
  let params = [];
  let sql = '';

  if (chapter_id) {
    sql = 'select count(*) as total from section where chapter_id = ?';
    params = [chapter_id]
  } else {
    sql = 'select count(*) as total from section'
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

function getSectionByPage(page, pageSize, chapter_id, success) {
  getCountOfSection(chapter_id, function (res) {
    let total;
    total = res[0].total;

    let connection = DBUtil.createConnection();
    let params = [];
    let sql = '';

    if (chapter_id) {
      sql = 'select * from section  where chapter_id = ? order by chapter_id asc, order_num asc limit ?, ?';;
      params = [chapter_id, (page - 1) * pageSize, pageSize];
    } else {
      sql = 'select * from section order by chapter_id asc, order_num asc  limit ?, ?'
      params = [(page - 1) * pageSize, pageSize];
    }

    connection.connect();
    connection.query(sql, params, (err, result) => {
      if (err == null) {
        success(result, total)
      } else {
        console.log(err)
      }
    })
    connection.end()
  })
}

// getSectionByPage('1', 5, 1, res => {
//   console.log(res)
// })




function insertSection(section_name, section_video, chapter_id , order_num, success){
  let connection = DBUtil.createConnection();
  let params = [section_name, section_video, chapter_id, order_num];
  let sql = `insert into section (section_name, section_video, chapter_id, order_num) values (?, ?, ?, ?)`;

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
// insertSection('第一节 ', 'http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4', '1' , (res) => {
//   console.log(res)
// })

function updateSection(section_id,  section_name, section_video, chapter_id , order_num, success){
  let connection = DBUtil.createConnection();
  let params = [section_name, section_video, chapter_id, order_num, section_id];
  let sql = `update section set section_name = ?, section_video = ?, chapter_id = ?, order_num = ? where section_id = ?`;

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

// updateSection('1','第 1 节 ', 'http://ppdzfcm6e.bkt.clouddn.com/job_demo.mp4', '2' , (res) => {
//   console.log(res)
// })

function deleteSection (section_id, success){
  let connection = DBUtil.createConnection();
  let params = [section_id];
  let sql = `delete from section where section_id = ?`;

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

// deleteSection('1',  (res) => {
//   console.log(res)
// })
function getSectionById(section_id,  success) {
  let connection = DBUtil.createConnection();
  let params = [section_id];
  let sql  = `select * from section where section_id = ?;`;

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





module.exports = {
  getAllSection,
  insertSection,
  updateSection,
  deleteSection,
  getSectionByPage,
  getSectionById,
  getSectionMaxId,
}
