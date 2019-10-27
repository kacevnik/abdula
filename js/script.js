jQuery( document ).ready( function( $ ) {

    function imgVideo(){
        if($(window).width() >= 768){
            const img_video = $('.prez_video_img');
            $('.prez_video').css({'left': img_video.width()/2 - 50});
        } else {
            $('.prez_video').css({'left': ($('.prez_video').parents('.row.position-relative').width() - $('.prez_video').width())/2});
        }
    }

    function imgVideo_2(){
        if($(window).width() >= 768){
            const img_video_2 = $('.prez_video_img_2');
            $('.prez_video_2').css({'left': img_video_2.width()/2 - 50});
        } else {
            $('.prez_video_2').css({'left': ($('.prez_video_2').parents('.row.position-relative').width() - $('.prez_video_2').width())/2});
        }
    }

    function prezBtn(){
        $('#prez_2 .btn_pramery').css({'left': ($('#prez_2 .prez_video_img_2').outerWidth() - $('#prez_2 .btn_pramery').outerWidth())/2});
    }

    $(window).resize(function() {
        imgVideo();
        imgVideo_2();
        prezBtn();
    });

    imgVideo();
    imgVideo_2();
    prezBtn();

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

    var party_swiper = new Swiper('.party-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination-party',
        },
        navigation: {
          nextEl: '.party-swiper-button-next',
          prevEl: '.party-swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },

            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
          }
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
    
    $(document).on('click', '.process_tabs_item', function(){
        $('.process_tabs_item').removeClass('active');
        $(this).addClass('active');
        if($(window).width() >= 768){
            $('.process_show_tab').hide();
            $('#process_tap_' + $(this).data('tabs')).fadeIn(300);
        }else{
            showProcess();
        }
    });

    function showProcess() {
        let i = $('.process_tabs_item.active').data('tabs');
        $('.process_tabs_item.active').removeClass('active');
        let elem = $('.process_tabs_item[data-tabs="' + i + '"]');
        elem.addClass('active');
        if(!$('div').is('.process_slide[tab="' + i +'"]')){
            elem.addClass('active').after('<div class="process_slide" tab="' + i + '">' + $('#process_tap_' + i).html() + '</div>').next().slideDown(300);
        }
    }

    if($(window).width() < 768){
        showProcess();
    }

    $('footer input').focus(function(){
        $(this).parents('.form_input').addClass('active');
    });

    $('footer input').focusout(function(){
        $(this).parents('.form_input').removeClass('active');
    });

    //Иницилизация и отправка плагина AjaxForm отправки даных из форм
    $('form').ajaxForm(function(){
        $('form').clearForm();
    });

});