const toDoForm = document.querySelector('.todo-form')
const todoList = toDoForm.querySelector('.todo-list')
const toDoInput = toDoForm.querySelector('input')

const toDos = []
// 저장
function saveTodo(newTodo){
    localStorage.setItem('toDos',newTodo)
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
    createTodo(newTodo)
    saveTodo(newTodo)
}

toDoForm.addEventListener('submit', handleToDoSubmit)