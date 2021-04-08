$(function(){
firebase.database().ref('vizitatori').on('value', snap =>  {
    var vizFirebaseD = snap.val().nrTotal;
    document.getElementById('total_vizitatori_full_vb_firebase_database').innerText = vizFirebaseD;
});
});
