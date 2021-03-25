(function ($) {

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    document.getElementById('validate-form').addEventListener('submit', function(e){
        e.preventDefault();
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

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
    projectId: "best-tkd",
    storageBucket: "best-tkd.appspot.com",
    messagingSenderId: "628384403687",
    appId: "1:628384403687:web:b5a8575851c9abbe2ad242",
    measurementId: "G-RV2YCV0YTZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var passwordResetEmail = "alexie.popescu2019@yahoo.com";
var user_input = document.getElementById('user_input');
function reset_pass_check_email_log_default_firebase(){
     if(user_input.value === String(passwordResetEmail)){
        auth.sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
            document.getElementById('container-login100-form-btn').style.display = 'none';
            document.getElementById('w-full').style.display = 'none';
            document.getElementById('user_email_for_reset_sent_verification').style.display = 'none';
            document.getElementById('text-to-show-full').style.display = 'block';


            swal({
                title: 'Link trimis cu succes!',
                text: 'Emailul pentru resetarea parolei, pe adresa "mihaisorin74@yahoo.com"!',
                icon: 'success',
                timer: 3000
            });


        }).catch(e => swal({
                title: 'Eroare !',
                text: 'Emailul este incorect',
                icon: 'warning',
                timer: 1500
            })
        );
     }
}