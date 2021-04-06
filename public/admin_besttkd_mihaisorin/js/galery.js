var storage = firebase.storage();
var storageRef = firebase.storage().ref();
var i = 0;
//Start code
storageRef.child('imagini').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        // console.log('Imagine noua: '+imageRef.toString())
        displayImage(imageRef);
    });
});

//Function to convert:""

function displayImage(images){
    images.getDownloadURL().then(function(url){
        console.log(url);
    });
}

$(function(){
    console.clear()
});

function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
      $('#after-image-upload').removeClass('dis');
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
    $('#after-image-upload').addClass('dis');
  }

//   $(function(){
//     // var elementM  = document.getElementById('after-image-upload');
//     // elementM.style.display = 'none';
//     if(document.getElementsByClassName('file-upload-input')[0].value !== null){
//         $('#after-image-upload').addClass('dis');
//     } else {
//         $('#after-image-upload').reomClass('dis');
//     }
//   });
// document.getElementById('dsfsfdsdfs').addEventListener('onchange', function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("sdads")
// });

function uploadImageFirebase(){
    if(document.getElementById('titlu').value !== "" && document.getElementById('descriere').value !== ""){
    const ref = firebase.storage().ref();
    const file = document.querySelector('#dsfsfdsdfs').files[0];
    const nameFile = file.name;
    var tit1 = null;
    var descTd = null;
    console.log(nameFile);
    const metadata = {
      contentType:file.type
    }
    st1 = storageRef.child('imagini/'+nameFile)
    console.log(st1)
    const task = storageRef.child("images/"+nameFile).put(file, metadata);
    task
    .then(snapshot => {
        snapshot.ref.getDownloadURL();
        tit1 = document.getElementById('titlu').value;
        descTd = document.getElementById('descriere').value;
    })
    .then(url => {
    firebase.database().ref('imagini').child(nameFile).set({
        url: url,
        titlu: tit1,
        desc: descTd
    });
    });
} else {
    if(document.getElementById('titlu').value === ""){
    Swal.fire({
        icon: 'error',
        title: 'Completeaza titlul !',
        text: '',
        footer: ''
      })
    } else if(document.getElementById('descriere').value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Completeaza descrierea!',
            text: '',
            footer: ''
          })
    }
}
}