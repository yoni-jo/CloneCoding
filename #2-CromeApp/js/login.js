'use strict'
const LoginForm = document.querySelector('.login-form');
const login_btn = LoginForm.querySelector('.login-btn');
const text_input = LoginForm.querySelector('input:first-child')
const welcome = document.querySelector('.welcome')


function submit(event) {
    event.preventDefault();
    const username = text_input.value
    welcome.classList.remove('hide')
    LoginForm.classList.add('hide')
    welcome.innerText = `Welcome !${username}~!`
}

login_btn.addEventListener('click', submit)