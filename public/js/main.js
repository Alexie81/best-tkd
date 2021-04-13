
var vizitatori = null;

// FIREBASE

var _0x1bc2=['76847PSonJt','277091dhDDEf','G-RV2YCV0YTZ','42104JfZEfH','48846QmfOJb','initializeApp','11oWgoIt','1LIuGBm','150178mWzfIU','429272EwhHeR','best-tkd.firebaseapp.com','AIzaSyAibhDPLow9k_2r1t-mWXhqOAbhOf8Wj2E','1ZHwRRU','1:628384403687:web:b5a8575851c9abbe2ad242','best-tkd','591695UQpqpd','628384403687'];var _0x555a90=_0x4b77;(function(_0x5d2ec2,_0x2d643a){var _0xd894bc=_0x4b77;while(!![]){try{var _0x11ca40=parseInt(_0xd894bc(0x188))*-parseInt(_0xd894bc(0x18b))+parseInt(_0xd894bc(0x185))*parseInt(_0xd894bc(0x18c))+-parseInt(_0xd894bc(0x186))+-parseInt(_0xd894bc(0x18d))+parseInt(_0xd894bc(0x191))*parseInt(_0xd894bc(0x18e))+parseInt(_0xd894bc(0x189))+parseInt(_0xd894bc(0x183));if(_0x11ca40===_0x2d643a)break;else _0x5d2ec2['push'](_0x5d2ec2['shift']());}catch(_0x427a66){_0x5d2ec2['push'](_0x5d2ec2['shift']());}}}(_0x1bc2,0x3e8f7));function _0x4b77(_0x392afe,_0x1f0749){_0x392afe=_0x392afe-0x181;var _0x1bc2b1=_0x1bc2[_0x392afe];return _0x1bc2b1;}var firebaseConfig={'apiKey':_0x555a90(0x190),'authDomain':_0x555a90(0x18f),'databaseURL':'https://best-tkd-default-rtdb.firebaseio.com','projectId':_0x555a90(0x182),'storageBucket':'best-tkd.appspot.com','messagingSenderId':_0x555a90(0x184),'appId':_0x555a90(0x181),'measurementId':_0x555a90(0x187)};firebase[_0x555a90(0x18a)](firebaseConfig);

/* ==========================================
            SMOOTH SCROLLING
=============================================*/

$(function () {

    // animate on scroll
    new WOW().init();
});
$(function () {

    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

})

// Close mobile menu on click
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
            $("#logo_to_hide1").fadeOut();

        } else {
            // show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
            $("#logo_to_hide1").fadeIn();
        }
    });
    if ($(this).scrollTop() < 50) {
        // hide nav
        $("nav").removeClass("vesco-top-nav");
        $("#back-to-top").fadeOut();
        document.getElementById('logo_to_hide1').style.display = "none";
    } else {
        // show nav
        $("nav").addClass("vesco-top-nav");
        $("#back-to-top").fadeIn();
        $("#logo_to_hide1").fadeIn();
    }
});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
})

function simulateKeyPress(character) {
      jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
    }

$(function(){
var text_initial = document.getElementById('max-206').innerText;
var text_new = null;
var myDiv = document.getElementById('max-206').innerText;
var newlength = 220;
var sumL =  null;
myDiv = document.getElementById('max-206').innerText.length;
if(myDiv => newlength){
//console.log("Este mai mare");
sumL = myDiv - newlength;
text_new = text_initial.substring(0,newlength);
//console.log(text_new)
document.getElementById('max-206').innerText = text_new;
} else {

}
});

////All variables what i need for the text limiter
//document.querySelector('p').innerText = truncateText('p', 107);
var title_initial = document.getElementById('title_change').innerText;
var title_main_initial = document.getElementById('title_main_h1').innerText;
var text_initial = document.getElementById('max-206').innerText;
var text_initial1 = document.getElementById('max_70').innerText;
var text_initial2 = document.getElementById('max_55').innerText;
var text_initial3 = document.getElementById('max_56').innerText;
var text_initial4 = document.getElementById('max_57').innerText;
var text_initial5 = document.getElementById('max_256').innerText;
var text_initial6 = document.getElementById('max_211').innerText;
var text_initial7 = document.getElementById('max_102').innerText;
var text_initial_gen = null;
var title_initial_gen = null;
//End variables



//TITLE
//=>MAX 14 FOR P no FOR H1
function title_no_modify(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('title_change').innerText;
var newlength = 14;
var sumL =  null;
myDiv = document.getElementById('title_change').innerText.length;
if(myDiv == newlength){
title_initial = document.getElementById('title_change').innerText;
}
if(myDiv >= newlength){
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial.substring(0,newlength);
//console.log(text_new)
setTimeout(function(){document.getElementById('title_change').innerText = title_initial;}, 100);
} else{

}
} else{
}
}


// =>MAX 14 with p element after title_main_initial
function title_no_modify1(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('title_main_h1').innerText;
var newlength = 14;
var sumL =  null;
myDiv = document.getElementById('title_main_h1').innerText.length;
if(myDiv == newlength){
title_main_initial = document.getElementById('title_main_h1').innerText;
}
if(myDiv >= newlength){

var conct_all = title_main_initial + '<p id="title_change" onkeydown="title_no_modify(event)" style="text-transform: uppercase;">Best TaeKwondo</p>';
conct_all = conct_all.substring(0, 29);
setTimeout(function(){document.getElementById('title_main_h1').innerHTML = conct_all;}, 100);
} else{

}
} else{
}
}

//END TITLE

//First text => max 230
function max_220(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('max-206').innerText;
var newlength = 220;
var sumL =  null;
myDiv = document.getElementById('max-206').innerText.length;
if(myDiv == newlength){
text_initial = document.getElementById('max-206').innerText;
}
if(myDiv >= newlength){

setTimeout(function(){document.getElementById('max-206').innerText = text_initial;}, 100);
} else{

}
} else{
}
}
//End First Text


//2ND TEXT => max 70


function max_70(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('max_70').innerText;
var newlength = 70;
var sumL =  null;
myDiv = document.getElementById('max_70').innerText.length;
if(myDiv == newlength){
text_initial1 = document.getElementById('max_70').innerText;
//console.log("Este mai mare");
sumL = myDiv - newlength;
text_new = text_initial1.substring(0,newlength);
//console.log(text_new)
document.getElementById('max_70').innerText = text_new;
}
if(myDiv >= newlength){
//console.log("Este mai mare");
setTimeout(function(){document.getElementById('max_70').innerText = text_initial1;}, 100);
} else{

}
} else{
}
}

//End 2ND Text



//3RD TEXT => max 70


function max_55(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('max_55').innerText;
var newlength = 70;
var sumL =  null;
myDiv = document.getElementById('max_55').innerText.length;
if(myDiv == newlength){
text_initial2 = document.getElementById('max_55').innerText;
//console.log("Este mai mare");
sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength - 1);
//console.log(text_new)
document.getElementById('max_55').innerText = text_initial2;
}
if(myDiv >= newlength){

// setTimeout(function(){console.log(text_initial2)}, 200);
var text_conct1_final = text_initial2.substring(3, newlength)
setTimeout(function(){document.getElementById('max_55').innerHTML = '<strong style="color:rgba(0, 65, 179, .6);">TAE</strong>' + text_conct1_final}, 100);
} else{

}
} else{
}
}

//End 3RD Text


//4TH TEXT => max 70


function max_56(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('max_56').innerText;
var newlength = 70;
var sumL =  null;
myDiv = document.getElementById('max_56').innerText.length;
if(myDiv == newlength){
text_initial3 = document.getElementById('max_56').innerText;
//console.log("Este mai mare");
sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength - 1);
//console.log(text_new)
document.getElementById('max_56').innerText = text_initial3;
}
if(myDiv >= newlength){

// setTimeout(function(){console.log(text_initial3)}, 200);
var text_conct1_final = text_initial3.substring(4, newlength)
setTimeout(function(){document.getElementById('max_56').innerHTML = '<strong style="color:rgba(0, 65, 179, .6);">KWON</strong>' + text_conct1_final}, 100);
} else{

}
} else{
}
}

//End 4TH Text


//5TH TEXT => max 40


function max_57(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('max_57').innerText;
var newlength = 40;
var sumL =  null;
myDiv = document.getElementById('max_57').innerText.length;
if(myDiv == newlength){
text_initial4 = document.getElementById('max_57').innerText;
//console.log("Este mai mare");
sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength - 1);
//console.log(text_new)
document.getElementById('max_57').innerText = text_initial4;
}
if(myDiv >= newlength){

// setTimeout(function(){console.log(text_initial4)}, 200);
var text_conct1_final = text_initial4.substring(2, newlength)
setTimeout(function(){document.getElementById('max_57').innerHTML = '<strong style="color:rgba(0, 65, 179, .6);">DO</strong>' + text_conct1_final}, 100);
} else{

}
} else{
}
}

//End 5TH Text



//6TH TEXT => max 256 {

function max_256(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('max_256').innerText;
var newlength = 256;
var sumL =  null;
myDiv = document.getElementById('max_256').innerText.length;
if(myDiv == newlength){
text_initial5 = document.getElementById('max_256').innerText;
//console.log("Este mai mare");
sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength - 1);
//console.log(text_new)
document.getElementById('max_256').innerText = text_initial5;
}
if(myDiv >= newlength){

setTimeout(function(){document.getElementById('max_256').innerHTML = text_initial5}, 100);
} else{

}
} else{
}
}

//} End 6TH Text


//7TH TEXT => max 211 {

function max_211(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('max_211').innerText;
var newlength = 211;
var sumL =  null;
myDiv = document.getElementById('max_211').innerText.length;
if(myDiv == newlength){
text_initial6 = document.getElementById('max_211').innerText;
//console.log("Este mai mare");
sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength - 1);
//console.log(text_new)
document.getElementById('max_211').innerText = text_initial6;
}
if(myDiv >= newlength){

setTimeout(function(){document.getElementById('max_211').innerHTML = text_initial6}, 100);
} else{

}
} else{
}
}

//} End 7TH Text


//8TH TEXT => max 102 {

function max_102(event){
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById('max_102').innerText;
var newlength = 102;
var sumL =  null;
myDiv = document.getElementById('max_102').innerText.length;
if(myDiv == newlength){
text_initial7 = document.getElementById('max_102').innerText;
//console.log("Este mai mare");
sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength - 1);
//console.log(text_new)
document.getElementById('max_102').innerText = text_initial7;
}
if(myDiv >= newlength){

setTimeout(function(){document.getElementById('max_102').innerHTML = text_initial7}, 100);
} else{

}
} else{
}
}

//} End 8TH Text


//GENERIC FUNCTION FOR ALL TEXTS WITH PARAMETERS
function max_generic(event, elementId, max_gen_number){
//event = event.keyCode
//elementId = id for element
//max_gen_number = max number of characters
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){
var text_new = null;
var myDiv = document.getElementById(elementId).innerText;
var newlength = max_gen_number;
myDiv = document.getElementById(elementId).innerText.length;
if(myDiv == newlength){
text_initial_gen = document.getElementById(elementId).innerText;
document.getElementById(elementId).innerText = text_initial_gen;
}
if(myDiv >= newlength){
setTimeout(function(){document.getElementById(elementId).innerHTML = text_initial_gen}, 100);
} else{}

} else{}

}
//END GENERIC FUNCTION



//GENERIC FUNCTION FOR ALL TITLES WITH PARAMETERS
function max_title_generic(event, elementId, max_gen_number, title, color_title, status, elementType){
//event   (no type)    = event.keyCode
//elementId   (string)    = id for element
//max_gen_number   (integer)    = max number of characters
//title   (string)    = id of text who is in title, or element
//color_title   (string)    = color of title text
//status   (string)    = after / before
//elementType   (string)    = type of element who is in title with id=id{mp1-look generic}
var keycode = (event.which) ? event.which : event.keyCode;
if(keycode !== 8){

//Variables
var text_new = null;
var myDiv = document.getElementById(elementId).innerText;
var newlength = max_gen_number;
var final_generic_concatenate_text_with_element = null;
var title_text_for_generic_concatenate = title;
//End

myDiv = document.getElementById(elementId).innerText.length;
if(myDiv == newlength){
title_initial_gen = document.getElementById(elementId).innerText;
document.getElementById(elementId).innerText = title_initial_gen;
}
if(myDiv >= newlength){
if(status === "after"){
final_generic_concatenate_text_with_element = title_initial_gen + "<"+elementType+" style='color:"+color_title+"'>"+title_text_for_generic_concatenate+"</"+elementType+">";
setTimeout(function(){document.getElementById(elementId).innerHTML = final_generic_concatenate_text_with_element}, 100);
} else if(status === "before") {
final_generic_concatenate_text_with_element = "<"+elementType+" style='color:"+color_title+"'>"+title_text_for_generic_concatenate+"</"+elementType+">" + title_initial_gen;
setTimeout(function(){document.getElementById(elementId).innerHTML = final_generic_concatenate_text_with_element}, 100);
} else {
//Nothing
}

} else{
//Nothing
}

} else{
//Nothing
}

}
//END GENERIC_TITLES FUNCTION





window.onload = function() {
    firebase.database().ref('vizitatori').once('value', snap =>  {
        var vizFirebaseD = snap.val().nrTotal;
        vizitatori = vizFirebaseD + 1;
        firebase.database().ref('vizitatori').update({
            nrTotal: vizitatori
        });
    });
};

// CLICURI
var clicks = null;
$('body').on('click', function(){
    firebase.database().ref('clicuri').once('value', click => {
            clicks = click.val().nrTotal + 1;
            firebase.database().ref('clicuri').update({
                nrTotal: clicks
            });
    });
});

//JSON AJAX HTTP REQUEST CLICKS


//TODO{

// inregistrare minut
// trash word
// actualizare thread

//}


document.getElementById('contact_email').addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if(document.getElementById('name_full').value == ""){
        swal({
            icon: 'error',
            title: 'Completeaza numele!',
            text: '',
            footer: ''
          })
    } else if(document.getElementById('email_inp').value == ""){
        swal({
            icon: 'error',
            title: 'Completeaza emailul!',
            text: '',
            footer: ''
          })
    } else if(document.getElementById('message_inp').value == ""){
        swal({
            icon: 'error',
            title: 'Completeaza mesajul!',
            text: '',
            footer: ''
          })
    } else {
 var values = {
    'name'     : $('#name_full').val(),
    'email'     : $('#email_inp').val(),
    'message'     : $('#message_inp').val()
};
document.getElementById('name_full').value = "";
document.getElementById('email_inp').value = "";
document.getElementById('message_inp').value = "";
var rootElement = document.documentElement
rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
 $.ajax({
        url: "email_sender.php",
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
    
    
    
    
            var conct_date_time = day1 + "-" + luniName + "-" + t.getFullYear();
            // console.log(conct_date_time+", "+dayName)
            firebase.database().ref('notification/site/mesaje/primite').child(conct_date_time+", "+dayName+", "+ora1).set({
                nume: values.name,
                email: values.email,
                mesaj: values.message,
                status: 'necitit'
            });
            // END
           let timerInterval
           swal({
             title: 'Mesajul dumneavoastra a fost trimis !',
             text: 'Mesajul dumneavoastra a fost trimis la adresa de email contact.besttkd@gmail.com',
             icon: 'success',
             timer: 4000,
             timerProgressBar: true,
             willClose: () => {
               clearInterval(timerInterval)
             }
           }).then((result) => {
           })
        },
        error: function(jqXHR, textStatus, errorThrown) {
        //    console.log(textStatus, errorThrown);
           firebase.database().ref('notification/site/erori').push({
            eroare: textStatus,
            eroare_parse: errorThrown
        });
        }
    });
    //END
}
});










