var express = require('express')
var app = express();

var port = process.env.PORT || 80;

app.use(express.static('front'));
app.use(express.json());

var server = app.listen(port, ()=> {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Express app listening at http://%s:%s', host, port)
})

app.post('/api',(req,res)=>{
    console.log(req.body.d);
    var spawn = require("child_process").spawn;
    var process = spawn('python',["./hello.py"] );
    process.stdout.on('data', function(data) { 
        console.log(data.toString()); 
    } );
})

