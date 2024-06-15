(function () {

    $('.main__slider-one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '#prevBtnPresent',
        nextArrow: '#nextBtnPresent'
    });
    $('.main__slider-two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '#prevBtnTable',
        nextArrow: '#nextBtnTable',
        adaptiveHeight: true
    });

})()