'use strict'
const LoginForm = document.querySelector('.login-form');
const login_btn = LoginForm.querySelector('.login-btn');
const text_input = LoginForm.querySelector('input:first-child')
const welcome = document.querySelector('.welcome')

//1. 이름 입력후h1태그에 환영인사 뜨게하기
function submit(event) {
    event.preventDefault();
    const username = text_input.value
    welcome.classList.remove('hide')
    LoginForm.classList.add('hide')
    welcome.innerText = `Welcome !${username}~!`
    localStorage.setItem('username', username)
}



//2.이름이 등록되어있는지 유무 확인하기 

const storage_name = localStorage.getItem('username')
if (storage_name === null) {
    LoginForm.classList.remove('hide')
    login_btn.addEventListener('click', submit)
}else{
    welcome.innerText = `Welcome !${storage_name}~!`
    welcome.classList.remove('hide')
}