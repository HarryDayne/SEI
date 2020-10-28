console.log("This works");


function up(event){
   console.log("Image uploaded");
   var ia = document.getElementById('uploadedimage');
   const files = event.target.files
  const formData = new FormData()
  formData.append('myFile', files[0])

  fetch('/saveImage', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.path)
  })
  .catch(error => {
    console.error(error)
  })
}
