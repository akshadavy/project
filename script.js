document.addEventListener('DOMContentLoaded', () =>{
    const todoInput = document.getElementById("todo-input")
const addTasBtn = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list")

let task = JSON.parse(localStorage.getItem('task')) || [];
task.forEach(task => renderTask(task));

addTasBtn.addEventListener('click', () =>{
    const textInput = todoInput.value
    if(textInput === "") return;

    const newTask ={
        id: Date.now(),
        text: textInput,
        completed: false
    }

    task.push(newTask);
    saveTask();
    todoInput.value = "";
    console.log(task);
});

function renderTask(task){
  const li = document.createElement('li')
  li.setAttribute('data-id', task.id)
  if(task.completed) li.classList.add("completed");
  li.innerHTML = `
  <span> ${task.text}</span>
  <button> delete </button>
  `;
  todoList.appendChild(li);
}

function saveTask(){
    localStorage.setItem('task', JSON.stringify(task));
}
})