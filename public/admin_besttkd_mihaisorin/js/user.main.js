var MessageRef = firebase.database().ref('AdminLog');
var MessageRef1 = null;

var y = [];
let newKeys = [];
MessageRef.on('value', snap => {
    //console.log(data.val());
    scores = snap.val();
    var keys = scores ? Object.keys(scores) : [];
    // for (var i = 0; i != keys.length; ++i)
    // newKeys.push(parseInt(keys[i].split(" ")[1]));
    // newKeys.sort((l, r) => { return r > l ? 1 : -1});

    var firstContent = '#firstContent';
    for(var i=0; i != keys.length; i++) {
        keys.sort((l, r) => { return r > l ? 1 : -1});
        var namesKeys = keys[i];
        var option = null;
        MessageRef1 = firebase.database().ref('AdminLog/'+namesKeys);

        MessageRef1.on('value', snap1 => {
            scores1 = snap1.val();
            var keys1 = scores1 ? Object.keys(scores1) : [];

            var conct = ``;
            // keys1.sort((l, r) => { return r > l ? 1 : 1});
            for(var k=0; k != keys1.length - 1; k++) {
                
                // console.log("key=" + keys1[k]);
                conct += `<p>Ora: ${keys1[k]}</p>`;

            }

            option = `
                <div class="accordion-item">
            <h2 class="accordion-header" id="a${i}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c${i}" aria-expanded="false" aria-controls="c${i}">
                ${namesKeys}
              </button>
            </h2>
                <div id="c${i}" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo">
                <div class="accordion-body">
                `;
            // console.log(option+conct)
            $(firstContent).append(option + conct); 

         
        });
    }
});
$(firstContent).append('</div></div></div>'); 


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

