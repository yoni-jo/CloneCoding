"use strict"

const clock = document.querySelector('.clock');


//실시간으로 현재 시간 알려주기
function CurrentTime(){
    const time = new Date()
    const hours =time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    
    clock.innerHTML = `${hours}:${minutes}:${seconds}`

}
CurrentTime()
setInterval(CurrentTime,1000)