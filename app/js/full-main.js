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

$(document).on('click', ".stages__btn", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).parents('.stages').find(".text").removeClass('active');
    }
    else {
        $(this).addClass('active');
        $(this).parents('.stages').find(".text").addClass('active');
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



const swiperMain = new Swiper('.swiper-main', {
    speed: 700,
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.main-button-next',
        prevEl: '.main-button-prev',
    }
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
            slidesPerView: 3.7,
            navigation: {
                nextEl: '.demanded-button-next',
                prevEl: '.demanded-button-prev',
            },
        }
    }
});

const swiperYearsThumbs = new Swiper('.swiper-years-thumbs', {
    speed: 700,
    navigation: {
        nextEl: '.years-button-next',
        prevEl: '.years-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 6,
        },
        668: {
            slidesPerView: 3.3,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 3.5,
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

const swiperInterested = new Swiper('.swiper-interested', {
    speed: 700,
    navigation: {
        nextEl: '.interested-button-next',
        prevEl: '.interested-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.05,
            spaceBetween: 8,
        },
        668: {
            slidesPerView: 2.01,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 11,
            loop: true,
        }
    }
});