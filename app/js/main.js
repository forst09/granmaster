document.getElementById("tabTiles").click();

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
    },
    // breakpoints: {
    //     1024: {
    //         allowTouchMove: false,
    //     }
    // }
});

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
const swiperYears = new Swiper('.swiper-years', {
    speed: 700,
    slidesPerView: 1,
    thumbs: {
        swiper: swiperYearsThumbs,
    },
    allowTouchMove: false
});



// const swiperYearsThumbs = new Swiper('.swiper-years-thumbs', {
//     speed: 700,
//     navigation: {
//         nextEl: '.years-button-next',
//         prevEl: '.years-button-prev',
//     },
//     breakpoints: {
//         320: {
//             // slidesPerView: 2,
//             spaceBetween: 6,
//         },
//         668: {
//             slidesPerView: 3.3,
//             spaceBetween: 8,
//         },
//         1024: {
//             slidesPerView: 3.5,
//             spaceBetween: 16,
//         }
//     }
// });

// const swiperYears = new Swiper('.swiper-years', {
//     speed: 700,
//     slidesPerView: 1,
//     thumbs: {
//         swiper: swiperYearsThumbs,
//     },
//     allowTouchMove: false
// });

const pageWidth = document.documentElement.scrollWidth;
if (pageWidth >= 1024) {
    const swiperDemanded = new Swiper('.swiper-demanded', {
        speed: 700,
        spaceBetween: 18,
        slidesPerView: 3.39,
        navigation: {
            nextEl: '.demanded-button-next',
            prevEl: '.demanded-button-prev',
        },
    });

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

    const swiperCatalog2lvlNav = new Swiper('.swiper-catalog2lvl-nav', {
        speed: 700,
        spaceBetween: 16,
        slidesPerView: 3.958,
    });
}
// if (pageWidth < 1024) {
//     swiperDemanded.destroy();
// }



// if (pageWidth < 1024) {
//     swiperInterested.destroy();
// }



// window.addEventListener("resize", function () {
//     const screenWidth = this.innerWidth;

// });


// console.log(screenWidth, pageWidth);
// if (screenWidth >= 1024) {

// }

function openTab(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("products-tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("products__filters-tabs-img");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

if ((pageWidth >= 320) && (pageWidth < 668)) {
    document.getElementById("tabLines").click();
}