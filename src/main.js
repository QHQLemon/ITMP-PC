// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@/assets/css/main.css'
import 'axios'
import $ from 'jquery' ;
import store from'@/store/store'

// import '@/components/text/bootstrap-wysiwyg'
// import '@/components/text/jquery.hotkeys'
// import '@/components/text/index'
import '@/assets/js/main'

import '@/assets/css/bootstrap-table.css'
import 'bootstrap-table/dist/bootstrap-table'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN'

import 'bootstrap-fileinput/css/fileinput.min.css'
import 'bootstrap-fileinput/js/fileinput'
import '@/assets/js/zh'

import 'video.js/dist/video-js.css'
import 'vue-video-player/dist/vue-video-player'
import 'vue-video-player/src/custom-theme.css'

import '@/assets/js/p.js'

//

import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);





Vue.config.productionTip = false;

axios.defaults.headers.common["token"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8"; //配置请求头





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
