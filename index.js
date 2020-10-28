var express = require('express');
var fs=require('fs');
var app = express();
var fileupload = require('express-fileupload')

var port = process.env.PORT || 80;

app.use(express.static('front'));
app.use(express.json());
app.use(fileupload());

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
    res.end();
})

app.post('/saveImage', (req, res) => {
    const fileName = req.files.myFile.name
    console.log(fileName);
  const path = __dirname + '/images/' + fileName
  var image=req.files.myFile;
  image.mv(path, (error) => {
    if (error) {
      console.error(error)
      res.writeHead(500, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({ status: 'error', message: error }))
      return
    }

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({ status: 'success', path: '/img/houses/' + fileName }))
  })
  })

