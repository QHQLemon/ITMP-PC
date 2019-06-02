let express = require('express');
let fs = require('fs');
let path = require('path');
let bodyParser = require('body-parser');
let loader = require('./loader');
let history = require('connect-history-api-fallback');
let multer = require('multer');
let Jwt = require('./Jwt');
let util = require('./util/util')

let app = express();
// let uploadSingle = multer({dest: "./file/", filename: "student.xlsx"})
var storage = multer.diskStorage({

  //设置上传后文件路径
     destination: function (req, file, cb) {
         cb(null, './file')
    },
  //给上传文件重命名，获取添加后缀名
   filename: function (req, file, cb) {
       var fileFormat = (file.originalname).split(".");
       cb(null, 'student.xlsx');
   }
  });
  //添加配置文件到multer对象。
  var uploadSingle = multer({
       storage: storage
 });

app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(function (req, res, next) {
  let commonUser = ['/getAllNotice', '/getChapterAndSection','/getAllCase', '/getCaseByPage', '/getAllChapter', '/getAllTopic', '/login', '/getRight', '/getCaseByEnshrine', '/favicon.ico']
  let studentUser = ['/getAllNotice', '/getSectionMaxId', '/getChapterAndSection', '/getAllCase', '/getAllChapter', '/getAllTopic', '/login', '/getRight',
    '/getChapterAndSection', '/getCaseById', '/addStudentEnshrine', '/minusStudentEnshrine', '/getStudentAndEnshrine',
    '/getTaskByChapterId', '/insertTaskScore', '/getTaskScoreByTaskId', '/getTaskScoreByTaskIdAndStudentId',
    '/getTestByChapterId', '/checkAndInsertTestAnswer', '/getTestScoreByChapterIdAndStudentId', '/deleteTestScoreByChapterIdAndStudentId',
    '/getTestAnswerByChapterId', '/insertTopic', '/queryTopicById', '/deleteTopicById', '/updateTopic', '/addTopicLookOrLikeOrReply',
    '/getReplyByTopicId', '/updateReply', '/deleteReplyById', '/getSectionById', '/getTopicLike', '/insertReply', '/insertTopicLike','/deleteTopicLike',
  '/getUserMsg', '/getEnshrineByUserId','/getReplyByUserId' , '/getTopicByUserId', '/getCaseByEnshrine', '/changePwd', '/getCaseByPage', '/favicon.ico']

  let userPortList;

  //是否登录或登录是否有效 token是否有效
  var cert = new Jwt(req.headers.token).verifyToken();
  console.log('verify   ', cert)
  console.log('admin   ' + cert.admin);
  console.log('url', req.url)

  var nextFlag = false;
  if (cert == 'error') {
    // 未登录或登录过期
    userPortList = commonUser;
  } else {
    //登录有效
    if (cert.admin) {  //管理员
      userPortList = 'all';
    } else {  //学生
      userPortList = studentUser;
    }
  }


  if (userPortList == 'all') {
    next()
  } else {
    for(let i = 0; i < userPortList.length; i++){
      if(userPortList[i] == req.url || userPortList[i].indexOf('/getCaseByPage')){
        nextFlag = true;
        next();
        break;
      }
    }
    console.log(nextFlag)
    if (!nextFlag) {
      res.writeHead(401);
      res.end();
    }
  }
})

app.get('/getRight', function (request, response) {
  let commonUserRouter = ['home', 'caseLeft', 'loginPage', 'notice', 'disLeft', 'courseOutline', 'courseHomework', 'courseContent']
  let studentUserRouter = ['home', 'caseLeft', 'loginPage', 'notice', 'disLeft', 'courseOutline',
    'courseHomework', 'courseContent', 'personal', 'learn', 'testSubmit', 'taskSubmit', 'caseDetail', 'disDetails', 'disAdd', 'disEdit', 'noRight', 'courseware', 'changePwd']
  var cert = new Jwt(request.headers.token).verifyToken();
  let userRouter;
  if (cert == 'error') {
    // 未登录或登录过期
    userRouter = commonUserRouter;
  } else {
    //登录有效
    if (cert.admin) {  //管理员
      userRouter = 'all'
    } else {  //学生
      userRouter = studentUserRouter;
    }
  }
  response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
  response.write(util.packData('200', '获取数据成功', userRouter));
  response.end()
})


// personal
app.post('/getEnshrineByUserId', loader.get('/getEnshrineByUserId'))
app.post('/getReplyByUserId', loader.get('/getReplyByUserId'))
app.post('/getTopicByUserId', loader.get('/getTopicByUserId'))
app.post('/getUserMsg', loader.get('/getUserMsg'))

// 公告
app.post('/getAllNotice', loader.get('/getAllNotice'))
app.post('/getNoticeById', loader.get('/getNoticeById'))
app.post('/insertNotice', loader.get('/insertNotice'))
app.post('/updateNotice', loader.get('/updateNotice'))
app.post('/deleteNotice', loader.get('/deleteNotice'))

//章节
// app.get('/getAllChapter', loader.get('/getAllChapter'))


//作业
app.get('/getTaskByPage', loader.get('/getTaskByPage'))
app.post('/insertTask', loader.get('/insertTask'))
app.post('/updateTask', loader.get('/updateTask'))
app.post('/deleteTask', loader.get('/deleteTask'))
app.post('/getTaskByChapterId', loader.get('/getTaskByChapterId'))

// 作业分数
app.get('/getTaskScoreByPage', loader.get('/getTaskScoreByPage'))
app.post('/insertTaskScore', loader.get('/insertTaskScore'))
app.post('/updateTaskScore', loader.get('/updateTaskScore'))
app.post('/deleteTaskScore', loader.get('/deleteTaskScore'))
app.post('/getTaskScoreByTaskId', loader.get('/getTaskScoreByTaskId'))
app.post('/getTaskScoreByTaskIdAndStudentId', loader.get('/getTaskScoreByTaskIdAndStudentId'))

// 测试
app.get('/getTestByPage', loader.get('/getTestByPage'))
app.post('/insertTest', loader.get('/insertTest'))
app.post('/updateTest', loader.get('/updateTest'))
app.post('/deleteTest', loader.get('/deleteTest'))
app.post('/getTestByChapterId', loader.get('/getTestByChapterId'))

//测试分数
app.get('/getTestScoreByPage', loader.get('/getTestScoreByPage'))
app.post('/checkAndInsertTestAnswer', loader.get('/checkAndInsertTestAnswer'))
app.post('/getTestScoreByChapterIdAndStudentId', loader.get('/getTestScoreByChapterIdAndStudentId'))
app.post('/deleteTestScoreByChapterIdAndStudentId', loader.get('/deleteTestScoreByChapterIdAndStudentId'))

// 测试答案
app.get('/getTestAnswerByPage', loader.get('/getTestAnswerByPage'))
app.post('/getTestAnswerByChapterId', loader.get('/getTestAnswerByChapterId'));

// 班级
app.get('/queryClassByPage', loader.get('/queryClassByPage'))
app.get('/getAllClass', loader.get('/getAllClass'))
app.post('/insertClass', loader.get('/insertClass'))
app.post('/updateClass', loader.get('/updateClass'))
app.post('/deleteClass', loader.get('/deleteClass'))

// 学生
app.get('/queryStudentByPage', loader.get('/queryStudentByPage'))
app.post('/insertStudent', loader.get('/insertStudent'))
app.post('/updateStudent', loader.get('/updateStudent'))
app.post('/deleteStudent', loader.get('/deleteStudent'))

// 主题
app.post('/getAllTopic', loader.get('/getAllTopic'));
app.post('/queryTopicByTitle', loader.get('/queryTopicByTitle'));
app.post('/insertTopic', loader.get('/insertTopic'));
app.post('/queryTopicById', loader.get('/queryTopicById'));
app.post('/deleteTopicById', loader.get('/deleteTopicById'));
app.post('/updateTopic', loader.get('/updateTopic'));
app.post('/addTopicLookOrLikeOrReply', loader.get('/addTopicLookOrLikeOrReply'));

// 回复
app.post('/getReplyByTopicId', loader.get('/getReplyByTopicId'));
app.post('/insertReply', loader.get('/insertReply'));
app.post('/updateReply', loader.get('/updateReply'));
app.post('/deleteReplyById', loader.get('/deleteReplyById'));
app.post('/insertTopicLike', loader.get('/insertTopicLike'));
app.post('/deleteTopicLike', loader.get('/deleteTopicLike'));
app.post('/getTopicLike', loader.get('/getTopicLike'));

// 章
app.get('/getAllChapter', loader.get('/getAllChapter'))
app.post('/getChapterById', loader.get('/getChapterById'))
app.post('/insertChapter', loader.get('/insertChapter'))
app.post('/updateChapter', loader.get('/updateChapter'))
app.post('/deleteChapter', loader.get('/deleteChapter'))
app.get('/getChapterByPage', loader.get('/getChapterByPage'))
app.get('/getChapterAndSection', loader.get('/getChapterAndSection'))

// //节
app.get('/getAllSection', loader.get('/getAllSection'))
app.get('/getSectionMaxId', loader.get('/getSectionMaxId'))
app.post('/getSectionById', loader.get('/getSectionById'))
app.post('/insertSection', loader.get('/insertSection'))
app.post('/updateSection', loader.get('/updateSection'))
app.post('/deleteSection', loader.get('/deleteSection'))
app.get('/getSectionByPage', loader.get('/getSectionByPage'))

// 案例
app.post('/getAllCase', loader.get('/getAllCase'))
app.get('/getCaseByEnshrine', loader.get('/getCaseByEnshrine'))
app.post('/getCaseById', loader.get('/getCaseById'))
app.get('/getCaseByPage', loader.get('/getCaseByPage'))
app.post('/insertCase', loader.get('/insertCase'))
app.post('/updateCase', loader.get('/updateCase'))
app.post('/deleteCase', loader.get('/deleteCase'))
app.post('/addStudentEnshrine', loader.get('/addStudentEnshrine'))
app.post('/minusStudentEnshrine', loader.get('/minusStudentEnshrine'))
app.post('/getStudentAndEnshrine', loader.get('/getStudentAndEnshrine'))

// 管理员
app.get('/getAdminByPage', loader.get('/getAdminByPage'))
app.post('/insertAdmin', loader.get('/insertAdmin'))
app.post('/updateAdmin', loader.get('/updateAdmin'))
app.post('/deleteAdmin', loader.get('/deleteAdmin'))

// 敏感词
app.get('/getAllBan', loader.get('/getAllBan'))
app.post('/insertBan', loader.get('/insertBan'))
app.post('/deleteBan', loader.get('/deleteBan'))

app.post('/login', loader.get('/login'))
app.post('/changePwd', loader.get('/changePwd'))

app.post('/upload', uploadSingle.single("file"), loader.get('/upload'))

// 监听
app.listen(8080, function () {
  console.log('success listen...80');
});


