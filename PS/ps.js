 // Selectors
 const todoInput = document.querySelector(".todo-input");
 const todoButton = document.querySelector(".todo-button");
 const todoList = document.querySelector(".todo-list");

 //Event listeners
 todoButton.addEventListener('click', addTodo);

 //Functions 
 function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    //Todo div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);


    //check mark button

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<span class="material-icons-outlined">
    add_box
    </span>";
    completedButton.classList.add(complete-btn);
    todoDiv.appendChild(completedButton);

    //trash button 
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<span class="material-icons-outlined">
    add_box
    </span>";
    trashButton.classList.add(trash-btn);
    todoDiv.appendChild(trashButton);

    //append to list 
    todoList.appendChild()


 }