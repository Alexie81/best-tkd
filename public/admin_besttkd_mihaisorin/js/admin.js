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

// auth.revokeRefreshTokens(uid)
//     .then(() => {
//       return admin.auth().getUser(uid);
//     })
//     .then((userRecord) => {
//       return new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
//     })
//     .then((timestamp) => {
//       //return valid response to ios app to continue the user's login process
//   });

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

$(function(){
  var MessageRef = firebase.database().ref('AdminLog');
  var threshold = 30;
  MessageRef.once('value', snap => {
    scores = snap.val();
    var keys = scores ? Object.keys(scores) : [];
    if (keys.length > threshold) {
      let diff = keys.length - threshold;

      let sorted = []
      for (let index = 0; index !== keys.length; ++index) {
        let splitted = keys[index].split("-");
        let newDate = new Date(parseInt(splitted[2]), luniMap[splitted[1]] - 1, parseInt(splitted[0]));
        sorted.push({"pos" : index, "date" : newDate});
      }

      sorted.sort(function(a, b){
        return a["date"] - b["date"];
      });

      for (let index = 0; index !== diff; ++index) {
        MessageRef.child(keys[sorted[index]["pos"]]).remove()
          .then(function() {
            console.log("Remove succeeded.");
          })
          .catch(function(error) {
            console.log("Remove failed: " + error.message);
          });  
      }
    }
  });
});



$(function(){
  // VIZITATORI: {
  firebase.database().ref('vizitatori').on('value', viz => {
    console.log(viz.val().nrTotal)
    document.getElementById('vzitatori_totali_main_panel_admin').innerText = viz.val().nrTotal;
  });
  // }  END

  // ADMIN - LOGIN: {
    firebase.database().ref('AdminLog').on('value', adm => {
      var nrX = null;
      var keys = adm.val() ? Object.keys(adm.val()) : [];
      for(var i=0; i != keys.length; i++){
        firebase.database().ref('AdminLog').child(keys[i]).on('value', snapA => {
          var keys1 = snapA.val() ? Object.keys(snapA.val()) : [];
          for(var k=0; k != keys1.length - 1; k++){
            nrX += 1;
          }
        });
      }
      // console.log("AdminLog -> " + nrX);
      document.getElementById('admin_log_all_info_main_panel_admin').innerText = nrX;
    });
  // }  END


  firebase.database().ref('clicuri').on('value', click => {
 var clicksA = click.val().nrTotal;
    document.getElementById('clicks_all_main_panel_firebase_database').innerText = clicksA;
  });
});


