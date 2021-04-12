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
    if (firebaseUser) {
      console.log(firebaseUser.uid)
        $('body').css('display', 'block');
    }else{
        $('body').css('display', 'none');
        window.location = "../index.html";
    }
});


function logout(){
    auth.signOut();
  }


    // //Nr NOTIFICATIONS Site
    // var nrNot = parseInt(1);

    // firebase.database().ref('notification/site/mesaje').on('value', snap => {
    //   scores1 = snap.val();
    //   if(scores1 == null){
    //     nrNot = 1;
    // } else {
    //   var keys1 = scores1 ? Object.keys(scores1) : [];
    //   nrNot = keys1.length;
    // }
    // document.getElementById('number-of-notify').innerText = nrNot;
    // document.getElementById('here_notify2').innerText = nrNot;
  
    // for(var i=0; i<keys1.length; i++){
    //   var nume = scores1[keys1[i]].nume;
    //   var conct_op = nume + " a trimis un mesaj nou";
    //   var conct = `<a class="dropdown-item" href="options/notifications.html">${conct_op}</a>`
    //   $("#here_notify").append(conct);
    // }
    // });