'use strict'

const gnb = document.querySelectorAll('.gnb li')
const lnb = document.querySelector('.lnb')
const lnb__list = document.querySelectorAll('.lnb__list')

// 메뉴 마우스 호버시 slideDown
gnb.forEach((gnb) => {
    lnb__list.forEach((lnb__list) => {
        gnb.addEventListener("mouseenter", () => {
            gsap.to(lnb, 0.5, {
                opacity: 1,
                display: 'flex',
                top: 100
            })
            gsap.to(lnb__list, .6, {
                delay: .5,
                opacity: 1,
                top: 0,
                display: 'flex'
            })
        })

    })
    lnb.addEventListener("mouseleave", () => {
        gsap.to(lnb, 0.1, {
            opacity: 0,
            display: 'none',
            top: -210

        })
        gsap.to(lnb__list, 0.1, {
            opacity: 0,
            display: 'none'
        })
    })
})
//상단 배너슬라이드 
new Swiper('.slide-banner .swiper-container', {
    direction: 'horizontal',
    autoplay: {
        delay:3000
    },
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.slide-banner .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요쇼 제어 

    }
});

//메뉴 슬라이드 
const menu=new Swiper('.menu .swiper-container', {
    direction: 'horizontal',
    autoplay: {
        delay:4000
    },
    slidesPerView:4.5,
    spaceBetween:10,
    loop: true,
    centeredSlides:true
});

// 스크롤 할때마다 각 세션 이미지가 나타나는 효과
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정 
            triggerHook: 1 // 위 triggerElement가 0.8위치에 걸리면 실행되게하는 옵션
        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller());
    })


//scrollTop top button

const scroll_On= document.querySelector(".slideOn")
const menu_Offset = document.querySelector(".menu").offsetTop
const Top=document.querySelector('.btn--top')


scroll_On.addEventListener("click",slideDown)
Top.addEventListener("click",slideUp)
function slideDown(){
     window.scrollTo({
        top:menu_Offset,
        behavior:'smooth'
    })
}
function slideUp(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}