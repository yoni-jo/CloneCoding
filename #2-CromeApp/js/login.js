'use strict'
const LoginForm = document.querySelector('.login-form');
const login_btn = LoginForm.querySelector('.login-btn');
const text_input = LoginForm.querySelector('input:first-child')
const welcome = document.querySelector('.welcome')

//1. 이름 입력후h1태그에 환영인사 뜨게하기
function submit(event) {
    event.preventDefault();
    const username = text_input.value
    localStorage.setItem('username', username)
    LoginForm.classList.add('hide')
    userName(username)
}

//3.중복되는 동작 함수로 만들기 

function userName(username){
    welcome.innerText = `Welcome !${username}~!`
    welcome.classList.remove('hide')
}

//2.이름이 등록되어있는지 유무 확인하기 

const storage_name = localStorage.getItem('username')
if (storage_name === null) {
    LoginForm.classList.remove('hide')
    login_btn.addEventListener('click', submit)
}else{
    userName(storage_name)
}