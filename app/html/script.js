// Selection
const todoInput = document.querySelector(".todo-input")
const todoAddButton = document.querySelector(".add-btn")
const todoList = document.querySelector(".todo-list")

function listTodo() {
// Fetch ke API dgn method GET
// Reload daftar todo:
//   hapus semua todo di html
//   ganti sama yg didapet dr response API
}

function newTodo() {
// Fetch ke API dgn method POST
// jalanin listTodo() buat refresh html
}

function deleteTodo(e) {
// Fetch ke API dgn method DELETE
// jalanin listTodo() buat refresh html
}

/*function addTodo(e) {
  e.preventDefault()
  
  const todoDiv = document.createElement("div")
  const todo = document.createElement("li")
  const deleteButton = document.createElement("button")
  todo.textContent = todoInput.value
  deleteButton.textContent = "X"
  
  todoDiv.classList.add('todo')
  deleteButton.classList.add('delete-btn')
  
  todoDiv.appendChild(todo)
  todoDiv.appendChild(deleteButton)
  
  todoList.appendChild(todoDiv)
}
*/

todoAddButton.addEventListener('click', newTodo)
todoList.addEventListener('click', deleteTodo)

document.addEventListener("DOMContentLoaded", function(event) { 
// jalanin listTodo()
});