// $(".about__btn").click(function () {
//     $(".about__btn-show").toggleClass("active");
//     $(".about__btn-hide").toggleClass("active");
//     $(".about__text").toggleClass("active");
// });


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
        // $(".map").removeClass('active');
        $("#map").slideUp();
    }
    else {
        $(this).addClass('active');
        // $(".map").addClass('active');
        $("#map").slideDown();
    }

});

const swiper = new Swiper('.swiper', {
    speed: 400,
});







// // Получаем контейнер
// const container = document.querySelector(".container");
// // Получаем контент:
// const content = document.querySelector(".content");
// // 1. Получаем высоту контента, который мы хотим показать/скрыть
// const heightOfContent = content.getBoundingClientRect().height;
// // Получаем кнопку
// const btn = document.querySelector(".trigger");

// // 2. Задаем пользовательские свойства CSS с высотой контента
// container.style.setProperty("--containerHeight", `${heightOfContent}px`);

// // Когда высота задана
// setTimeout(e => {
//     document.documentElement.classList.add("height-is-set");
//     3. content.setAttribute("aria-hidden", "true");
// }, 0);

// btn.addEventListener("click", function(e) {
//     container.setAttribute("data-drawer-showing", container.getAttribute("data-drawer-showing") === "true" ? "false" : "true");
//     // 5. Переключаем значение aria-hidden
//     content.setAttribute("aria-hidden", content.getAttribute("aria-hidden") === "true" ? "false" : "true");
// })








// // Получаем контент:
// const content = document.querySelector(".about__text");
// // 1. Получаем высоту контента, который мы хотим показать/скрыть
// const heightOfContent = content.getBoundingClientRect().height;
// // Получаем кнопку
// const btn = document.querySelector(".about__btn-hide");

// const span = document.querySelector(".about__btn-hide-span");
// const spanText = span.textContent;
// console.log(spanText);

// // 2. Задаем пользовательские свойства CSS с высотой контента
// content.style.setProperty("--containerHeight", `${heightOfContent}px`);

// // Когда высота задана
// setTimeout(e => {
//     document.documentElement.classList.add("height-is-set");
//     content.setAttribute("aria-hidden", "true");
// }, 0);

// btn.addEventListener("click", function (e) {
//     // 5. Переключаем значение aria-hidden
//     content.setAttribute("aria-hidden", content.getAttribute("aria-hidden") === "true" ? "false" : "true");
//     btn.setAttribute("aria-hidden", content.getAttribute("aria-hidden") === "true" ? "false" : "true");
// });