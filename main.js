//---------------------SELECTORS------------
var addToDo = document.getElementById("add");
var ToDoItems = document.getElementById("ToDo-items");
var itemContainer = document.getElementById("item-container");
var input = document.getElementById("input");
var footer = document.getElementsByClassName("footer");
var dateTag = document.getElementById("Date");
var timeTag = document.getElementById("Time");


//--------------EVENT LISTENERS with FUNCTION-----------------------
addToDo.addEventListener("click", addTodo);
input.addEventListener("keyup", enterFunc);
window.addEventListener("load", showFooter); //Footer
window.addEventListener("load", showTime);

//Add Button function
function addTodo(e) {
    if (input.value == "") {
        alert("You must enter some value");
    }
    else {
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
            itemList.style.color = 'rgba(52, 74, 36, 0.6)';
            itemList.style.transform = 'scale(0.8)';
            itemList.style.transition = '0.7s ease';

        });

        btnTrash.addEventListener("click", function () {
            console.log("trash clicked");
            itemDiv.classList.add("deleted");
            itemDiv.addEventListener("transitionend", function(){
                itemList.parentElement.remove();
            })
            
            
        });

        ToDoItems.appendChild(itemDiv);
    }
}
//For Enter keypress:
function enterFunc() {
    if (event.key == "Enter") {
        addToDo.click();
    }
};

function showFooter() {
    var footer = document.querySelector(".footer");
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
    footer.style.position = "relative";
    footer.style.marginTop = "25rem";
    

}
//For Date & time
function showTime(){
    const date = new Date();
    dateTag.classList.add("date");
    timeTag.classList.add("time");
    //timeTag.innerText = date.toLocaleTimeString(); //--- For short hand

    // Using the below format for better visuals
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;

    timeTag.innerHTML = time;
    dateTag.innerHTML = date.toDateString();
    setTimeout(showTime, 1000);
    dateTag.classList.add("date");

}