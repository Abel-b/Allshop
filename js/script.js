$(document).ready(function(){
    $(".from").click(function() {
        $('html, body').animate({
            scrollTop: $(".household").offset().top
        }, 1500);
    });
});