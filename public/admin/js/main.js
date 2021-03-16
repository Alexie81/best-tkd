
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
    projectId: "best-tkd",
    storageBucket: "best-tkd.appspot.com",
    messagingSenderId: "628384403687",
    appId: "1:628384403687:web:b5a8575851c9abbe2ad242",
    measurementId: "G-RV2YCV0YTZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  var currentUser = null;


  function signIn(){
    var email = document.getElementById('user_input');
    var password = document.getElementById('pass_input');

    //console.log("intra");

    auth.signOut();

    //console.log("acum e acii!");
    if(email.value != "" && password.value != ""){
        //console.log("agaaaaain");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.then(user => {
                //console.log(user.uid)
                swal({
                    title: 'Logare cu succes !',
                    text: 'Tocmai ati intrat in contul dvs !',
                    icon: 'success',
                    timer: 1500
                });
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