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



/* ==========================================
            SMOOTH SCROLLING
=============================================*/

$(function () {

    // animate on scroll
    new WOW().init();
});
$(function () {

    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

})

// Close mobile menu on click
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});

// $(function () {

//     $(window).scroll(function () {

//         if ($(this).scrollTop() < 50) {
//             // hide nav
//             $("nav").removeClass("vesco-top-nav");
//             $("#back-to-top").fadeOut();
//             $("#logo_to_hide1").fadeOut();

//         } else {
//             // show nav
//             $("nav").addClass("vesco-top-nav");
//             $("#back-to-top").fadeIn();
//             $("#logo_to_hide1").fadeIn();
//         }
//     });
//     if ($(this).scrollTop() < 50) {
//         // hide nav
//         $("nav").removeClass("vesco-top-nav");
//         $("#back-to-top").fadeOut();
//         document.getElementById('logo_to_hide1').style.display = "none";
//     } else {
//         // show nav
//         $("nav").addClass("vesco-top-nav");
//         $("#back-to-top").fadeIn();
//         $("#logo_to_hide1").fadeIn();
//     }
// });

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
})


// $(".option").click(function(){
//     $(".option").removeClass("active");
//     $(this).addClass("active");
    
//  });
 




// $('#team-members .owl-nav').click(function(event) {
//     $(this).removeClass('disabled');
//   });

// $('.owl-carousel').find('.owl-nav').removeClass('disabled');
// $('.owl-carousel').on('changed.owl.carousel', function(event) {
// 	$(this).find('.owl-dots').removeClass('disabled');
// });

// $('.owl-carousel').on('changed.owl.carousel', function(event) {
// 	$(this).addClass('disabled1');
// });



firebase.database().ref('imagini').once('value', snap => {
    values_database = snap.val();
    var keys = values_database ? Object.keys(values_database) : [];
    for(var  i = 0; i != keys.length; i++){
        var imagini = keys[i];
        firebase.database().ref('imagini').child(imagini).once('value', img => {
            values_img = img.val();
            console.log(values_img)
            var url = img.val().url;
            var titlu = img.val().titlu;
            var descriere = img.val().descriere;
            console.log(descriere)
            var option = `<div class="team-member wow animated zoomIn">
                            <a href="${url}" class="img_pop effect"><img src="${url}" class="img-responsive" alt="team member"></a>
                            <div class="team-member-info text-center">
                                <h4 class="team-member-name">${titlu}</h4>
                                <div style="width: 100% !important;">
                                <p class="team-member-designation">${descriere}</p>
                                </div>
                            </div>
                        </div>`;
                        // console.log(option)
            $('#team-members').append(option);
            // var keys_img = values_img ? Object.keys(values_img) : [];
            // console.log(keys_img)
            // for(var j=0; j != keys_img.length; j++){
            //     // var titlu = keys_img[i].titlu;
            //     // console.log(keys_img)
            // }
        })
        .then(function(){
            setTimeout(function(){
                $("#team-members").owlCarousel({
                nav: false,
                autoplay: true,
                smartSpeed: 700,
                dots: true,
                items: 2,
                loop: true,
                autoplayHoverPause: false,
                responsive: {
                  0: {
                    items: 1
                  },
                  480: {
                    items: 2
                  },
                  768: {
                    items: 3
                  }
                }
            });     

            $('.img_pop').magnificPopup({
                gallery: {
                    enabled: false
                },
                image: {
                      cursor: null,
                },
                type: 'image',
                removalDelay: 700,
                callbacks: {
                    beforeOpen: function () {
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure',
                            'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    },
                    resize: changeImgSize,
                    imageLoadComplete:changeImgSize,
                    change:changeImgSize
                },
                zoom: {

                    enabled: true,
            
                    duration: 300 // don't forget to change the duration also in CSS
            
                },            
                closeOnContentClick: true,
                midClick: true
          
            });    
        }, 1000)
        })
        
    }
});

function changeImgSize(){
    var img = this.content.find('img');
    img.css('max-height', '70%');
    img.css('width', '70%');
    img.css('max-width', '70%');
}


firebase.database().ref('videouri').once('value', snap => {
    values_database = snap.val();
    var keys = values_database ? Object.keys(values_database) : [];
    for(var  i = 0; i != keys.length; i++){
        var imagini = keys[i];
        firebase.database().ref('videouri').child(imagini).once('value', img => {
            values_img = img.val();
            console.log(values_img)
            var url = img.val().url;
            var titlu = img.val().titlu;
            var descriere = img.val().descriere;
            console.log(descriere)
            url = url.replace('watch?v=', 'embed/');
            var option = `<div class="col-sm-3 text-center" align="center" >
            <iframe width="270px" height="200px" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`;
                        console.log(option)
            $('#here_videos').append(option);
            // var keys_img = values_img ? Object.keys(values_img) : [];
            // console.log(keys_img)
            // for(var j=0; j != keys_img.length; j++){
            //     // var titlu = keys_img[i].titlu;
            //     // console.log(keys_img)
            // }
        })

    }
});



