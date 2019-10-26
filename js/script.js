jQuery( document ).ready( function( $ ) {

    function imgVideo(){
        if($(window).width() >= 768){
            const img_video = $('.prez_video_img');
            $('.prez_video').css({'left': img_video.width()/2 - 50});
        } else {
            $('.prez_video').css({'left': ($('.prez_video').parents('.row.position-relative').width() - $('.prez_video').width())/2});
        }
    }

    $(window).resize(function() {
        imgVideo();
    });

    imgVideo();

    var swiper = new Swiper('.format_swiper', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    swiper.on('transitionEnd', function () {
        $('.format_slide_content').html($('.swiper-slide-active .format_slide_text').html());
    });

    $("a[href*='#']").bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);
		e.preventDefault();
		return false;
	});

});