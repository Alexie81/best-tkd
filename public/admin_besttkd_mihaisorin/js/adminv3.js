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
        window.location = "../index.html";
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

// window.addEventListener("beforeunload", function (e) {
//     logout();
// });