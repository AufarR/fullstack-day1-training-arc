// Selection
const todoInput = document.querySelector(".todo-input")
const todoAddButton = document.querySelector(".add-btn")
const todoList = document.querySelector(".todo-list")

function listTodo() {
// Fetch ke API dgn method GET
  fetch('/api', {
  }).then(response => response.json()
  )
  .then(data => { // Reload daftar todo
    todoList.textContent = ''; // hapus semua todo di html
    data.forEach(function(obj) { appendTodoHtml(obj.content, obj._id); }); // ganti sama yg didapet dr response API
  })
}

function newTodo(e) {
  e.preventDefault()
  // Fetch ke API dgn method POST
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'content=' + todoInput.value
  }).then(response => response.json()
  )
  .then(data => {
    todoInput.value = ""
    listTodo(); // Reload html
  })
}

function deleteTodo(e) {
// Fetch ke API dgn method DELETE
  e.preventDefault()
  if (e.target.classList[0] === "delete-btn") {
    fetch('/api', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: 'id=' + e.target.classList[1].slice(3)
    }).then(response => response.json()
    )
    .then(data => {
      listTodo(); // Reload html
    })
  }
}

function appendTodoHtml(c,d) { // Insert hasil fetch database ke html
  const todoDiv = document.createElement("div")
  const todo = document.createElement("li")
  const deleteButton = document.createElement("button")
  todo.textContent = c
  deleteButton.textContent = "X"
  
  todoDiv.classList.add('todo')
  todoDiv.classList.add('id-'+d)
  deleteButton.classList.add('delete-btn')
  deleteButton.classList.add('id-'+d)
  
  todoDiv.appendChild(todo)
  todoDiv.appendChild(deleteButton)
  
  todoList.appendChild(todoDiv)
}

// Event listener tombol-tombol
todoAddButton.addEventListener('click', newTodo)
todoList.addEventListener('click', deleteTodo)

// Event listener saat website selesai loading
document.addEventListener("DOMContentLoaded", function(event) { 
  listTodo();
});