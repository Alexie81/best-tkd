

(function ($) {

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    document.getElementById('validate-form').addEventListener('submit', function(e){
        e.preventDefault();
        var check = true;
        signIn;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        signIn();

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

var firebaseConfig = {
    apiKey: "AIzaSyAibhDPLow9k_2r1t-mWXhqOAbhOf8Wj2E",
    authDomain: "best-tkd.firebaseapp.com",
    databaseURL: "https://best-tkd-default-rtdb.firebaseio.com",
    projectId: "best-tkd",
    storageBucket: "best-tkd.appspot.com",
    messagingSenderId: "628384403687",
    appId: "1:628384403687:web:b5a8575851c9abbe2ad242",
    measurementId: "G-RV2YCV0YTZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth();
  const auth = firebase.auth();
  var currentUser = null;


  function signIn(){
    var email = document.getElementById('user_input');
    var password = document.getElementById('pass_input');

    //console.log("intra");

    auth.signOut();

    // window.addEventListener("beforeunload", function (e) {
    //     auth.signOut();
    // });

    //console.log("acum e acii!");
    if(email.value != "" && password.value != ""){

        //console.log("agaaaaain");
        const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        promise 
        .then(user => {
                console.log(user.uid)
                swal({
                    title: 'Logare cu succes !',
                    text: 'Tocmai ati intrat in contul dvs !',
                    icon: 'success',
                    timer: 1500
                });
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
        
        
        
        
                var conct_date_time = day1 + "-" + luniName + "-" + t.getFullYear();
                console.log(conct_date_time+", "+dayName)
            var MessageRef = firebase.database().ref('AdminLog/');
            // var MessageRef2 = firebase.database().ref('AdminLog/'+ conct_date_time);
            MessageRef.child(conct_date_time+"/"+ora1).set({
                admin:"Mihai Sorin"
            });
            MessageRef.child(conct_date_time+"/NumeZi").set({
                numeZi:dayName
            });
                // setTimeout(function(){MessageRef1.child(conct_date_time+"/"+ora1+"/").set({
                //     ora1:ora1
                // });
                // }, 200);

                
                setTimeout(function(){
                    window.location = 'admin.html';
                }, 1600);
            })
            .catch(e => swal({
                title: 'Eroare !',
                text: 'Datele de conectare sunt invalide !',
                icon: 'warning',
                timer: 1500
            })
        );
     } else {
        // swal({
        //     title: 'Eroare !',
        //     text: 'Va rog introduceti parola sau emailul !',
        //     icon: 'warning',
        //     timer: 1500
        // })
     }
}

function vrify(){
    
}