let fs = require('fs');
let globalConfig = require('./config.js')


let pathMap = new Map();

let files = fs.readdirSync('./web');
files.forEach( (ele, index) => {
    let temp = require('./web/' + ele);
    if(temp.path){
        for (let [k, v] of temp.path){
            if(pathMap.get(k) == null) {
                pathMap.set(k, v);
            } else {
                throw new Error("url path异常, url:" + k)
            }
        }
    }
})
// console.log(pathMap)
module.exports = pathMap;
