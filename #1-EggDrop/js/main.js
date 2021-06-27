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
                top: 110
            })
            gsap.to(lnb__list, .6, {
                delay: .5,
                opacity: 1,
                top: 0,
                display:'flex'
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
            display:'none'
        })
    })
})