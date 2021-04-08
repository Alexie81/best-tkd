$(function(){
    //Clicuri totale {
      firebase.database().ref('clicuri').on('value', click => {
        document.getElementById('totale_clicuri_full_firebase_database_all').innerText = click.val().nrTotal;
      });
    //}End
})