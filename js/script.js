jQuery( document ).ready( function( $ ) {

    function imgVideo(){
        if($(window).width() >= 768){
            const img_video = $('.prez_video_img');
            $('.prez_video').css({'left': img_video.width()/2 - 50});
        }
    }

    $(window).resize(function() {
        imgVideo();
    });

    imgVideo();

});