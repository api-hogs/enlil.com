$(document).ready(function(){

	jQuery('.anim').addClass("invisible").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        classToRemove: 'invisible',
        offset: 100,
        repeat: true,
        invertBottomOffset: false,
        callbackFunction: function(elem, action){
        	if(!elem.hasClass('visible')){
        		elem.addClass('invisible');
        	}
        	
        }
   	});
    // $('.bg_slider').find('.slide1 header h2, .slide1 header span').css({'opacity': '1'});
    $('.bg_slider').leanSlider({
        controlNav: '.bg_slider_controls',
        pauseTime: 12000,
        controlNavBuilder: function(index, slide){
            return '<li class="lean-slider-control-nav"></li>';
        },
        afterChange: function(){
            var slideN = $('.lean-slider-slide.current').data('number');
            $('.items_slider .'+slideN+' header em').delay(300).queue(function(next){
                $(this).addClass('show zoomIn animated');
                $(this).dequeue();
            });
            $('.items_slider .'+slideN+' header .target').delay(1100).queue(function(next){
                $(this).addClass('show flash animated');
                $(this).dequeue();
            });
            $('.items_slider .'+slideN+' header .item').delay(1700).queue(function(next){
                $(this).addClass('show fadeIn animated');
                $(this).dequeue();
            });
			
            $('.items_slider .'+slideN+' header h2').delay(2000).queue(function(next){
                $(this).addClass('show fadeInRightBig animated');
                $(this).dequeue();
            });

            $('.items_slider .'+slideN+' header .l_txt').delay(2700).queue(function(next){
                $(this).addClass('show slideInUp animated');
                $(this).dequeue();
            });
            $('.items_slider .'+slideN).addClass('current').siblings().removeClass('current');

            //
        },
        beforeChange: function(){
            var slideN = $('.lean-slider-slide.current').data('number');
            $('.items_slider .'+slideN+' header h2').removeClass('show fadeInRightBig animated');
            $('.items_slider .'+slideN+' header .item').removeClass('show fadeIn animated');
            $('.items_slider .'+slideN+' header .target').removeClass('show flash animated');
            $('.items_slider .'+slideN+' header .l_txt').removeClass('show slideInUp animated');
            $('.items_slider .'+slideN+' header em').removeClass('show zoomIn animated');
            $('.items_slider .'+slideN).removeClass('current');
        },afterLoad: function(){
            var slideN = $('.lean-slider-slide.current').data('number');
            $('.items_slider .'+slideN).addClass('current').siblings().removeClass('current');
            $('.items_slider .'+slideN+' header h2, .items_slider .'+slideN+'  header .l_txt, .items_slider .'+slideN+' header em, .items_slider .'+slideN+' header .item, .items_slider .'+slideN+' header .target').addClass('show');
        }

    });
	
 

})
