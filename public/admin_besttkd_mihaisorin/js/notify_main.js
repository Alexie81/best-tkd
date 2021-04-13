
$(function(){
    //Nr NOTIFICATIONS Site
    firebase.database().ref('notification/site/mesaje/primite').on('value', snap => {
      scores1 = snap.val();
      $("#here_notify_main").empty();
      $("#notify_main_citite").empty();
      if(scores1 == null){

    } else {
      var keys1 = scores1 ? Object.keys(scores1) : [];
      for(var i=0; i<keys1.length; i++){
        var nume = scores1[keys1[i]].nume;
        if(scores1[keys1[i]].status === 'necitit') {
        var conct_op = nume + " a trimis un mesaj nou";
        var conct = `<div class="col-sm-12">
        <div data-typeId="necitit" class="alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert" id="${keys1[i]}" style="cursor: pointer;" onclick="open_modal_send(this, event)">
        <button type="button" class="close font__size-18">
        <span aria-hidden="true" style="width: 230px; margin-top:3px; text-align: right; margin-right: -30px;">
          <i style=" color: #000; font-size: 12px;">${keys1[i]}</i>
        </span>
        <span class="sr-only">Close</span>
      </button>
          <i class="start-icon  fa fa-info-circle faa-shake animated"></i>
          ${nume} a trimis un mesaj nou
        </div>

      </div>`
        $("#here_notify_main").append(conct);
        } else if(scores1[keys1[i]].status === 'citit'){
            var conct1 = `<div class="col-sm-12">
            <div data-typeId="citit" class="alert fade alert-simple text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert" id="${keys1[i]}" onclick="open_modal_send(this, event)" style="cursor: pointer;">
            <button type="button" class="close font__size-18">
        <span aria-hidden="true" style="width: 230px; text-align: right; margin-right: -30px;">
          <i style=" color: #000; font-size: 12px;">${keys1[i]}</i>
        </span>
        <span class="sr-only">Close</span>
      </button>
            <div>
      <button type="button" class="close font__size-18" data-columns="${keys1[i]}">
        <span aria-hidden="true" style="width: 100px; text-align: right; margin-right: -30px;">
          <i class="fa fa-trash-o"></i>
        </span>
        <span class="sr-only">Close</span>
      </button>
      </div>
              <i class="start-icon  fa fa-info-circle faa-shake animated"></i>
              ${nume} a trimis un mesaj nou
            </div>
    
          </div>`
            $("#notify_main_citite").append(conct1);
        } else {

        }
      } 
    }
    });
});

function read_main_thread(element){
  Swal.fire({
    icon: 'warning',
    title: 'Doriti sa stergeti ?',
    text: "Nu veti mai putea recupera datele sterse.",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Da, sterge',
    cancelButtonText: 'Nu, anuleaza'
  }).then((result) => {
    if (result.isConfirmed) {
      firebase.database().ref('notification/site/mesaje/primite/'+element.dataset.columns).remove()
    }
  })
}

function open_modal_send(element, event){
    var elements = document.getElementsByClassName('no_close_button_strong');
    if ( event.target != element || event.target == elements )  {
        console.log('hello')
        return false; //notice this line
    } 
    event = event || window.event;
    stopPropagation(event);    
    var elementId = element.id;
    console.log(element.dataset.typeid)
    if(element.dataset.typeid !== "citit"){
        
        $('#email_sender').modal('show');
        document.getElementById('mark_read').style.display = 'block';
        document.getElementById('mark_read1').style.display = 'none';
    var id_root = elementId;

        document.getElementById('mark_read').addEventListener('click', function(){
            firebase.database().ref('notification/site/mesaje/primite/'+element.id).update({
                      status: 'citit'
            }).then(function(){
                $('#email_sender').modal('hide');
                window.location = 'notifications.html';
            }).catch(error => {
                firebase.database().ref('notification/site/erori').push({
                    eroare: textStatus,
                    eroare_parse: errorThrown
                });
            });
            
        })
    // console.log(id_root)
    firebase.database().ref('notification/site/mesaje/primite/' + id_root).once('value', snap => {
        var input_name = document.getElementById('nume_prev_e');
        var input_email = document.getElementById('email_prev_e');
        var input_message = document.getElementById('message_prev_e');
        var values = snap.val(); 
        input_name.value = values.nume;
        input_email.value = values.email;
        input_message.value = values.mesaj;
        document.getElementById('here_1_1').innerText = id_root;
    });
    } else {
    document.getElementById('mark_read').style.display = 'none';
    document.getElementById('mark_read1').style.display = 'block';
    document.getElementById('mark_read1').addEventListener('click', function() {
    firebase.database().ref('notification/site/mesaje/primite/'+element.id).update({
        status: 'necitit'
        }).then(function(){
        $('#email_sender').modal('hide');
        window.location = 'notifications.html';
        }).catch(error => {
        firebase.database().ref('notification/site/erori').push({
             eroare: textStatus,
             eroare_parse: errorThrown
        });
        });
    });
    $('#email_sender').modal('show');
    var id_root = elementId;
    // console.log(id_root)
    firebase.database().ref('notification/site/mesaje/primite/' + id_root).once('value', snap => {
        var input_name = document.getElementById('nume_prev_e');
        var input_email = document.getElementById('email_prev_e');
        var input_message = document.getElementById('message_prev_e');
        var values = snap.val(); 
        input_name.value = values.nume;
        input_email.value = values.email;
        input_message.value = values.mesaj;
    });
}
}
function stopPropagation(event) {
    if (typeof event.stopPropagation == "function") {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
  }

  function send_ajax_email(){
    
        if(document.getElementById('nume_prev_e_send').value == ""){
            swal({
                icon: 'error',
                title: 'Completati emailul !',
                text: '',
                footer: ''
              })
        } else if(document.getElementById('subject_prev_e_send').value == ""){
            swal({
                icon: 'error',
                title: 'Completati subiectul !',
                text: '',
                footer: ''
              })
        } else if(document.getElementById('message_prev_e_send').value == ""){
            swal({
                icon: 'error',
                title: 'Completati mesajul!',
                text: '',
                footer: ''
              })
        } else {
     var values = {
        'email'     : $('#nume_prev_e_send').val(),
        'subject'     : $('#subject_prev_e_send').val(),
        'message'     : $('#message_prev_e_send').val()
    };
    document.getElementById('nume_prev_e_send').value = "";
    document.getElementById('subject_prev_e_send').value = "";
    document.getElementById('message_prev_e_send').value = "";
    $('#email_sender_main').modal('hide');
    var rootElement = document.documentElement
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
     $.ajax({
            url: "../js/email_sender_post.php",
            type: "POST",
            data: values,
            success: function (response) {
                // NOTIFICATION PUSH FIREBASE
                var t  = new Date();
                var dayName = days[t.getDay()];
                var luniName = luni[t.getMonth()];
                var day1 = ""+t.getDate()+"";
                if(day1.length === 1){
                    day1 = "0"+t.getDate()+"";
                } else {
                    day1 = ""+t.getDate()+"";
                }
        
        
            //TIME{
                    var hour1 = ""+t.getHours()+"";
        
                    if(hour1.length === 1){
                    hour1 = "0"+t.getHours()+"";
                    } else {
                    hour1 = ""+t.getHours()+"";
                    }
        
                    var minutes1 = ""+t.getMinutes()+"";
                    if(minutes1.length === 1){
                    minutes1 = "0"+t.getMinutes()+"";
                    } else {
                    minutes1 = ""+t.getMinutes()+"";
                    }
        
                    var sec1 = ""+t.getSeconds()+"";
        
                    if(sec1.length === 1){
                    sec1 = "0"+t.getSeconds()+"";
                    } else {
                    sec1 = ""+t.getSeconds()+"";
                    }
        
        
                    //GENERIC DATA CONCATENATE
                    var ora1 = hour1+ ":" + minutes1 + ":" + sec1;
            //}
        
           var idRoot =  document.getElementById('here_1_2').innerText;
           firebase.database().ref('notification/site/mesaje/primite/'+idRoot).update({
            status: 'citit'
            })
        
                var conct_date_time = day1 + "-" + luniName + "-" + t.getFullYear();
                console.log(conct_date_time+", "+dayName)
                firebase.database().ref('notification/site/mesaje/trimise').child(conct_date_time+", "+dayName+", "+ora1).set({
                    email: values.email,
                    subiect: values.subject,
                    mesaj: values.message
                });
                // END
               let timerInterval
               swal({
                 title: 'Mesajul dumneavoastra a fost trimis !',
                 text: 'Mesajul dumneavoastra a fost trimis la adresa de email ' + values.email,
                 icon: 'success',
                 timer: 2000,
                 timerProgressBar: true,
                 willClose: () => {
                   clearInterval(timerInterval)
                 }
               }).then((result) => {
               })
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
               firebase.database().ref('notification/site/erori').push({
                eroare: textStatus,
                eroare_parse: errorThrown
            });
            }
        });
        //END
    }
  }


  $(function() {
    firebase.database().ref('notification/site/mesaje/trimise').on('value', trmi => {
      value = trmi.val();
      $("#notify_main_trimise").empty();
      var keys = value ? Object.keys(value) : [];
      for(var i=0; i<keys.length; i++){
        var email = value[keys[i]].email;
        var conct = `<div class="col-sm-12">
        <div data-typeId="trmimis" class="alert fade alert-simple alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert" style="cursor: pointer;">
        <button type="button" class="close font__size-18">
        <span aria-hidden="true" style="width: 230px; margin-top:3px; text-align: right; margin-right: -30px;">
          <i style=" color: #000; font-size: 12px;">${keys[i]}</i>
        </span>
        <span class="sr-only">Close</span>
      </button>

      <button type="button" class="close font__size-18" data-columns="${keys[i]}" onclick="read_main_thread_trm(this)">
        <span aria-hidden="true" style="width: 250px; text-align: left; margin-right: -30px;">
          <i class="fa fa-trash-o"></i>
        </span>
        <span class="sr-only">Close</span>
      </button>
          <p style="display:inline; color: #000;">Catre: </p> <p style="display:inline; color: #000; font-weight: 600;">${email}</p>
        </div>

      </div>`
        $("#notify_main_trimise").append(conct);
      }
    });
  });

  function read_main_thread_trm(elementTrm){
    Swal.fire({
      icon: 'warning',
      title: 'Doriti sa stergeti ?',
      text: "Nu veti mai putea recupera datele sterse.",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Da, sterge',
      cancelButtonText: 'Nu, anuleaza'
    }).then((result) => {
      if (result.isConfirmed) {
        firebase.database().ref('notification/site/mesaje/trimise/'+elementTrm.dataset.columns).remove()
      }
    })
  }