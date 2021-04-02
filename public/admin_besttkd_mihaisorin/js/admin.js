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
  const auth = firebase.auth();


  auth.onAuthStateChanged(firebaseUser => {
    //console.log("inside!")
    if (firebaseUser) {
        $('body').css('display', 'block');
    }else{
        $('body').css('display', 'none');
        window.location = "index.html";
    }
});

function logout(){
    auth.signOut();
  }


//   window.onload = function () {
//     var oldURL = document.referrer;
//     return console.log(document.referrer);
// };
//   $(function () {
//     $(".trigger_popup_fricc").click(function(){
//        $('.hover_bkgr_fricc').show();
//     });
//     $('.hover_bkgr_fricc').click(function(){
//         $('.hover_bkgr_fricc').hide();
//     });
//     $('.popupCloseButton').click(function(){
//         $('.hover_bkgr_fricc').hide();
//     });
// });

$(function() {
    var days = [ '', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata','Duminica'];
    var luni = [ 'ian', 'feb', 'mar', 'apr', 'mai', 'iun','iul', 'aug', 'sept', 'oct', 'nov', 'dec'];
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
var MessageRef1 = firebase.database().ref('AdminLog/');
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
});