/**
 * 接收一个监听文件夹的路径
 */
const path = require('path');
const fs = require('fs');

//监听文件夹中的变化
function watcher(destPath, callback) {
  var _res = {};

  if (!destPath) {
    console.error('an destnation path needed!');
    process.exit(0)
  } 

  fs.watch(destPath, function(event, filename) {

    var filePath = path.join(destPath, filename),
      ext = path.extname(filename),
      stat = fileStat(filePath),
      isExist = !stat.errno;
    // 如果是change 并且 这个文件还在 就是update
    if (event == 'change' && isExist) {
      _res = {
        fileName: filename,
        curFileName: filename,
        type: 'update',
        ext: ext
      }
    } else if (event == 'rename' && !isExist) {
      // 删除的情况
      _res = {
        fileName: filename,
        curFileName: filename,
        type: 'remove',
        ext: ext
      }
    } else if (event == 'rename' && isExist) {
        // 新增的情况
      if (stat.birthtime.getTime() == stat.mtime.getTime() && stat.birthtime
        .getTime() == stat.ctime.getTime()) {
        _res = {
          fileName: filename,
          curFileName: filename,
          type: 'touch',
          ext: ext
        }

      } else { //改文件名
        _res = {
          fileName: filename,
          curFileName: filename,
          type: 'modify',
          ext: ext
        }
      }
    }
    callback && callback(_res)
  })
}
/**
 * 文件是否存在
 */
function fileStat(filename) {
  var res;
  try {
    res = fs.statSync(filename)
  } catch (err) {
    res = err;
  }
  return res;
}

module.exports = watcher;
