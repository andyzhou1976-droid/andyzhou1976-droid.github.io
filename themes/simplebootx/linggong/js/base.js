$(function(){
    // .m-kf start
    $(".m-kf .kf-item2").click(function(e){
        e.preventDefault();

        var _this = $(this),
            $img = _this.siblings(".kf-wx");

        if($img.is(":hidden")){
            $img.show();
            _this.addClass("active");
        }else{
            $img.hide();
            _this.removeClass("active");
        }

        
    })
    // .m-kf end

    //.returntop start
    
	$("#j-gotop").click(function(e){
		e.preventDefault();
		
		$("body, html").animate({scrollTop: 0}, 350)
	});
	
	$(window).scroll(function(e){	
        
		if(wScroll.time){
			clearTimeout(wScroll.time);
		};
		wScroll.time = setTimeout(wScroll,100);		
	});
	
	function wScroll(e){
		var _this = $(this),
			$top = _this.scrollTop(),
			$el = $("#j-gotop");
		
		if($top > 300){
            $el.css("display", "block");

		}else{
			$el.css("display", "none");
		}
		
	}
	//.returntop end
	
	$tab = $("body");
    $(window).on("scroll",function(){
    if($(document).scrollTop() > 0){
        $tab.addClass('fixed');}
        else{
            $tab.removeClass('fixed');}
    });


	

	baguetteBox.run('.baguetteBoxOne', {
		animation: 'fadeIn',
	});



	$(".j-lazy").lazyload({effect: "fadeIn"}); 
    
	$tab = $("body");
	 $(window).on("scroll",function(){
	 if($(document).scrollTop() > 0){
		 $tab.addClass('fixed');}
		 else{
			 $tab.removeClass('fixed');}
	 });
 

	 var $li = $('#tab li');
	 var $ul = $('#content .chanxn');

	 $li.click(function () {
		 var $this = $(this);
		 var $t = $this.index();
		 $li.removeClass();
		 $this.addClass('current');
		 $ul.css('display', 'none');
		 $ul.eq($t).css('display', 'block');
	 })            

	 
 
 
	 $(".header .inpu").click(function (e) {
		 e.preventDefault();
 
		 var _this = $(this),
			 $form = _this.next();
 
		 if ($form.is(":hidden")) {
			 $form.show();
		 } else {
			 $form.hide();
		 }
	})
	
	// .g-hd end
	$(".list .dan_p").click(function(){
		var _this = $(this),
			$list = _this.next();
		
		if($list.is(":hidden")){
			$list.slideDown();
		}else{
			$list.slideUp();
		}
	})
	 
    // clientAnimate start
    $(".j-offset-top").clientAnimate();
    $(".j-offset-left").clientAnimate();
    $(".j-offset-right").clientAnimate();
    // clientAnimate end


	$(".m-hdlang .lang-click").click(function(e){
		e.preventDefault();

		var _this = $(this),
			$list = _this.next();
		
		if($list.is(":hidden")){
			$list.slideDown();
		}else{
			$list.slideUp();
		}
	})
	// .g-hd end


	$(".download-list li a").click(function(e) {
	 
		$(".cover").show();

	})
	$(".cover .guanbi").click(function(e) {
		e.preventDefault();

		var $cover = $(".cover");

		$cover.hide();
	})



})

 
 
$("table").wrap("<div class='table'></div>"); 
 
$(".img-scroll").DY_scroll({toggle:true, auto: true})  
$(".m-mpro").DY_scroll({toggle:true, auto: true}) 
 
