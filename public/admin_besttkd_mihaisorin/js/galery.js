var storage = firebase.storage();
var storageRef = storage.ref();
var i = 0;
//Start code
storageRef.child('imagini').listAll().then(function(result){
    result.items.forEach(function(imageRef){
        // console.log('Imagine noua: '+imageRef.toString())
        displayImage(imageRef);
    });
});

//Function to convert:""

function displayImage(images){
    images.getDownloadURL().then(function(url){
        console.log(url);
    });
}

$(function(){
    console.clear()
});