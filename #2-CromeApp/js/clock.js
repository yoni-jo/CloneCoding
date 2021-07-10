"use strict"

const clock = document.querySelector('.clock');
const time = new Date()
const hours =time.getHours()
const minutes = time.getMinutes()
const seconds = time.getSeconds()

//실시간으로 현재 시간 알려주기
clock.innerHTML = `${hours}:${minutes}:${seconds}`
