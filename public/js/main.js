// $(function(){
// var btn = document.getElementsByClassName("btn-white");
// for (var i=0; i<1000; i++) {
// setTimeout(function() {
// btn.style.cssText = " border-top-right-radius: 9px; border-bottom-left-radius:9px;";
// }, 2000);
// setTimeout(function() {
//     btn.style.cssText = "border-top-left-radius: 9px; border-bottom-right-radius:9px;";
// }, 4000);
// }
// });
var vizitatori = null;

// FIREBASE

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


//$(function(){
//var text_initial1 = document.getElementById('max_70').innerText;
//var text_new = null;
//var myDiv = document.getElementById('max_70').innerText;
//var newlength = 70;
//var sumL =  null;
//myDiv = document.getElementById('max_70').innerText.length;
//if(myDiv => newlength){
////console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial1.substring(0,newlength);
////console.log(text_new)
//document.getElementById('max_70').innerText = text_new;
//} else {
//
//}
//});


//Separate functions for text
//function max_230(selector, maxLength) {
//    var element = document.querySelector(selector),
//        truncated = element.innerText;
//
//    if (truncated.length > maxLength) {
//        truncated = truncated.substr(0,maxLength) + '...';
//    }
//    return truncated;
//}
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

//Now, let's condition all text from page :)


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
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial.substring(0,newlength);
//console.log(text_new)
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
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial.substring(0,newlength);
//console.log(text_new)
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
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength);//text_new = text_initial2;
//text_new = text_initial2.substring(2, text_initial2.length+1);
setTimeout(function(){console.log(text_initial2)}, 200);
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
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength);//text_new = text_initial2;
//text_new = text_initial2.substring(2, text_initial2.length+1);
setTimeout(function(){console.log(text_initial3)}, 200);
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
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength);//text_new = text_initial2;
//text_new = text_initial2.substring(2, text_initial2.length+1);
setTimeout(function(){console.log(text_initial4)}, 200);
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
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength);//text_new = text_initial2;
//text_new = text_initial2.substring(2, text_initial2.length+1);
//setTimeout(function(){console.log(text_initial4)}, 200);
//var text_conct1_final = text_initial4.substring(2, newlength)
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
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength);//text_new = text_initial2;
//text_new = text_initial2.substring(2, text_initial2.length+1);
//setTimeout(function(){console.log(text_initial4)}, 200);
//var text_conct1_final = text_initial4.substring(2, newlength)
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
//console.log("Este mai mare");
//sumL = myDiv - newlength;
//text_new = text_initial2.substring(0,newlength);//text_new = text_initial2;
//text_new = text_initial2.substring(2, text_initial2.length+1);
//setTimeout(function(){console.log(text_initial4)}, 200);
//var text_conct1_final = text_initial4.substring(2, newlength)
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
    clicks += 1;
    var date = new Date();
    var currentHour = date.getHours();
    var delimiter = `0`;
    var delimiterDouble = `00`;
    var delimiterImpButDo = `24`;
    firebase.database().ref('clicuri').once('value', click => {
        if(currentHour === delimiter || currentHour == delimiterDouble || currentHour === delimiterImpButDo){
            console.log('DA')
        } else {
            console.log('NU')
        }
        console.log(click.val().h24);
    });
    console.log(currentHour);
});
