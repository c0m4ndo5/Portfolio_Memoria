var lockpos = $(window).height()*0.7;

$(document).ready(function () {
    $(window).on("resize", function (e) {
        var lockpos = $(window).height()*0.7;
        lockName();
    });

    $(window).on("scroll", function (e) {
        lockName();
    });
});

function lockName(){
    if ($(window).scrollTop() > lockpos) {
        $(".namediv").addClass("fixedname");
    } else {
        $(".namediv").removeClass("fixedname");
    }
}