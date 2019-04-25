import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    noticeList: [],
    // userRouter: 'all'
    userRouter: ['home', 'caseLeft', 'loginPage', 'notice', 'disLeft', 'courseOutline',
    'courseHomework', 'courseContent', 'personal', 'learn', 'testSubmit', 'taskSubmit', 'caseDetail', 'disDetails', 'disAdd', 'disEdit', 'noRight']
    // userRouter:  ['home', 'caseLeft', 'loginPage', 'notice', 'disLeft', 'courseOutline', 'courseHomework', 'courseContent']
  },
  mutations: {
    initNoticeList(state, noticeList) {
      state.noticeList = noticeList;
    },
    initUserRouter(state, userRouter){
      state.userRouter = userRouter;
    },
    deleteNotice(state, notice_id) {
      console.log(state.noticeList)
      state.noticeList.forEach((item, index) => {
        if (item.notice_id == notice_id) {
          console.log(item.notice_id, notice_id, index)
          state.noticeList.splice(index, 1)
        }

      })
    },

    // findNotice(state, notice_id) {
    //   state.noticeList.forEach((item, index) => {
    //     if (item.notice_id == notice_id) {
    //       console.log(item, item.notice_id, notice_id, index);
    //       state.noticeWillEdit = item;
    //     }
    //   })
    // }
  }
})
