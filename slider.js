$(document).ready(function () {

    $('.next').click(function () {
        var currentImege = $('.img.curry');
        var currentumageindex = $('.img.curry').index();
        var nextImeginsex = currentumageindex + 1;
        var nextImage = $('.img').eq(nextImeginsex);
        currentImege.fadeOut(1000);
        currentImege.removeClass('curry');

        if (nextImeginsex == ($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        } else {
                nextImage.fadeIn(1000);
                nextImage.addClass('curry');

        }
    });
    $('.prev').click(function () {
        var currentImege = $('.img.curry');
        var currentumageindex = $('.img.curry').index();
        var prevImeginsex = currentumageindex - 1;
        var prevImage = $('.img').eq(prevImeginsex);

            currentImege.fadeOut(1000);
            currentImege.removeClass('curry');
            prevImage.fadeIn(1000);
            prevImage.addClass('curry');
        });

});