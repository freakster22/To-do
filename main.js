var addToDo = document.getElementById("add");
var ToDoItems = document.getElementById("ToDo-items");
var input = document.getElementById("input");

addToDo.addEventListener("click", function () {
    if(input.value==""){
        alert("You must enter some value");
    }
    var para = document.createElement("p");
    para.classList.add("list");
    para.innerText=input.value;
    ToDoItems.appendChild(para);
    input.value='';
    para.addEventListener('click', evt =>
        {
            para.style.textDecoration='line-through'
            para.style.color='rgb(200,180,145)'
        });
    para.addEventListener('dblclick', evt=>
    {
        ToDoItems.removeChild(para);
    })
});
//For Enter keypress:
input.addEventListener("keyup",event =>
{
    if(event.key=="Enter"){
        addToDo.click();
    }
});