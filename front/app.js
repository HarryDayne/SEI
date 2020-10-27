console.log("This works");
function senddata(){
    console.log('Button clicked')
    var i=document.getElementById('in');
    var d=i.value;
    console.log(d);
    var data={d};
    const options={
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    };
    fetch('/api',options)
}