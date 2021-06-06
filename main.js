var addToDo = document.getElementById("add");
var ToDoItems = document.getElementById("ToDo-items");
var input = document.getElementById("input");

addToDo.addEventListener("click", function(){
    var para = document.createElement("p");
    para.innerText = input.value;
    ToDoItems.appendChild(para);
    input.document.write("");

})