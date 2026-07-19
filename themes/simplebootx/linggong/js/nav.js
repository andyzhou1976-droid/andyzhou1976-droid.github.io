// JavaScript Document

(function() {
    var lock = true,
        menubtn = $(".menubtn"),
        mymask = $('<div/>').css({
            'position': 'fixed',
            'display': 'none',
            'width': '100%',
            'height': '100%',
            'top': '0',
            'left': '0',
            'background': 'rgba(0,0,0,.5)',
            'z-index': '999998'
        })

    $('body').prepend(mymask);
    menubtn.click(function() {
        if (lock) {
            $(".nav").css("height", "100%").slideDown(300, function() {
                $(".nav ul").slideDown(400)
            });
            menubtn.css({
                "transform": "rotate(90deg)"
            }).find('span').css({
                "background-color": "#fff"
            })
            lock = false;

            //show mask
            mymask.fadeIn(600);

            $("body").css({
                "overflow": "hidden"
            });

            // $(document).on('touchmove',function(e){
            // 	e.preventDefault();
            // })
        } else {
            hideNav();
            $
        }
    })

    mymask.click(function() {
        hideNav();
    })

    var hideNav = function() {
        menubtn.css({
            "transform": "rotate(0)"
        }).find('span').css({
            "background-color": "#369be9"
        })
        $(".nav").slideUp(300).css("height", "0");
        $(".nav ul").hide(400);
        lock = true;

        //hide mask
        mymask.fadeOut(600);

        $("body").css({
            "overflow": "auto"
        });
        // $(document).unbind("touchmove");
    }
})()
// $(".wap-nav .nav ul li .addition").click(function (e) {
// 	e.stopPropagation()
// 	$(this).next(".c-show").slideToggle(500).parents("li").siblings().find(".c-show").slideUp(500);
// })
// $(".wap-nav .nav ul li .c-show .c-s1 .addition").click(function (e) {
// 	e.stopPropagation()
// 	$(this).next(".c-s2").slideToggle(500).parent(".c-s1").siblings().find(".c-s2").slideUp(500)
// })

$(".wap-nav .nav ul li > .addition").click(function(e) {
    e.stopPropagation()
    if ($(this).next(".c-show1").css("display") == "none") {
        $(this).next(".c-show1").slideDown(500);
        $(this).css("background", "transparent url('/yizi.png') no-repeat center center").css("background-size", "100% 100%;")
    } else {
        $(this).next(".c-show1").slideUp(500);
        $(this).css("background", "transparent url('/shizi.png') no-repeat center center").css("background-size", "100% 100%;")
    }

})

$(".wap-nav .nav ul li .c-show1 .c-s1 > .addition").click(function(e) {
    e.stopPropagation()
    if ($(this).next(".c-show2").css("display") == "none") {
        $(this).next(".c-show2").slideDown(500);
        $(this).css("background", "transparent url('/yizi.png') no-repeat center center").css("background-size", "100% 100%;")
    } else {
        $(this).next(".c-show2").slideUp(500);
        $(this).css("background", "transparent url('/shizi.png') no-repeat center center").css("background-size", "100% 100%;")
    }

})

$(".wap-nav .nav ul li .c-show1 .c-s2 .addition").click(function(e) {
    e.stopPropagation()
    if ($(this).next(".c-show3").css("display") == "none") {
        $(this).next(".c-show3").slideDown(500);
        $(this).css("background", "transparent url('/yizi.png') no-repeat center center").css("background-size", "100% 100%;")
    } else {
        $(this).next(".c-show3").slideUp(500);
        $(this).css("background", "transparent url('/shizi.png') no-repeat center center").css("background-size", "100% 100%;")
    }

})

$(".wap-nav .nav ul li .c-show1 .c-s3 .addition").click(function(e) {
    e.stopPropagation()
    if ($(this).next(".c-show4").css("display") == "none") {
        $(this).next(".c-show4").slideDown(500);
        $(this).css("background", "transparent url('/yizi.png') no-repeat center center").css("background-size", "100% 100%;")
    } else {
        $(this).next(".c-show4").slideUp(500);
        $(this).css("background", "transparent url('/shizi.png') no-repeat center center").css("background-size", "100% 100%;")
    }

})
$(".wap-nav .nav > ul").height($(window).height())