const toDoForm = document.querySelector('.todo-form')
const toDoInput = toDoForm.querySelector('input')
const todoList = document.querySelector('.todo-list')
// 삭제
function deleteTodo(event) {
    event.preventDefault()
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
    const newTodo = toDoInput.value
    event.preventDefault();
    toDoInput.value = ""
    createTodo(newTodo)
}

toDoForm.addEventListener("submit", handleToDoSubmit)