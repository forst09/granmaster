//развернуть текст на главной странице секции "о компании"
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
}

// табы каталога 2го уровня
let tabElement = $("#tabTiles").html();
if (!tabElement) { } else {
    document.getElementById("tabTiles").click();
};

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("products-tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("products__filters-tabs-img");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

// табы каталога 2го уровня, на мобилках включать длинные карточки
let tabLines = $("#tabLines").html();

if ((pageWidth >= 320) && (pageWidth < 668)) {
    if (!tabLines) { } else {
        document.getElementById("tabLines").click();
    };
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
    $(".products__tiles-col-item").removeClass('active');
    $(this).addClass('active');
});