let fs = require('fs')
let url = require('url')
let path = new Map();

function upload(request, response){
  console.log(request.file);
  response.write(JSON.stringify({path: request.file.path}))
  response.end()
}

path.set('/upload', upload);


function getVideo(req, res){

  // let path = '../file/da9fb27b548985ca4a79fdd9e0d15d67.mp4';
  // let stat = fs.statSync(path);
  // let fileSize = stat.size;
  // let range = req.headers.range;

  // console.log('getgeteget')
  // console.log(stat)

  // // fileSize 3332038

  // if (range) {
  //     //有range头才使用206状态码

  //     let parts = range.replace(/bytes=/, "").split("-");
  //     let start = parseInt(parts[0], 10);
  //     let end = parts[1] ? parseInt(parts[1], 10) : start + 999999;

  //     // end 在最后取值为 fileSize - 1
  //     end = end > fileSize - 1 ? fileSize - 1 : end;

  //     let chunksize = (end - start) + 1;
  //     let file = fs.createReadStream(path, { start, end });
  //     let head = {
  //         'Content-Range': `bytes ${start}-${end}/${fileSize}`,
  //         'Accept-Ranges': 'bytes',
  //         'Content-Length': chunksize,
  //         'Content-Type': 'video/mp4',
  //     };
  //     res.writeHead(206, head);
  //     file.pipe(res);
  // } else {
  //     let head = {
  //         'Content-Length': fileSize,
  //         'Content-Type': 'video/mp4',
  //     };
  //     res.writeHead(200, head);
  //     fs.createReadStream(path).pipe(res);
  // }
  let path = url.parse(request.url, true).query.path;
  console.log(path);
  console.log('asdlkajsdfkaksdfak')
  try{
    var data = fs.readFileSync('./' + path);
    console.log(data)
    response.writeHead(200);
    response.write(data);
    response.end();
  }catch{
    response.writeHead(404);
    response.end()
  }
}

path.set('/getVideo', getVideo);

module.exports.path = path;
