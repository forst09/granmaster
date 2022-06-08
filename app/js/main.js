$(document).ready(function () {
    //развернуть текст на главной странице секции "о компании"
    $(document).on('click', ".show-btn", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('section').find(".text-hide").removeClass('active');
        }
        else {
            $(this).addClass('active');
            $(this).parents('section').find(".text-hide").addClass('active');
        }

    });

    //развернуть текст секции "Этапы изготовления гранул"
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

    //развернуть карту
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

    //градиент на свайпер по наведению мыши
    $(document).on('mouseenter', "#swiperDemanded", function () {
        $(this).addClass('active');
    });
    $(document).on('mouseleave', "#swiperDemanded", function () {
        $(this).removeClass('active');
    });

    //градиент на свайпер по наведению мыши
    $(document).on('mouseenter', "#swiperYearsThumbs", function () {
        $(this).addClass('active');
    });
    $(document).on('mouseleave', "#swiperYearsThumbs", function () {
        $(this).removeClass('active');
    });


    //инициализация свайпера с главной страницы на главном экране
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
        },
    });

    //инициализация тумбов свайпера секции "Уже несколько лет..."
    const swiperYearsThumbs = new Swiper('.swiper-years-thumbs', {
        speed: 700,
        slidesPerView: 3.5,
        spaceBetween: 16,
        navigation: {
            nextEl: '.years-button-next',
            prevEl: '.years-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 6,
            },
            668: {
                slidesPerView: 3.19,
                spaceBetween: 8,
            },
            1024: {
                slidesPerView: 3.15,
                spaceBetween: 16,
            }
        },
    });

    //инициализация свайпера секции "Уже несколько лет..."
    const swiperYears = new Swiper('.swiper-years', {
        speed: 700,
        slidesPerView: 1,
        thumbs: {
            swiper: swiperYearsThumbs,
        },
        allowTouchMove: false
    });

    // подключение свайпера в секции на экранах > 1024
    const pageWidth = document.documentElement.scrollWidth;
    if (pageWidth >= 1024) {
        // секция "Самое востребованное на рынке"
        const swiperDemanded = new Swiper('.swiper-demanded', {
            speed: 700,
            spaceBetween: 18,
            slidesPerView: 3.39,
            navigation: {
                nextEl: '.demanded-button-next',
                prevEl: '.demanded-button-prev',
            },
        });

        // секция "Вы интересовались"
        const swiperInterested = new Swiper('.swiper-interested', {
            breakpoints: {
                1024: {
                    loop: true,
                    slidesPerView: 2,
                    spaceBetween: 11,
                    speed: 700,
                    navigation: {
                        nextEl: '.interested-button-next',
                        prevEl: '.interested-button-prev',
                    },
                }
            }

        });

        // каталог 2го уровня секция "навигация"
        const swiperCatalog2lvlNav = new Swiper('.swiper-catalog2lvl-nav', {
            speed: 700,
            spaceBetween: 16,
            slidesPerView: 3.958,
        });

        // карточка товара секция "описание"
        const swiperCardDescription = new Swiper('.swiper-card-description', {
            speed: 700,
            spaceBetween: 6,
            slidesPerView: 10.8,
        });

        //swiper-card-drawings
        const swiperCardDrawings = new Swiper('.swiper-card-drawings', {
            speed: 700,
            spaceBetween: 12,
            slidesPerView: 2.1,
            navigation: {
                nextEl: '.card-drawings-button-next',
                prevEl: '.card-drawings-button-prev',
            },
        });
    }

    $(document).on('click', ".products__filters-tabs-img", function () {
        $('.products-tab').removeClass('active');
        $('#' + $(this).attr("data-tab")).addClass('active');
        $('.products__filters-tabs-img').removeClass('active');
        $(this).addClass('active');
    });

    // табы каталога 2го уровня, на мобилках включать длинные карточки
    if ((pageWidth >= 320) && (pageWidth < 668)) {
        $("#tabLines").trigger("click");
    }
    // табы каталога 2го уровня, начиная с планшетов включать плитки
    if (pageWidth >= 668) {
        $("#tabTiles").trigger("click");
    }

    //сортировка на каталоге 2го уровня
    $(document).on('click', ".products__filters-item", function () {
        if ($(this).hasClass('active')) {
            if ($(this).hasClass('sort')) {
                $(this).removeClass('sort');
            }
            else {
                $(this).addClass('sort');
            }
        }
        else {
            $(".products__filters-item").removeClass('sort');
        }
        $(".products__filters-item").removeClass('active');
        $(this).addClass('active');

    });


    //изменение картинки при наведении у карточек каталога 2го уровня
    $(document).on('mouseenter', ".products__tiles-col-item", function () {
        $(this).parents('.products__tiles-item').find(".products__tiles-col-item").removeClass('active');
        $(this).addClass('active');
    });
});

