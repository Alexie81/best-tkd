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

    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

});