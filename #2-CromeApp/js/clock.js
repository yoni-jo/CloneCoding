"use strict"

const clock = document.querySelector('.clock');


//실시간으로 현재 시간 알려주기
function CurrentTime(){
    const time = new Date()
    const hours =String(time.getHours()).padStart(2,'0')
    const minutes = String(time.getMinutes()).padStart(2,'0')
    const seconds = String(time.getSeconds()).padStart(2,'0')


    clock.innerHTML = `${hours}:${minutes}:${seconds}`

}
CurrentTime()
setInterval(CurrentTime,1000)