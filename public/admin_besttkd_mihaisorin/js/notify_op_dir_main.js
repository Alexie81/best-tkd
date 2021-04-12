// document.getElementById('number-of-notify').style.display = 'none';
// document.getElementById('here_notify2').style.display = 'none';
$(function(){
    //Nr NOTIFICATIONS Site
    var nrNot = 0;
    
    firebase.database().ref('notification/site/mesaje/primite').on('value', snap => {
      scores1 = snap.val();
      $("#here_notify").empty();
      if(scores1 == null){
        nrNot = 1;
    } else {
      var keys1 = scores1 ? Object.keys(scores1) : [];
      for(var i=0; i<keys1.length; i++){
        var nume = scores1[keys1[i]].nume;
        if(scores1[keys1[i]].status === 'necitit') {
          setTimeout(showNrNot(), 300)
        var conct_op = nume + " a trimis un mesaj nou";
        var conct = `<a class="dropdown-item" href="notifications.html">${conct_op}</a>`
        $("#here_notify").append(conct);
        } else {
          //Do nothing
          setTimeout(showNrNot(), 100)
        }
      } 
    }
    });
    
    
    function showNrNot(){
    
      setTimeout(function() {
        nrNot = parseInt(getCount(document.getElementById('here_notify'), false));
        if(nrNot >= 0){
          console.log("nup")
          document.getElementById('number-of-notify').innerText = nrNot;
          document.getElementById('here_notify2').innerText = nrNot;  
          
        }
        if(document.getElementById('here_notify2').innerText == "0"){
    
          console.log("nrNot")
          document.getElementById('number-of-notify').style.display = 'none';
          document.getElementById('here_notify2').style.display = 'none';
          } else {
            document.getElementById('number-of-notify').innerText = nrNot;
            document.getElementById('here_notify2').innerText = nrNot;
          }
      }, 400)
      
      
    }
    
    // function showNrNot1(){
    //     setTimeout(function(){nrNot = parseInt(getCount(document.getElementById('here_notify'), false));}, 3000)
    //     console.log(nrNot)
    //   if(nrNot >= 1){
    //     console.log("nup")
    //     document.getElementById('number-of-notify').innerText = nrNot;
    //     document.getElementById('here_notify2').innerText = nrNot;  
    //   } else {
    
    //   console.log("nrNot")
    //   document.getElementById('number-of-notify').style.display = 'none';
    //   document.getElementById('here_notify2').style.display = 'none';
    //   }
    // }
    
    
    window.getCount = function(parent, getChildrensChildren){
      var relevantChildren = 0;
      var children = parent.childNodes.length;
      for(var i=0; i < children; i++){
          if(parent.childNodes[i].nodeType != 3){
              if(getChildrensChildren)
                  relevantChildren += getCount(parent.childNodes[i],true);
              relevantChildren++;
          }
      }
      return relevantChildren;
    }
    });