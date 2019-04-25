<template>
  <div class="page-wrapper">
    <div class="m-page-header">
      <my-header/>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="m-page-footer">
      <my-footer/>
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/header/Nav";
import MyFooter from "../components/footer/Footer";
export default {
  components: {
    MyHeader,
    MyFooter
  },
  watch: {
    // $route(to, from) {
    //   if (to.path != "/home") {
    //     $(".mm-header")
    //       .addClass("m-header")
    //       .removeClass("mm-header");
    //   } else {
    //     $(".m-header")
    //       .addClass("mm-header")
    //       .removeClass("m-header");
    //   }
    //   if (location.pathname == "/home") {
    //     $(document).on("scroll", () => {
    //       if (window.pageYOffset < 10) {
    //         $(".m-header")
    //           .addClass("mm-header")
    //           .removeClass("m-header");
    //       } else {
    //         $(".mm-header")
    //           .addClass("m-header")
    //           .removeClass("mm-header");
    //       }
    //     });
    //   } else {
    //     $(document).off("scroll");
    //   }
    // }
  }
};

// $(document).on("scroll", () => {
//   if (window.pageYOffset < 10 && location.pathname == "/home") {
//     $(".m-header")
//       .addClass("mm-header")
//       .removeClass("m-header");
//   } else {
//     $(".mm-header")
//       .addClass("m-header")
//       .removeClass("mm-header");
//   }
// });

// $(document).ready(function () {
//   if( location.pathname != "/home"){
//     $(".mm-header")
//       .addClass("m-header")
//       .removeClass("mm-header");
//   }
// })

</script >

<style scoped>
.page-wrapper {
  position: relative;
  min-height: 100%;
}
.m-page-header {
  width: 100%;
  height: 80px;
}
.m-page-footer {
  height: 100px;
}
.main {
  min-height: 600px;
}
</style>
