var lockpos = $(window).height() * 0.7;
var bannerlist = ['/images/banner0_portfolio_yuri.jpg', '/images/banner1_portfolio_yuri.jpg', '/images/banner2_portfolio_yuri.jpg']

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
    
    $("#aboutme_slide").slideme({
        arrows: true,
        pagination: "numbers",
        resizable: {
            width: 990,
            height: 450,
        }
    });

    //ON CLICK events

    $("#aboutme_click").on("click", function () {
        $(".blackoverlay").fadeIn();
    });
});

function lockName(){
    if ($(window).scrollTop() > lockpos) {
        $(".namediv").addClass("fixedname");
    } else {
        $(".namediv").removeClass("fixedname");
    }
}