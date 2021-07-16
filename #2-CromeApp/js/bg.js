const img = ['cave.jpg','sea.jpg','watermelon.jpg']

const todayimg =img[Math.floor(Math.random()*img.length)]

document.body.style.backgroundImage = `url(./img/${todayimg})`