/**
 * 文件是否存在
 */
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
var destPath = process.argv.slice(2)[0];

if(!destPath){
  console.log(chalk.red('an destnation path needed!'));
  process.exit(0)
}else{
  destPath = path.resolve(__dirname, destPath);
}
isExist(destPath)
function isExist(filename){
  var res;
  try{
    res = fs.statSync(filename)
  }catch(err){
    res = err;

  }
  console.log(res)
  console.log(Object.prototype.toString.call(res) =='[object Error]')
}
