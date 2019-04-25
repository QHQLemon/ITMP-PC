let fs = require('fs');

let globalConfig = {};
let configs = fs.readFileSync("./server.conf");
let confArr = configs.toString().split("\r\n");
confArr.forEach((ele, index) => {
    globalConfig[ele.split("=")[0]] = ele.split("=")[1]
})



module.exports = globalConfig
