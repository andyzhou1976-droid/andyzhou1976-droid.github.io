$.fn.extend({
    clientAnimate: function(options){       
        var $el = $(this),
            $wh = $(window).height(),
            $ww = $(window).width(),
            opts = $.extend({
                difference: 200,    //差值
                toggle: false,      //动画效果是否反复显示
                className: "run",   //动画效果类名
                animatStop: 767     //小于该像素时，停止动画效果
            }, options);

            $el.each(function(e){
                var $h = $(this).height(),
                    $top = $(this).offset().top;

                if($ww >= opts.animatStop ? $wh > $top : true){                 
                    $(this).addClass(opts.className);
                }
            })

        $(window).scroll(function(e){
            var _this = $(this),
                $stop = _this.scrollTop(),
                $num = opts.difference;

            $el.each(function(i){
                var $h = $(this).height(),
                    $top = $(this).offset().top;
                
                if($stop + $wh >= $top - $num && $stop <= $top + $h + $num){
                    if(!$(this).hasClass(opts.className)){
                        $(this).addClass(opts.className);
                    }        
                }else if($stop > $top + $h + $num || $stop + $wh < $top - $num){
                    if(opts.toggle && $ww >= opts.animatStop){
                        $(this).removeClass(opts.className);
                    }            
                }
            })
        })
    }
})