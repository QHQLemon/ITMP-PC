let mysql = require('mysql');    //引入require

function createConnection () {
  let connection = mysql.createConnection({       //配置数据库信息
    host: ' 192.168.43.223',
//     host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'lemon123456',
    database: 'itpm'
  });
  return connection;
}

module.exports.createConnection = createConnection;


