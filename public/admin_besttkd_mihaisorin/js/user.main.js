var MessageRef = firebase.database().ref('AdminLog');
var MessageRef1 = null;

var y = [];
MessageRef.on('value', snap => {
    //console.log(data.val());
    scores = snap.val();
    var keys = scores ? Object.keys(scores) : [];
    var firstContent = '#firstContent';
    for(var i=0; i != keys.length; i++) {
        var namesKeys = keys[i];
        var option = null;
        MessageRef1 = firebase.database().ref('AdminLog/'+namesKeys);

        MessageRef1.on('value', snap1 => {
            scores1 = snap1.val();
            var keys1 = scores1 ? Object.keys(scores1) : [];
            var conct = ``;
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


