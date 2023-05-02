var task1 =  {id : 1, title : "ranger sa chambre", completed : false};
var task2 =  {id : 2, title : "faire les courses", completed : false};
var task3 =  {id : 3, title : "aller chercher le pain", completed : false};
var AllTask = JSON.parse(localStorage.getItem("AllTask")) || {task1: task1, task2: task2, task3: task3};
var ul = document.getElementById("alltask");
var add = document.getElementById("add");
var addtask = document.getElementById("newtask");
var ID = localStorage.getItem("ID") || 4;

add.addEventListener("click", function(event){
    event.preventDefault();
    AddTask();
});
DisplayTask();
function DisplayTask(){
    Object.keys(AllTask).forEach(function(key){
        ul.innerHTML += `
            <li> 
                ${AllTask[key].title} 
                <button data-id='${AllTask[key].id}' class="del" >Delete</button>
                <input data-id='${AllTask[key].id}' class="done" type="checkbox">
            </li>
        `;
        var del = document.querySelectorAll(".del");
        del.forEach(function(element){
            element.addEventListener("click", function(event){
                event.preventDefault();
                var id = this.getAttribute("data-id");
                DeleteTask(id);
            });
        });
        // var done = document.querySelectorAll(".done");
        // done.forEach(function(element){
        //     element.addEventListener("change", function(event){
        //         var id = this.getAttribute("data-id");
        //         console.log(element.checked);
        //         if(element.checked){
        //             element.checked = false;
        //             UnDoneTask(id);
        //         }else{
        //             element.checked = true;
        //             DoneTask(id);
        //         }
        //     });
    //     });
     });
    console.log(AllTask);
}
function AddTask(){
    var newtask = {id : ID, title : addtask.value, completed : false};
    var key = "task" + newtask.id;
    AllTask[key] = newtask;
    localStorage.setItem("AllTask", JSON.stringify(AllTask));
    ul.innerHTML = "";
    DisplayTask();
    addtask.value = "";
    ID++;
    localStorage.setItem("ID", ID);
}
function DeleteTask(id){
    console.log(id);
    var key = "task" + id;
    delete AllTask[key];
    localStorage.setItem("AllTask", JSON.stringify(AllTask));
    ul.innerHTML = "";
    DisplayTask();
}
function DoneTask(id){
    console.log(id);
    var key = "task" + id;
    AllTask[key].completed = true;
    localStorage.setItem("AllTask", JSON.stringify(AllTask));
    ul.innerHTML = "";
    DisplayTask();
}
function UnDoneTask(id){
    console.log(id);
    var key = "task" + id;
    AllTask[key].completed = false;
    localStorage.setItem("AllTask", JSON.stringify(AllTask));
    ul.innerHTML = "";
    DisplayTask();
}
