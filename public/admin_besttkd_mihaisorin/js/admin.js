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