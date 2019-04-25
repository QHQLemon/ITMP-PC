import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import Course from '@/view/Course'
import Home from '@/view/Home'
import Notice from '@/view/Notice'
import Case from '@/view/Case'
import Learn from '@/view/Learn'
import CaseMsg from '@/view/CaseMsg'
import CourseContentMsg from '@/view/CourseContentMsg'
import Discussion from '@/view/Discussion'
import User from '@/view/User'
import Task from '@/view/Task'
import Test from '@/view/Test'
import TestSubmit from '@/view/TestSubmit'
import TaskSubmit from '@/view/taskSubmit'
import Personal from '@/view/Personal'
import LoginPage from '@/view/LoginPage'
import NoRight from '@/view/noRight'



import CourseContent from '@/view/course/CourseContent'
import CourseOutline from '@/view/course/CourseOutline'
import CourseHomework from '@/view/course/CourseHomework'
import NoticeAdd from '@/view/notice/NoticeAdd'
import NoticeEdit from '@/view/notice/NoticeEdit'
import DisLeft from '@/components/discussion/disLeft'
import DisDetails from '@/components/discussion/disDetails'
import DisAdd from '@/components/discussion/disAdd'
import DisEdit from '@/components/discussion/disEdit'
import ClassMsg from '@/components/user/classMsg'
import StudentMsg from '@/components/user/studentMsg'
import AdminMsg from '@/components/user/adminMsg'
import TaskMsg from '@/components/task/taskMsg'
import TaskScoreMsg from '@/components/task/taskScoreMsg'
import TaskCorrect from '@/components/task/taskCorrect'
import TaskItem from '@/components/task/taskItem'
import TestScoreMsg from '@/components/test/testScoreMsg'
import TestMsg from '@/components/test/testMsg'
import TestAnswerMsg from '@/components/test/testAnswerMsg'
import CaseMsgRight from '@/components/case/caseMsgRight'
import CaseAdd from '@/components/case/caseAdd'
import CaseEdit from '@/components/case/caseEdit'
import CaseLeft from '@/components/case/caseLeft'
import CaseDetail from '@/components/case/caseDetail'


import ChapterMsg from '@/components/courseContent/chapterMsg'
import ChapterAdd from '@/components/courseContent/chapterAdd'
import ChapterEdit from '@/components/courseContent/chapterEdit'

import SectionMsg from '@/components/courseContent/sectionMsg'
import SectionAdd from '@/components/courseContent/sectionAdd'
import SectionEdit from '@/components/courseContent/sectionEdit'
// import { toUnicode } from 'punycode';

import store from '../store/store'





Vue.use(Router)


let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DefaultPage',
      component: DefaultPage,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        },
        {
          path: 'noRight',
          name: 'noRight',
          component: NoRight
        },
        {
          path: 'loginPage',
          name: 'loginPage',
          component: LoginPage
        },
        {
          path: 'noticeAdd',
          name: 'noticeAdd',
          component: NoticeAdd
        },
        {
          path: 'noticeEdit/:notice_id',
          name: 'noticeEdit',
          component: NoticeEdit
        },
        {
          path: 'notice',
          name: 'notice',
          component: Notice
        },
        {
          path: 'case',
          name: 'case',
          component: Case,
          redirect: '/case/caseLeft',
          children: [
            {
              path: 'caseLeft',
              name: 'caseLeft',
              component: CaseLeft
            },
            {
              path: 'caseDetail/:case_id',
              name: 'caseDetail',
              component: CaseDetail
            }
          ]
        },
        {
          path: 'caseMsg',
          name: 'caseMsg',
          component: CaseMsg,
          redirect: '/caseMsg/caseMsgRight',
          children: [
            {
              path: 'caseMsgRight',
              name: 'caseMsgRight',
              component: CaseMsgRight
            },
            {
              path: 'caseAdd',
              name: 'caseAdd',
              component: CaseAdd
            },
            {
              path: 'caseEdit/:case_id',
              name: 'caseEdit',
              component: CaseEdit
            },
          ]
        },
        {
          path: 'courseContentMsg',
          name: 'courseContentMsg',
          component: CourseContentMsg,
          redirect: '/courseContentMsg/chapterMsg',
          children: [
            {
              path: 'chapterMsg',
              name: 'chapterMsg',
              component: ChapterMsg
            },
            {
              path: 'chapterAdd',
              name: 'chapterAdd',
              component: ChapterAdd
            },
            {
              path: 'chapterEdit/:chapter_id',
              name: 'chapterEdit',
              component: ChapterEdit
            },
            {
              path: 'sectionMsg',
              name: 'sectionMsg',
              component: SectionMsg
            },
            {
              path: 'sectionAdd',
              name: 'sectionAdd',
              component: SectionAdd
            },
            {
              path: 'sectionEdit/:section_id',
              name: 'sectionEdit',
              component: SectionEdit
            }
          ]
        },
        {
          path: 'taskSubmit/:chapter_id',
          name: 'taskSubmit',
          component: TaskSubmit
        },
        {
          path: 'testSubmit/:chapter_id',
          name: 'testSubmit',
          component: TestSubmit
        },
        {
          path: 'discussion',
          name: 'discussion',
          component: Discussion,
          redirect: '/discussion/disLeft/0',
          children: [
            {
              path: 'disLeft/:sort',
              name: 'disLeft',
              component: DisLeft
            }, {
              path: 'disDetails/:topic_id',
              name: 'disDetails',
              component: DisDetails
            }, {
              path: 'disAdd',
              name: 'disAdd',
              component: DisAdd
            }, {
              path: 'disEdit/:topic_id',
              name: 'disEdit',
              component: DisEdit
            }
          ]
        },
        {
          path: 'user',
          name: 'user',
          component: User,
          redirect: '/user/classMsg',
          children: [
            {
              path: 'classMsg',
              name: 'classMsg',
              component: ClassMsg
            },
            {
              path: 'studentMsg',
              name: 'studentMsg',
              component: StudentMsg
            },
            {
              path: 'adminMsg',
              name: 'adminMsg',
              component: AdminMsg
            }
          ]
        }, {
          path: 'task',
          name: 'task',
          component: Task,
          redirect: '/task/taskMsg',
          children: [
            {
              path: 'taskMsg',
              name: 'taskMsg',
              component: TaskMsg
            },
            {
              path: 'taskScoreMsg',
              name: 'taskScoreMsg',
              component: TaskScoreMsg
            },
            {
              path: 'taskCorrect',
              name: 'taskCorrect',
              component: TaskCorrect
            },
            {
              path: 'taskItem/:chapter_id',
              name: 'taskItem',
              component: TaskItem
            }
          ]
        },
        {
          path: 'test',
          name: 'test',
          component: Test,
          redirect: '/test/testMsg',
          children: [
            {
              path: 'testMsg',
              name: 'testMsg',
              component: TestMsg
            },
            {
              path: 'testScoreMsg',
              name: 'testScoreMsg',
              component: TestScoreMsg
            },
            {
              path: 'testAnswerMsg',
              name: 'testAnswerMsg',
              component: TestAnswerMsg
            }
          ]
        },
        {
          path: 'course',
          name: 'course',
          component: Course,
          redirect: '/course/courseOutline',
          children: [
            {
              path: 'courseContent',
              name: 'courseContent',
              component: CourseContent
            },
            {
              path: 'courseOutline',
              name: 'courseOutline',
              component: CourseOutline
            },
            {
              path: 'courseHomework',
              name: 'courseHomework',
              component: CourseHomework
            },
          ]
        }
      ]
    },
    {
      path: '/learn/:section_id',
      name: 'learn',
      component: Learn
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  let userRouter = store.state.userRouter;
  let nextFlag = false;
  console.log(userRouter);
  if(userRouter == 'all'){
    next();
  }else{
    for(let i = 0; i < userRouter.length; i++){
      if(userRouter[i] == to.name){
        nextFlag = true;
        next();
        break;
      }
    }
    console.log( nextFlag, to.name);
    if(!nextFlag){
      if(userRouter.length < 10){
        next({name: 'loginPage'})
      }else{
        next({name: 'noRight'})
      }
    }
  }

})
router.afterEach((to, from, next) => {
})

export default router;
