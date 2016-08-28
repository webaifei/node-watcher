const path = require('path');
const watcher = require('../index');
var destPath = path.resolve(__dirname,process.argv.slice(2)[0]);

watcher(destPath, function (change){
  console.log(change)
})
