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
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });