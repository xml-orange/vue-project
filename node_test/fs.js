'use strict'

var getname = require('./hello')

var fs = require('fs')

var s = 'tom'

getname(s)


// 读取文件
//  异步
fs.readFile('aaa.text','utf-8',function ( err, data){
    if(err){
        console.log('err')
    }else{
        console.log(data)
    }
})
fs.readFile('love.png','utf-8',function ( err, data){
    if(err){
        console.log('err')
    }else{
        console.log(data.length + ' bytes')
        var text = Buffer.from(data,'utf-8') //将图片所得 二进制字符串 转化下转化成 Buffer数值
        console.log(text)
    }
})
//  同步
try{
    var shuju = fs.readFileSync('love.png','utf-8')
    // console.log(shuju)
}catch (err) {
    console.log(err)
}

//  获取文件信息
// 异步
fs.stat('aaa.text',function(err,stat){
    if(err){
        console.log(err)
    }else{
        if(stat.isFile()){

            console.log('文件大小:'+ stat.size)
            console.log('创建时间:'+ stat.birthtime)
            console.log('时间:'+ stat.mtime)
        }
    }
})

setTimeout(function() {
    console.log('setTimeout');
})

new Promise(function(resolve) {
    console.log('promise');
}).then(function() {
    console.log('then');
})

console.log('console');



