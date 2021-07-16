const quotes = [{
        quote: "인생은 집을 향한 여행이다.",
        author: "허먼 멜빌"
    },
    {
        quote: "내 기분은 내가 정해. 오늘은 행복으로 할래",
        author: "이상한 나라의 앨리스"
    },
    {
        quote: "나는 어제로 돌아갈 수 없어. 왜냐하면 나는 그때와 다른 사람이기 때문이야.",
        author: "이상한 나라의 앨리스"
    },
    {
        quote: "진정한 친구는 애써 지은 미소 속에 가려진 눈물을 봐.",
        author: "곰돌이 푸"
    }, {
        quote: "남들이 어떻게 생각하는지는 중요하지 않아,나 자신이 어떻게 생각하는지가 중요해.",
        author: "인어공주"
    },
    {
        quote: "양심은 사람들에게 들리지 않는 작은 목소리야.",
        author: "피노키오"
    }, {
        quote: "넌 이미 우리에게 축복을 받았어,아무조건 없이",
        author: "코코"
    }, {
        quote: "어제는 역사고, 내일은 미스테리    그리고 오늘은 선물이야.    그래서 오늘을 present라고 하는 이유지.",
        author: "쿵푸팬더"
    }, {
        quote: "네 운명의 주인은 바로 너야.  너 말고 아무것도   너와 너의 운명사이에 끼어들 수 없어.  그러니 운명을 받아드리고 즐기렴.",
        author: "쿵푸팬더"
    }, {
        quote: "내면의 평화와 깨달음을 얻기 위해  몇 시간 씩 명상에 잠길 필요는 없단다. 단지 마음이 보고 느끼는 대로 행동하렴.  너의 마음이 평화의 깨우침으로 너를 이끌도록 ",
        author: "쿵푸팬더"
    },
]

const quote = document.querySelector('.quotes__quote')
const author = document.querySelector('.quotes__author')

const todayQuotes =quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText=todayQuotes.quote;
author.innerText=todayQuotes.author
console.log()