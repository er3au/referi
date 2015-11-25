var fs = require('fs');
fs.readFile('test.log', 'utf8', function(err, data){
    if(err){
        throw err;
    }
    parseLog(data);
});

function parseLog(data){
    var logObj = {};
    var arr = data.split('\n');
    for(var i = 0; i < arr.length; i++){
        var str = arr[i];
        if(str.indexOf(':')==-1){
            continue;
        }
        var kv = str.split(':');
        if(logObj.hasOwnProperty(kv[0])){
            if(!(logObj[kv[0]] instanceof Array)){
                var tmp = logObj[kv[0]];
                logObj[kv[0]] = [];
                logObj[kv[0]].push(tmp);
            }

            logObj[kv[0]].push(kv[1]);
        }else{
            logObj[kv[0]] = kv[1];
        }
    }

    console.dir(logObj);
}