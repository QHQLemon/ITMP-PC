## IT项目管理mooc网站

> 本项目是以IT项目管理为教学内容的MOOC网站，主要实现用户管理，班级管理，课程管理，章管理，节管理，试卷管理，测试管理，讨论管理，公告管理，案例管理等模块。并完成网站页面设计，视频在线播放、学生在线测试、提交作业等功能。
</br>

> 项目架构：
* 1.使用vue框架，以及vue-router构建单页面应用 
* 2.使用vue+webpack构建项目环境

</br> 

> 技术要求：
* 1.项目采用node(express框架)+mysql来搭建后台服务器 
* 2.使用vue框架，vue-router搭建项目路由
* 3.使用vue生命周期函数，实现数据获取等功能
* 4.使用jwt实现token的签发与认证，并使用HTML Parser对评论区等输入框提交的数据进行标签过滤，防御XSS攻击
</br>
</br>

### 1.网站结构
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/ITMP%E7%BD%91%E7%AB%99.png">

### 2.页面详情
#### 2-1主页面：网站主页面
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/001.png" >
</br>
</br>

#### 2-2 课程
> 课程详情：包含IT项目管理课程简介、先修课程、教学目标和参考资料等内容

<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/002.png" >
</br>

> 课程内容：展示章节目录以及资料，点击可进入课程视频播放页面或下载资料

<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/003.png" >
</br>


> 视频播放界面

<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/005.png" >
</br>


> 测试/作业：展示各章节测试和作业，点击可进入详情，并提交答案
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/018.png" >
</br>

> 作业详情
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/019.png" >
</br>

> 测试详情
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/020.png" >
</br>
</br>

#### 2-3 案例：展示案例以及推荐案例，还可点击不同模块展示不同模块的案例，点击案例可进入案例详情和收藏案例
> 案例展示
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/006.png" >
</br>

> 案例详情

<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/008.png" >
</br></br>

#### 2-4 讨论区：分为教师答疑区、班级讨论区和综合讨论区，可以发表/修改/删除/查询主题，可在主题之下发表评论以及评论回复
>评论展示
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/009.png" >
</br>

> 主题详情

<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/010.png" >
</br></br>


#### 2-5 公告：展示课程公告，教师还可以添加/修改/删除公告
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/011.png" >
</br></br>

#### 2-6 登录界面：可分为学生登录和管理员（教师）登录
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/023.png" >
</br></br>

#### 2-7 个人中心：学生和教师登录后展示，包含发表过的主题/评论/收藏过的案例
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/012.png" >
</br></br>

#### 2-8 后台管理模块：只有教师登录后才会显示(只有教师有权限进行操作)
> 用户管理：包含班级管理、学生管理、管理员管理等，每个模块都有对应的增删改查功能
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/013.png" >
</br>

> 课程管理：包含章管理、节管理，每个模块都有对应的增删改查功能
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/014.png" >
</br>

> 案例管理：可以增加、删除、修改、查询案例
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/017.png" >
</br>

> 作业管理：包含作业管理、作业成绩管理等，每个模块都有对应的增删改查功能，还有批改作业的功能
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/015.png" >
</br>

> 测试管理：包含试题管理、答案管理、测试结果管理等，每个模块都有对应的增删改查功能
<img src="https://github.com/QHQLemon/ITMP-PC/blob/master/intro-img/016.png" >
















## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
