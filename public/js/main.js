// $(function(){
// var btn = document.getElementsByClassName("btn-white");
// for (var i=0; i<1000; i++) {
// setTimeout(function() {
// btn.style.cssText = " border-top-right-radius: 9px; border-bottom-left-radius:9px;";
// }, 2000);
// setTimeout(function() {
//     btn.style.cssText = "border-top-left-radius: 9px; border-bottom-right-radius:9px;";
// }, 4000);
// }
// });
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

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
            $("#logo_to_hide1").fadeOut();

        } else {
            // show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
            $("#logo_to_hide1").fadeIn();
        }
    });
    if ($(this).scrollTop() < 50) {
        // hide nav
        $("nav").removeClass("vesco-top-nav");
        $("#back-to-top").fadeOut();
        document.getElementById('logo_to_hide1').style.display = "none";
    } else {
        // show nav
        $("nav").addClass("vesco-top-nav");
        $("#back-to-top").fadeIn();
        $("#logo_to_hide1").fadeIn();
    }
});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});