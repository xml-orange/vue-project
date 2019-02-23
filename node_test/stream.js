'use strict'

var fs = require('fs')

var rs = fs.createReadStream('aaa.text','utf-8')

rs.on('data',function(chunk) {
     console.log(chunk)
})

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

