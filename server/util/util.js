require('./htmlparser')



// 包装返回数据
function packData(static, desc, data) {
  return JSON.stringify({
    static,
    desc,
    data
})
}
function ppData(res, total) {
  return JSON.stringify({
    data: {
      total: total,
      rows: res,
    }
})
}


function dealHTML (str) {
  let dealStr = "";
  try {
      HTMLParser(str, {
          start: function(tag, attrs, unary){ //开始便签，标签、属性数组、是否单标签
              if(tag == 'script' || tag == 'style' || tag == 'link' || tag == 'iframe' || tag == 'frame'){
                  return false
              }
              dealStr += "<" + tag;
              attrs.forEach((ele, index) => {
                  let deleAttr = /on[a-zA-Z]+/g;
                  if(!deleAttr.test(ele.name)){
                      dealStr += " " + ele.name + "='" + ele.escaped + "'"
                  }
              })
              dealStr += ">"
          },
          end: function(tag){
              if(tag == 'script' || tag == 'style' || tag == 'link' || tag == 'iframe' || tag == 'frame'){
                  return false
              }
              dealStr +=  "</" + tag + ">"
          },
          chars: function(text){
              console.log('reslut', text)
              dealStr += text;
          },
          comment: function(text){
              dealStr += "<!--" + text + "-->"
          }
      })
      return dealStr
  } catch (error) {
      console.log(error)
  }
}



module.exports = {
  packData,
  ppData,
  dealHTML
}

