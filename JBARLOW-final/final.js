/*buttons*/
let buttonPush = document.getElementById("buttonPush");
let buttonEdit = document.getElementById("buttonEdit");
let buttonDel = document.getElementById("buttonDel");

/*task info*/
let taskName = document.getElementById("taskName");
let taskPri = document.getElementById("taskPri");
let taskImp = document.getElementById("taskImp");
let taskCom = document.getElementById("taskCom");
let taskmanager = document.getElementById("taskmanager");

/*task list*/
let tasks = [];
let nextId = 1;
let selectedTask = null; /*this is so i can edit tasks*/

function myTask() {
    taskmanager.innerHTML = "";

    for (let i = 0; i < tasks.length; i = i + 1) {
        let task = tasks[i]
        let taskBox = document.createElement("div");

        /* put into scrolling box*/
        taskBox.innerHTML += `
        <p>${task.name}<br>
            Priority: ${task.priority}<br>
            Important: ${task.isImportant}<br>
            Completed: ${task.isCompleted}<br>
            Date: ${task.date}
        </p>`;
        
        if (task.isImportant == true) {
            taskBox.style.color = "red";
        }

        if (task.isCompleted == true) {
            taskBox.style.textDecoration = "line-through";
        }

        taskBox.addEventListener("click", function () {
            selectedTask = task.id;

            taskName.value = task.name;
            taskPri.value = task.priority;
            taskImp.checked = task.isImportant;
            taskCom.checked = task.isCompleted;

            console.log(JSON.stringify(tasks));
            myTask();
        });

        taskmanager.appendChild(taskBox);

        if (task.id == selectedTask) {
            taskBox.style.backgroundColor = "#ffd6f4";
        }
    }
}

buttonPush.addEventListener("click", function () {
    /* this SHOULD make it so tasks are saved*/
    if (taskName.value.trim() == "") {
        return;
    }
    let newTask = {
        id: nextId,
        name: taskName.value,
        priority: taskPri.value,
        isImportant: taskImp.checked,
        isCompleted: taskCom.checked,
        date: new Date().toLocaleDateString()
    };

    tasks.push(newTask);
    nextId += 1;

    console.log(JSON.stringify(tasks)); /*this should push it into the console*/
    myTask();
});

buttonEdit.addEventListener("click", function() {
    if (selectedTask == null) {
        return;
    }

    /*this should make it so you can pick ur task???*/
    /*for (let i = 0; i < tasks.length; i = i + 1) {
        if (tasks[i].id == selectedTask) {
            tasks[i].name = taskName.value;
            tasks[i].priority = taskPri.value;
            tasks[i].isImportant = taskImp.checked;
            tasks[i].isCompleted = taskCom.checked;
        }
    } 
    let editedTask = {
        id: selectedTask,
        name: taskName.value,
        priority: taskPri.value,
        isImportant: taskImp.checked,
        isCompleted: taskCom.checked,
        date: new Date().toLocaleTimeString()
    };*/

    for (let i = 0; i < tasks.length; i = i + 1) {
        if (tasks[i].id == selectedTask) {
            tasks[i].name = taskName.value;
            tasks[i].priority = taskPri.value;
            tasks[i].isImportant = taskImp.checked;
            tasks[i].isCompleted = taskCom.checked;
        }
    }

    console.log(JSON.stringify(tasks));
    myTask();
})

buttonDel.addEventListener("click", function () {
    if (selectedTask == null) {
        return;
    }

    for (let i = 0; i < tasks.length; i = i + 1) {
        if (tasks[i].id == selectedTask) {
            tasks.splice(i, 1);
            break;
        }
    }

    console.log(JSON.stringify(tasks));
    myTask();

    selectedTask = null;
    taskName.value = "";
    taskPri.value = "High";
    taskImp.checked = false;
    taskCom.checked = false;
});