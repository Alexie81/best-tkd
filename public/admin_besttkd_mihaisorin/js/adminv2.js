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
        window.location = "../index.html";
    }
});

function logout(){
    auth.signOut();
  }

  dataDailySalesChartviz1 = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [12, 17, 7, 17, 23, 18, 38]
    ]
  };

  optionsDailySalesChartviz1 = {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, 
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  }
  dataDailySalesChartviz2 = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [12, 17, 7, 17, 23, 18, 38]
    ]
  };

  optionsDailySalesChartviz2 = {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, 
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  }

  dataDailySalesChartviztot = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [12, 17, 7, 17, 23, 18, 38]
    ]
  };

  optionsDailySalesChartviztot = {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, 
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  }
  dataDailySalesChartviz3 = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [
      [12, 17, 7, 17, 23, 18, 38]
    ]
  };

  optionsDailySalesChartviz3 = {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, 
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  }
  
  var viz1 = new Chartist.Line('.ct-chart-viz1', dataDailySalesChartviz1, optionsDailySalesChartviz1);
  var tot1 = new Chartist.Line('.ct-chart-viztot', dataDailySalesChartviztot, optionsDailySalesChartviztot);
  var viz2 = new Chartist.Line('.ct-chart-viz2', dataDailySalesChartviz2, optionsDailySalesChartviz2);
  var viz3 = new Chartist.Line('.ct-chart-viz3', dataDailySalesChartviz3, optionsDailySalesChartviz3);
  md.startAnimationForLineChart(viz1);
  md.startAnimationForLineChart(viz2);
  md.startAnimationForLineChart(viz3);
  md.startAnimationForLineChart(tot1);