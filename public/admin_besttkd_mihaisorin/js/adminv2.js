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

//   window.addEventListener("beforeunload", function (e) {
//     logout();
// });

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


  var dataviz3 = {
    labels: ["Mon", "Tue", "Wed"],
    series: [
      [10, 20, 75]
    ],
  }
  
  var optionsviz3 = {
    low: 0,
    high: 100,
    showGridBackground: false,
    axisX: {
      showGrid: true
    },
    axisY: {},
    plugins: [
      Chartist.plugins.ctPointLabels({
        textAnchor: 'middle',
        labelInterpolationFnc: function(value) {
          return  value
        }
      }),
      Chartist.plugins.tooltip({
  
      })
    ]
  };
  
  var dataviz1 = {
    labels: ["Mon", "Tue", "Wed"],
    series: [
      [10, 20, 75]
    ],
  }
  
  var optionsviz1 = {
    low: 0,
    high: 100,
    showGridBackground: false,
    axisX: {
      showGrid: true
    },
    axisY: {},
    plugins: [
      Chartist.plugins.ctPointLabels({
        textAnchor: 'middle',
        labelInterpolationFnc: function(value) {
          return  value
        }
      }),
      Chartist.plugins.tooltip({
  
      })
    ]
  };

  // var dataviztot = {
  //   labels: ["Mon", "Tue", "Wed"],
  //   series: [
  //     [10, 20, 75]
  //   ],
  // }
  
  // var optionsviztot = {
  //   low: 0,
  //   high: 100,
  //   showGridBackground: false,
  //   axisX: {
  //     showGrid: true
  //   },
  //   axisY: {},
  //   plugins: [
  //     Chartist.plugins.ctPointLabels({
  //       textAnchor: 'middle',
  //       labelInterpolationFnc: function(value) {
  //         return  value
  //       }
  //     }),
  //     Chartist.plugins.tooltip({
  
  //     })
  //   ]
  // };

  var dataviz2 = {
    labels: ["Mon", "Tue", "Wed"],
    series: [
      [10, 20, 75]
    ],
  }
  
  var optionsviz2 = {
    low: 0,
    high: 100,
    showGridBackground: false,
    axisX: {
      showGrid: true
    },
    axisY: {},
    plugins: [
      Chartist.plugins.ctPointLabels({
        textAnchor: 'middle',
        labelInterpolationFnc: function(value) {
          return  value
        }
      }),
      Chartist.plugins.tooltip({
  
      })
    ]
  };


  var datavizanant = {
    labels: ["Mon", "Tue", "Wed"],
    series: [
      [10, 20, 75]
    ],
  }
  
  var optionsvizanant = {
    low: 0,
    high: 100,
    showGridBackground: false,
    axisX: {
      showGrid: true
    },
    axisY: {},
    plugins: [
      Chartist.plugins.ctPointLabels({
        textAnchor: 'middle',
        labelInterpolationFnc: function(value) {
          return  value
        }
      }),
      Chartist.plugins.tooltip({
  
      })
    ]
  };
  
  var viz1 = new Chartist.Line('.ct-chart-viz1', dataviz1, optionsviz1);
  // var tot1 = new Chartist.Line('.ct-chart-viztot', dataviztot, optionsviztot);
  var viz2 = new Chartist.Line('.ct-chart-viz2', dataviz2, optionsviz2);
  var viz3 = new Chartist.Line('.ct-chart-viz3', dataviz3, optionsviz3);
  var vizanant = new Chartist.Line('.ct-chart-vizanant', datavizanant, optionsvizanant);

  
  md.startAnimationForLineChart(viz1);
  md.startAnimationForLineChart(viz2);
  md.startAnimationForLineChart(viz3);
  // md.startAnimationForLineChart(tot1);