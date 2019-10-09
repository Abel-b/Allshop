$(document).ready(function () {
    $(".from").click(function () {
        $('html, body').animate({
            scrollTop: $(".household").offset().top
        }, 1500);
    });

    $(".icon_box").click(function () {
        $(".icon_box_image").fadeToggle();
        $(".lead").fadeToggle();
    });
    $(".icon_box1").click(function () {
        $(".icon_box_image1").fadeToggle();
        $(".lead1").fadeToggle();
    });
    $(".icon_box2").click(function () {
        $(".icon_box_image2").fadeToggle();
        $(".lead2").fadeToggle();
    });
    $(".categ").click(function () {
        $(".household-items1, .bed, .window, .linen").fadeToggle();
        $(".household").fadeToggle();
    });
<<<<<<< HEAD
});
=======
    $(".about-us").click(function () {
        $("#about-us").fadeToggle();
    });
});
>>>>>>> 87a03742e82f99cfef4df86a18bbeb6bb1c161e7
