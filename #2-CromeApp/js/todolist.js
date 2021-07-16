"use strict"

const toDoForm = document.querySelector('.todo-form')
const todoList = document.querySelector('.todo-list')
const toDoInput = toDoForm.querySelector('input')

const toDos = []

const TODOS_KEY = 'toDos'
// 저장
function saveTodo(toDos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
// 삭제
function deleteTodo(event) {
    const li = event.target.parentElement
    li.remove()
}

// todolist에 추가
function createTodo(newTodo) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    const button = document.createElement('button')
    todoList.appendChild(li)
    li.appendChild(span)
    li.appendChild(button)
    span.innerText = newTodo
    button.innerText = 'del'
    button.addEventListener('click', deleteTodo)
}

// input버튼 눌렀을때 
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value
    toDoInput.value = ""
    toDos.push(newTodo)
    createTodo(newTodo)
    saveTodo(toDos)
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const saveTodos = localStorage.getItem(TODOS_KEY)

if (saveTodos) {
    //locaclstrorage안에 todos가 있을경우
    const parseTodos = JSON.parse(saveTodos)
    parseTodos.forEach((item) => {
        createTodo(item)

    })
} else {

}