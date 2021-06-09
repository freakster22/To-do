//---------------------SELECTORS------------
var addToDo = document.getElementById("add");
var ToDoItems = document.getElementById("ToDo-items");
var itemContainer = document.getElementById("item-container");
var input = document.getElementById("input");

//--------------EVENT LISTENERS with FUNCTION-----------------------
addToDo.addEventListener("click", addTodo);
input.addEventListener("keyup", enterFunc);

//Footer
window.addEventListener('load', event => {
    var footer = document.getElementsByClassName("footer");
    footer.style.display = "block"
})
//Add Button function
function addTodo(e) {
    if (input.value == "") {
        alert("You must enter some value");
    }
    //Div element for each item
    var itemDiv = document.createElement("div");
    itemDiv.classList.add("itemDiv");
    itemContainer.appendChild(itemDiv);

    //list element for each item
    var itemList = document.createElement("li");
    itemList.classList.add("list");
    itemList.innerText = input.value;

    //button element for each item
    var btnCheck = document.createElement("button");
    btnCheck.classList.add("check");
    btnCheck.innerHTML = "✅";

    //button element for each item
    var btnTrash = document.createElement("button");
    btnTrash.classList.add("trash");
    btnTrash.innerText = "🗑️";

    //append the child items
    itemDiv.appendChild(itemList);
    itemDiv.appendChild(btnCheck);
    itemDiv.appendChild(btnTrash);


    // para.addEventListener('click', evt => {
    //     para.style.textDecoration = 'line-through'
    //     para.style.color = 'rgb(200,180,145)'
    // });
    // para.addEventListener('dblclick', evt => {
    //     ToDoItems.removeChild(para);
    // })

    input.value = '';


    btnCheck.addEventListener("click", function () {
        console.log("chek clicked");
        itemList.style.textDecoration = 'line-through';
        itemList.style.color = 'rgba(200,180,145,0.6)';

    });

    btnTrash.addEventListener("click", function () {
        console.log("chek clicked");
        itemList.classList.toggle("deleted");
        itemList.parentElement.remove();
    });

}
//For Enter keypress:
function enterFunc() {
    if (event.key == "Enter") {
        addToDo.click();
    }
};