var _0x253b=['42uelxcJ','best-tkd.firebaseapp.com','9SBPaYO','15754tXrSNM','1318235gPyMuE','AIzaSyAibhDPLow9k_2r1t-mWXhqOAbhOf8Wj2E','53GpRpRl','13AWOTnf','123402nfBfwJ','initializeApp','https://best-tkd-default-rtdb.firebaseio.com','542168lojNOX','61pJEtIy','500yQqbFL','406965sxGMLI','G-RV2YCV0YTZ','best-tkd','628384403687','1:628384403687:web:b5a8575851c9abbe2ad242','best-tkd.appspot.com'];var _0xba29ae=_0x56d1;(function(_0x54d7bd,_0x1e0d02){var _0x19cf61=_0x56d1;while(!![]){try{var _0x135d0e=parseInt(_0x19cf61(0x91))+-parseInt(_0x19cf61(0x94))+parseInt(_0x19cf61(0x88))*parseInt(_0x19cf61(0x8e))+parseInt(_0x19cf61(0x8c))*-parseInt(_0x19cf61(0x93))+-parseInt(_0x19cf61(0x89))*-parseInt(_0x19cf61(0x9a))+-parseInt(_0x19cf61(0x8d))*-parseInt(_0x19cf61(0x92))+-parseInt(_0x19cf61(0x8a));if(_0x135d0e===_0x1e0d02)break;else _0x54d7bd['push'](_0x54d7bd['shift']());}catch(_0x5ee6a6){_0x54d7bd['push'](_0x54d7bd['shift']());}}}(_0x253b,0x8995b));var firebaseConfig={'apiKey':_0xba29ae(0x8b),'authDomain':_0xba29ae(0x87),'databaseURL':_0xba29ae(0x90),'projectId':_0xba29ae(0x96),'storageBucket':_0xba29ae(0x99),'messagingSenderId':_0xba29ae(0x97),'appId':_0xba29ae(0x98),'measurementId':_0xba29ae(0x95)};function _0x56d1(_0x34b7d7,_0x462143){_0x34b7d7=_0x34b7d7-0x87;var _0x253b12=_0x253b[_0x34b7d7];return _0x253b12;}firebase[_0xba29ae(0x8f)](firebaseConfig);
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

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
})


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
    let newKeys = [];
    for (var i = 0; i != keys.length; ++i){
        let justNr = String(keys[i]).replace("VideoYt-", '');      
        // console.log(justNr)
         newKeys.push(justNr);
    }
    newKeys.sort((l, r) => { return r > l ? 1 : l-r});

    // 0, 1, 2, 3
    // 4, 5, 6, 7 = 
    // 3 % 4 = 
    // 3 - 4 * 0 = 3

    // 7 % 4 = 
    // catul = 7 / 4
    // restul = 7 - 4 * 1 = 3

    var trick = {}
    for (let i = 0; i !== newKeys.length; ++i){
        trick[String("VideoYt-"+newKeys[i])] = i;
        console.log(trick[String("VideoYt-"+newKeys[i])])
    }
    for(var  i = 0; i !== newKeys.length; i++){
        var imagini = String("VideoYt-"+newKeys[i]);


        firebase.database().ref('videouri').child(imagini).once('value', img => {
            values_img = img.val();
            console.log(img)
            console.log(values_img)
            var url = img.val().url;
            var titlu = img.val().titlu;
            var descriere = img.val().descriere;
            url = url.replace('watch?v=', 'embed/');
            var option = null;
            let myIndex = trick[img.key];
                console.log(myIndex);
            if (myIndex % 4 !== 3) {
                option = `<div class="col-sm-3 text-center wow animated zoomIn" align="center" style="margin-bottom: 30px !important;">
                <div>
                <iframe width="270px" height="200px" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4 style="font-weight: 600;">${titlu}</h4>
                <p style="width:300px; word-wrap: break-word; display:block;margin:0 auto;">${descriere}</p>
                </div>
                </div>`;
                $('#here_videos').append(option);
            } else {
                option = `
                <div class="row">
                <div class="col-sm-3 text-center wow animated zoomIn" align="center" style="margin-bottom: 30px !important;">
            <div>
            <iframe width="270px" height="200px" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h4 style="font-weight: 600;">${titlu}</h4>
            <p style="width:300px; word-wrap: break-word; display:block;margin:0 auto;">${descriere}</p>
            </div>
            </div>
            </div>
            `;
            $('#here_videos').append(option);
            }

        })

    }
});



