// auth.onAuthStateChanged(firebaseUser => {
//   if (firebaseUser) {
//       $('body').css('display', 'block');
//    } else {
//       $('body').css('display', 'none');
//       window.location = "../index.html";
//   }
// });

var storage = firebase.storage();
var storageRef = firebase.storage().ref();
var i = 0;
var currentUrl = null;
storageRef.child('imagini').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        displayImage(imageRef);
    });
});
function displayImage(images){
    images.getDownloadURL().then(function(url){
        console.log(url);
    });
}


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
    Swal.fire({
      title: 'Sunteti sigur vreti sa stergeti aceasta imagine ?',
      icon: 'warning',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Da`,
      cancelButtonText: `Anuleaza`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
            firebase.database().ref('imagini/'+id_main).remove();
            console.log('success');
            setTimeout(function(){window.location  = 'galerie.html'}, 1000)
          } else if (result.isDenied) {
            return false;
          }
        })
}
var Element232 = null;
function edit_nodejs(editElement){
    var id_edit_main = editElement.id;
    $(".login-register-form-edit").modal();
    console.log(id_edit_main);
    MessageRef.once('value', edit => {
        values_edit = edit.val();
        keys_edit = values_edit ? Object.keys(values_edit) : [];
        Element232 = id_edit_main;
            var img_url = values_edit[id_edit_main].url;
            var titlu_edit = values_edit[id_edit_main].titlu;
            var titlu_edit_desc = values_edit[id_edit_main].titlu;
            var descriere_edit_desc = values_edit[id_edit_main].descriere;

            document.getElementById('file_image_edit').src = img_url;
            document.getElementById('titlu_edit').innerText = titlu_edit;
            document.getElementById('titlu_edit_desc').value = titlu_edit_desc;
            document.getElementById('descriere_edit_desc').value = descriere_edit_desc;
    });
}

function save_edits_nodejs_firebase(){
    if(document.getElementById('titlu_edit_desc').value !== "" && document.getElementById('descriere_edit_desc').value !== ""){
        const ref = firebase.storage().ref();
        const file = document.querySelector('#file_edit_manager').files[0];
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
















function save_edits_nodejs_firebase_link(){
  if(document.getElementById('titlu_edit_desc_link').value !== "" && document.getElementById('descriere_edit_desc_link').value !== "" && document.getElementById('link_edit_desc').value !== ""){
    firebase.database().ref('videouri').once('value', snap => {
      scores1 = snap.val();
      var keys = scores1 ? Object.keys(scores1) : [];
        nrV = keys.length + 1;
        var ytVTitle = document.getElementById('titlu_edit_desc_link').value;
        var ytVDescription = document.getElementById('descriere_edit_desc_link').value;
        var ytUrl = document.getElementById('link_edit_desc').value;
    firebase.database().ref('videouri').child('VideoYt-'+nrV).set({
              titlu: ytVTitle,
              descriere: ytVDescription,
              url: ytUrl
        })
        .then(function(){
          disableScreen();
          document.getElementById('loader-main-div').style.display = 'block';
          setTimeout(function(){window.location = 'galerie.html'; $('file-upload-btn').click(false)}, 1000)
        })
    });
} else {
      if(document.getElementById('titlu_edit_desc_link').value === ""){
      Swal.fire({
          icon: 'error',
          title: 'Introduceti titlul !',
          text: '',
          footer: ''
        })
      } else if(document.getElementById('descriere_edit_desc_link').value === ""){
          Swal.fire({
              icon: 'error',
              title: 'Introduceti descrierea !',
              text: '',
              footer: ''
            })
      } else if(document.getElementById('link_edit_desc').value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Introduceti linkul !',
            text: '',
            footer: ''
          })
    }
}
  }


// $(function(){
// var channelId = "UCXXdvD9X3Vqllmg3OuGR7Ag";
// var apiKeyYt = "AIzaSyASqIbBdEtNpaHRK5sDqC22-y4FDeMal1M";
// var videosUrl = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId="+channelId + "&maxResults=50&key=" + apiKeyYt;
// var ajax = new XMLHttpRequest();
// ajax.open('GET', videosUrl, true);
// ajax.send();
// ajax.onreadystatechange = function() {
//   if(this.readyState == 4 && this.status == 200){
//     console.log(this.responseText);
//     var json = JSON.parse(this.responseText);
//     var videos = json.items;
//     for(var i=0; i != videos.length - 1; i++){
//       var ytUrl  = "https://www.youtube.com/watch?v=" + videos[i].id.videoId;
//       var ytVTitle = videos[i].snippet.title;
//       var ytVDescription = videos[i].snippet.description;
//       var k1 = i + 1;
//       firebase.database().ref('videouri').child('VideoYt-'+k1).update({
//         titlu: ytVTitle,
//         descriere: ytVDescription,
//         url: ytUrl
//       });
//       console.log(ytUrl + ' -> ' + ytVTitle + '_> descriere: -> ' + ytVDescription);
//     }
//   }
// };
// });

// function readURL2(input) {
//   if (document.getElementById(input).value) {
//     $('#after-image-upload_link_1').hide()
//       $('.file-upload-content_link').show();
//       $('#after-image-upload_link').removeClass('dis');
      
//   } else {
//     removeUpload();
//     Swal.fire({
//       icon: 'error',
//       title: 'Introduceti linkul !',
//       text: '',
//       footer: ''
//     });
//   }
// }
function disableScreen() {
  // creates <div class="overlay"></div> and
  // adds it to the DOM
  var div= document.createElement("div");
  div.className += "overlay wow animated fadeIn";
  document.body.appendChild(div);
}







var MessageRef1 = firebase.database().ref('videouri');
MessageRef1.once('value', snap => {
    values = snap.val();
    keys = values ? Object.keys(values) : [];

    for(var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var url = values[k].url;
        var titlu = values[k].titlu;
        var descriere = values[k].descriere;
        var nameKey = keys[i];

        var optionHtmlInnerAll = `<li>
        <img src="yt.png">
        <a target="_blank" href="${url}"><p>${titlu}</p></a>
        <div class="editable_buttons">
          <button data-toggle="tooltip" title="Editeaza" id="${nameKey}" onclick="edit_nodejs_link(this)">
            <i class="material-icons">
              border_color
            </i>
          </button>

          <button data-toggle="tooltip" title="Sterge" id="sterge_${nameKey}" onclick="delete_nodejs_link(this)">
            <i class="material-icons">
              cancel
            </i>
          </button>

          <p class="descriereFirebase" style="display:none">${descriere}</p>
        </div>
      </li>`;

        $('#videos-list').append(optionHtmlInnerAll);
    }
    // $('.openEditImgPopup').magnificPopup({
    //     gallery: {
    //         enabled: false
    //     },
    //     image: {
    //           cursor: null,
    //     },
    //     type: 'image',
    //     removalDelay: 700,
    //     callbacks: {
    //         beforeOpen: function () {
    //             this.st.image.markup = this.st.image.markup.replace('mfp-figure',
    //                 'mfp-figure mfp-with-anim');
    //             this.st.mainClass = this.st.el.attr('data-effect');
    //         }
    //     },
    //     closeOnContentClick: true,
    //     midClick: true
  
    // });    
});
function delete_nodejs_link(id){
  var id_main = id.id.replace('sterge_', '');
  console.log(id_main);
  Swal.fire({
    title: 'Sunteti sigur vreti sa stergeti acest videoclip ?',
    icon: 'warning',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Da`,
    cancelButtonText: `Anuleaza`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
          firebase.database().ref('videouri/'+id_main).remove();
          console.log('success');
          setTimeout(function(){window.location  = 'galerie.html'}, 1000)
        } else if (result.isDenied) {
          return false;
        }
      });
}

function edit_nodejs_link(editElement){
  var id_edit_main = editElement.id;
  $(".login-register-form_link_edit").modal();
  console.log(id_edit_main);
  MessageRef1.once('value', edit => {
      values_edit = edit.val();
      keys_edit = values_edit ? Object.keys(values_edit) : [];
      Element232 = id_edit_main;
          var ytUrl = values_edit[id_edit_main].url;
          var titlu_edit = values_edit[id_edit_main].titlu;
          var titlu_edit_desc = values_edit[id_edit_main].titlu;
          var descriere_edit_desc = values_edit[id_edit_main].descriere;
          document.getElementById('keyName_link').innerText = id_edit_main;
          document.getElementById('link_edit_desc_e').value = ytUrl;
          document.getElementById('titlu_edit_link').innerText = titlu_edit;
          document.getElementById('titlu_edit_desc_link_e').value = titlu_edit_desc;
          document.getElementById('descriere_edit_desc_link_e').value = descriere_edit_desc;
  });
}

function save_edits_nodejs_firebase_link_e(){
  if(document.getElementById('titlu_edit_desc_link_e').value !== "" && document.getElementById('descriere_edit_desc_link_e').value !== "" && document.getElementById('link_edit_desc_e').value !== ""){
    firebase.database().ref('videouri').once('value', snap => {
      scores1 = snap.val();
      var keys = scores1 ? Object.keys(scores1) : [];
        nrV = keys.length + 1;
        var ytVTitle = document.getElementById('titlu_edit_desc_link_e').value;
        var ytVDescription = document.getElementById('descriere_edit_desc_link_e').value;
        var ytUrl = document.getElementById('link_edit_desc_e').value;
        var ch = document.getElementById('keyName_link').innerText;
    firebase.database().ref('videouri/').child(ch).update({
              titlu: ytVTitle,
              descriere: ytVDescription,
              url: ytUrl
        })
        .then(function(){
          disableScreen();
          document.getElementById('loader-main-div').style.display = 'block';
          setTimeout(function(){window.location = 'galerie.html'; $('file-upload-btn').click(false)}, 1000)
        })
    });
} else {
      if(document.getElementById('titlu_edit_desc_link_e').value === ""){
      Swal.fire({
          icon: 'error',
          title: 'Introduceti titlul !',
          text: '',
          footer: ''
        })
      } else if(document.getElementById('descriere_edit_desc_link_e').value === ""){
          Swal.fire({
              icon: 'error',
              title: 'Introduceti descrierea !',
              text: '',
              footer: ''
            })
      } else if(document.getElementById('link_edit_desc_e').value === ""){
        Swal.fire({
            icon: 'error',
            title: 'Introduceti linkul !',
            text: '',
            footer: ''
          })
    }
}
  }
  $(function () {
    $(".custom-close").on('click', function() {
        $('.modal').modal('hide');
    });
});

// $('.modal').click(function(event){
//   $(event.target).modal('hide');
// });