jQuery(".index_focus").hover(function () {
    jQuery(this).find(".index_focus_pre,.index_focus_next").stop(true, true).fadeTo("show", 1)
}, function () {
    jQuery(this).find(".index_focus_pre,.index_focus_next").fadeOut()
});
jQuery(".index_focus").slide({
    titCell: ".slide_nav a ",
    mainCell: ".bd ul",
    delayTime: 500,
    interTime: 2000,
    prevCell: ".index_focus_pre",
    nextCell: ".index_focus_next",
    effect: "fold",
    autoPlay: true,
    trigger: "click",
    startFun: function (i) {
    }
});
jQuery(".index_focus2").hover(function () {
    jQuery(this).find(".index_focus_pre2,.index_focus_next2").stop(true, true).fadeTo("show", 1)
}, function () {
    jQuery(this).find(".index_focus_pre2,.index_focus_next2").fadeOut()
});
jQuery(".index_focus2").slide({
    titCell: ".slide_nav a ",
    mainCell: ".bd ul",
    delayTime: 500,
    interTime: 2000,
    prevCell: ".index_focus_pre2",
    nextCell: ".index_focus_next2",
    effect: "fold",
    autoPlay: true,
    trigger: "click",
    startFun: function (i) {
    }
});
