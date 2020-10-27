var express = require('express')
var app = express();

app.use(express.static('front'));
app.use(express.json());

var server = app.listen(8000, ()=> {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Express app listening at http://%s:%s', host, port)
})

app.post('/api',(req,res)=>{
    console.log(req.body.d);
})
