var storage = firebase.storage();
var storageRef = firebase.storage().ref();
var i = 0;
var currentUrl = null;
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
    .then(snapshot =>snapshot.ref.getDownloadURL())
    .then(url => {
        tit1 = document.getElementById('titlu').value;
        descTd = document.getElementById('descriere').value;
        var nameFile1 = nameFile.replace(/[&\.\\#,+()$~%'":*?<>{}-]/g,'_');
    firebase.database().ref('imagini').child(nameFile1).set({
        url: url,
        titlu: tit1,
        descriere: descTd
    });
    window.location = 'galerie.html'
    console.log(url)
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
var MessageRef = firebase.database().ref('imagini');

MessageRef.once('value', snap => {
    values = snap.val();
    keys = values ? Object.keys(values) : [];

    for(var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var url = values[k].url;
        var titlu = values[k].titlu;
        var descriere = values[k].descriere;
        var nameKey = keys[i];

        var optionHtmlInnerAll = `<li>
        <img src="${url}">
        <a data-effect='mfp-3d-unfold' href="${url}" class="openEditImgPopup effect"><p>${titlu}</p></a>
        <div class="editable_buttons">
          <button data-toggle="tooltip" title="Editeaza" id="${nameKey}" onclick="edit_nodejs(this)">
            <i class="material-icons">
              border_color
            </i>
          </button>

          <button data-toggle="tooltip" title="Sterge" id="sterge_${nameKey}" onclick="delete_nodejs(this)">
            <i class="material-icons">
              cancel
            </i>
          </button>

          <p class="descriereFirebase" style="display:none">${descriere}</p>
        </div>
      </li>`;

        $('#imagini-list').append(optionHtmlInnerAll);
    }
    $('.openEditImgPopup').magnificPopup({
        gallery: {
            enabled: false
        },
        image: {
              cursor: null,
        },
        type: 'image',
        //delay removal by X to allow out-animation
        removalDelay: 700,
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure',
                    'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true
  
    });

    
});

function delete_nodejs(id){
    var id_main = id.id.replace('sterge_', '');
    console.log(id_main);
    if (window.confirm('Sunteti sigur ca vreti sa stergeti aceasta imagine ?')){
            firebase.database().ref('imagini/'+id_main).remove();
            console.log('success');
            setTimeout(function(){window.location  = 'galerie.html'}, 1000)
        } else {return false;}
}
var Element232 = null;
function edit_nodejs(editElement){
    var id_edit_main = editElement.id;
    $(".login-register-form-edit").modal();
    console.log(id_edit_main);
    MessageRef.once('value', edit => {
        //id.img = file_image_edit
        values_edit = edit.val();
        keys_edit = values_edit ? Object.keys(values_edit) : [];
        Element232 = id_edit_main;
        // for(var e = 0; e < keys_edit.length; e++) {
        //     var ke = keys_edit[e];
            var img_url = values_edit[id_edit_main].url;
            var titlu_edit = values_edit[id_edit_main].titlu;
            var titlu_edit_desc = values_edit[id_edit_main].titlu;
            var descriere_edit_desc = values_edit[id_edit_main].descriere;

            document.getElementById('file_image_edit').src = img_url;
            document.getElementById('titlu_edit').innerText = titlu_edit;
            document.getElementById('titlu_edit_desc').value = titlu_edit_desc;
            document.getElementById('descriere_edit_desc').value = descriere_edit_desc;
        // }
    });
}

function save_edits_nodejs_firebase(){
    if(document.getElementById('titlu_edit_desc').value !== "" && document.getElementById('descriere_edit_desc').value !== ""){
        const ref = firebase.storage().ref();
        const file = document.querySelector('#file_edit_manager').files[0];
        // const nameFile = file.name;

        var tit1 = null;
        var descTd = null;
        if(file !== undefined){
        const metadata = {
          contentType:file.type
        }
        const task = storageRef.child("images/"+Element232).put(file, metadata);
        task
        .then(snapshot =>snapshot.ref.getDownloadURL())
        .then(url => {
            tit1 = document.getElementById('titlu_edit_desc').value;
            descTd = document.getElementById('descriere_edit_desc').value;
            currentUrl = url;
            // var nameFile1 = nameFile.replace(/[&\.\\#,+()$~%'":*?<>{}-]/g,'_');
        firebase.database().ref('imagini').child(Element232).set({
            url: url,
            titlu: tit1,
            descriere: descTd
        });
        setTimeout(function(){window.location  = 'galerie.html'}, 1000)
        console.log(url)
        });
    } else {
        st1 = storageRef.child('imagini/'+Element232)
        console.log(st1)
        tit1 = document.getElementById('titlu_edit_desc').value;
            descTd = document.getElementById('descriere_edit_desc').value;
            console.log(currentUrl)
            // var nameFile1 = nameFile.replace(/[&\.\\#,+()$~%'":*?<>{}-]/g,'_');\




                //UPDATE
                //UPDATE





        firebase.database().ref('imagini').child(Element232).update({
            titlu: tit1,
            descriere: descTd
        });
        setTimeout(function(){window.location  = 'galerie.html'}, 1000)
    }

} else {
        if(document.getElementById('titlu_edit_desc').value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Completeaza titlul !',
            text: '',
            footer: ''
          })
        } else if(document.getElementById('descriere_edit_desc').value === ""){
            Swal.fire({
                icon: 'error',
                title: 'Completeaza descrierea!',
                text: '',
                footer: ''
              })
        }
    }
}








