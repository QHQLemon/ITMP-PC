Date.prototype.toLocaleString = function () {
  return this.getFullYear() + " 年 " + (this.getMonth() + 1) + " 月 " + this.getDate() + " 日  "
  // + (this.getHours() > 10 ? this.getHours() : '0' + this.getHours() )+ ":"
  // + (this.getMinutes() > 10 ? this.getMinutes() : '0' + this.getMinutes() )+ ":"
  // +(this.getSeconds() > 10 ? this.getSeconds() : '0' + this.getSeconds());
};

// window.onresize = function() {
//   console.log('aaaaa')
//   let client = this.getClient();
//   $(".learn-container").css({
//     height: client.clientHeight,
//   });
// };


