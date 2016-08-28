## node-detector

<p style="color:red">this is deprecated! use (chokidar)[https://github.com/paulmillr/chokidar] instead.</p>
> 监听文件夹中的变化

nodejs 原生的fs.watch api监听事件中拿到的事件类型只有两种：
1. 文件新建，删除，修改文件名 对应事件类型：rename
2. 文件内容的修改 对应事件类型：change

提供的信息远没有我们想知道的多

> node-watcher 使用方法

```
const watch = require('node-detector')

watch(folderPath, function (change){
  console.log(changes);
})

```
说明：

| name | type | meaning | examples |
|------|------|------|-------|
| folderPath | string | 要监听变化的文件夹路径 | './test' |
| callback | function | 监听文件夹发生变化的回调函数, 参数是变化的文件的信息，是一个数组 | function (change){}|


change
```

  {
    filename:'xxx',//发生变化的文件名，如果是修改文件名，指的是原来的文件名，新的文件名为curFileName
    curFileName:'',//如果是修改文件名 指新的文件名 其他情况为空字符串
    type:'update',//变化的类型 update | touch | remove | rename
    ext:'' //变化的文件名后缀 文件类型

  }

```
