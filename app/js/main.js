$(document).on('click', ".about__btn", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parents('.about').find(".about__text").removeClass('active');
    }
    else {
        $(this).addClass('active');
        $(this).parents('.about').find(".about__text").addClass('active');
    }

});

$(document).on('click', ".contacts__map-btn", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $("#map").slideUp();
    }
    else {
        $(this).addClass('active');
        $("#map").slideDown();
    }

});


$(document).on('mouseenter', "#swiperDemanded", function () {
    $(this).addClass('active');
});

$(document).on('mouseleave', "#swiperDemanded", function () {
    $(this).removeClass('active');
});

$(document).on('mouseenter', "#swiperYearsThumbs", function () {
    $(this).addClass('active');
});

$(document).on('mouseleave', "#swiperYearsThumbs", function () {
    $(this).removeClass('active');
});



const swiperMain = new Swiper('.main-swiper', {
    speed: 700,
    slidesPerView: 1,
    allowTouchMove: true,   //УБРАТЬ
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const swiperDemanded = new Swiper('.swiper-demanded', {
    speed: 700,
    breakpoints: {
        // when window width is >= 640px
        320: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        668: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        1024: {
            spaceBetween: 18,
            slidesPerView: 3.35,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }
    }
});

const swiperYearsThumbs = new Swiper('.swiper-years-thumbs', {
    speed: 700,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 6,
        },
        668: {
            slidesPerView: 3.15,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 3.15,
            spaceBetween: 16,
        }
    }
});

const swiperYears = new Swiper('.swiper-years', {
    speed: 700,
    slidesPerView: 1,
    thumbs: {
        swiper: swiperYearsThumbs,
    },
    allowTouchMove: false
});