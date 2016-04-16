var lockpos = $(window).height() * 0.7;
var bannerlist = ['/images/banner0_portfolio_yuri.jpg', '/images/banner1_portfolio_yuri.jpg', '/images/banner2_portfolio_yuri.jpg']
var active_slideshow = "none"

$(document).ready(function () {
    $(window).on("resize", function (e) {
        var lockpos = $(window).height()*0.7;
        lockName();
    });

    $(window).on("scroll", function (e) {
        lockName();
    });
    var bannerindex = 0;
    setInterval(function () {
        $(".pagetop").animate({ opacity: 0 }, 200, function () {
            $(".pagetop").css('background-image', "url('/images/banner" + bannerindex + "_portfolio_yuri.jpg')");
            $(".pagetop").animate({ opacity: 1 }, 200);
        });
        bannerindex++;
        bannerindex = bannerindex % bannerlist.length;
    }, 7000);

    //ON CLICK events

    $("#aboutme_click").on("click", function () {
        $(".blackoverlay").fadeIn(1000);
        //$("#aboutme_slide").fadeIn(1000);
        active_slideshow = "#aboutme_slide";
    });
    
    $(".back").on("click", function () {
        $(".blackoverlay").fadeOut(1000);
        //$("#aboutme_slide").fadeOut(1000);
    });

    $(".arrowright").on("click", function () {
        var picslist = $(active_slideshow + " ul > li");
        var itemFadeIn;
        picslist.each(function (index) {
            if ($(this).is(":visible")) {
                $(this).fadeOut();
                if (index+1 == picslist.length) {
                    itemFadeIn = 0;
                } else {
                    itemFadeIn = index + 1;
                }
            }
        });
        $(picslist[itemFadeIn]).fadeIn();
    });
    $(".arrowleft").on("click", function () {
        var picslist = $(active_slideshow + " ul > li");
        var itemFadeIn;
        picslist.each(function (index) {
            if ($(this).is(":visible")) {
                $(this).fadeOut();
                if (index - 1 < 0) {
                    itemFadeIn = picslist.length-1;
                } else {
                    itemFadeIn = index - 1;
                }
            }
        });
        $(picslist[itemFadeIn]).fadeIn();
    });
});

function lockName(){
    if ($(window).scrollTop() > lockpos) {
        $(".namediv").addClass("fixedname");
    } else {
        $(".namediv").removeClass("fixedname");
    }
}