var lockpos = $(window).height() * 0.7;
var bannerlist = ['/images/banner0_portfolio_yuri.jpg', '/images/banner1_portfolio_yuri.jpg', '/images/banner2_portfolio_yuri.jpg'];
var active_slideshow = "none";
var loadtext1 = "SEARCHING FOR CODENAME 'c0m4ndo45'";
var loadtext2 = "LOCATED PERSONAL FILE 'YURI ANTIN WERGRZN'";
var loadtext3 = "DOWNLOADING...";

$(document).ready(function () {
    //IMAGE PRELOADING
    $(bannerlist).each(function () {
        $('<img/>')[0].src = this;
    });
    //Main bg loop function
    var pagetop_loop = function () {
        var bannerindex = 0;
        var intervalTime = 9000;
        setInterval(function () {
            $(".pagetop").animate({ opacity: 0 }, 200, function () {
                $(".pagetop").css('background-image', "url('/images/banner" + bannerindex + "_portfolio_yuri.jpg')");
                $(".pagetop").animate({ opacity: 1 }, 200);
            });
            bannerindex++;
            bannerindex = bannerindex % bannerlist.length;
        }, intervalTime);
    };

    //LOADING
    $("body").css('overflow', 'hidden');
    var interval1 = setInterval(function () {
        var curtext = $("#loadingtext1").html();
        $("#loadingtext1").html(loadtext1.substring(0, curtext.length+1));
        if(curtext.length+1 == loadtext1.length) {
            clearInterval(interval1);
            setTimeout(function () {
                var interval2 = setInterval(function () {
                    var curtext = $("#loadingtext2").html();
                    $("#loadingtext2").html(loadtext2.substring(0, curtext.length + 1));
                    if (curtext.length + 1 == loadtext2.length) {
                        clearInterval(interval2);
                        setTimeout(function () {
                            var interval3 = setInterval(function () {
                                var curtext = $("#loadingtext3").html();
                                $("#loadingtext3").html(loadtext3.substring(0, curtext.length + 1));
                                if (curtext.length + 1 == loadtext3.length) {
                                    clearInterval(interval3);
                                    setTimeout(function () {
                                        $(".loading").fadeOut();
                                        $("body").css('overflow', 'initial');
                                        pagetop_loop();
                                    },1200);
                                }
                            }, 50);
                        }, 800);
                    }
                }, 50);
            }, 1200);
        }
    }, 50);
    

    $(window).on("resize", function (e) {
        lockpos = $(window).height()*0.7;
        update_scroll();
    });

    $(window).on("scroll", function (e) {
        update_scroll();
    });

    //ON CLICK events 

    $("#aboutme_click").on("click", function () {
        displayImageSlider("#aboutme_slide");
    });
    
    $("#education_click").on("click", function () {
        displayImageSlider("#education_slide");
    });
    
    $("#work_click").on("click", function () {
        displayImageSlider("#work_slide");
    });

    $(".back").on("click", function () {
        hideImageSlider();
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

    $(".social span").hover(function () {
        var fadeDelay = 0;
        $(this).animate({ zoom: 1.3 }, 400);
        $('[parent='+this.className+']').each(function () {
            setTimeout(function (element) {
                $(element).fadeIn(400);
            }, fadeDelay,this);
            fadeDelay += 500;
        });

    }, function () {
    
    });
});

function update_scroll(){
    var currentScrollPos = $(window).scrollTop();
    if (currentScrollPos > lockpos) {
        $(".namediv").addClass("fixedname");
        $(".social").addClass("fixedsocial");
        $(".social").fadeIn();
        $("#backtop").fadeIn();
    } else {
        $(".namediv").removeClass("fixedname");
        $(".social").removeClass("fixedsocial");
        $(".social").fadeOut(0);
        $("#backtop").fadeOut();
    }
    
    var bottompos = $("#bottom").offset().top;
    if (currentScrollPos > bottompos) {
        var bottomsize = $("#bottom").height();
        var posFace = Math.min(((currentScrollPos - bottompos) / (bottomsize - $(window).height())) * 250, 95);
        var posWork = Math.min(((currentScrollPos - bottompos) / (bottomsize - $(window).height())) * 175, 95);
        var posOther = Math.min(((currentScrollPos - bottompos) / (bottomsize - $(window).height())) * 95, 95);
        $("#facebook").css("left", posFace + "%");
        $("#work").css("left", posWork + "%");
        $("#other").css("left", posOther + "%");
    }
    else {
        $("#facebook").css("left", "0");
        $("#work").css("left", "0");
        $("#other").css("left", "0");
    }
    $('.divisorscroll').css('background-position', 'center ' + currentScrollPos*100/bottompos + '%');
}

function displayImageSlider(element){
    $(".blackoverlay").fadeIn(1000);
    $(element).fadeIn(1000);
    active_slideshow = element;
    var currentPos = $(window).scrollTop()
    $(window).scroll(function () {
        $(window).scrollTop(currentPos);
    });
}

function hideImageSlider(){
    $(window).unbind("scroll");
    $(window).on("scroll", function (e) {
        update_scroll();
    });
    $(".blackoverlay").fadeOut(1000);
    $(".slides").fadeOut(1000);
}
