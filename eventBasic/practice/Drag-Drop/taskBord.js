const form = document.querySelector('#todo-form')
const inputFeild = document.querySelector('.input-feild')
const sbtBtn = document.querySelector('.taskSubmit')
const todoLane = document.querySelector('#todo-lane')

const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");



let beingDragged 


// add user task to todo lane

form.addEventListener('submit',addUserTask,false)




function addUserTask(e){
    e.preventDefault()
    const newTask = document.createElement('p')
    newTask.classList.add('task')
    newTask.setAttribute('draggable',true)
    newTask.textContent = inputFeild.value
    
    todoLane.appendChild(newTask)
    // reset input feild

    newTask.addEventListener('dragstart',function(e){
            newTask.classList.add('is-dragging')
    },false)
    newTask.addEventListener('dragend',function(e){
        newTask.classList.remove('is-dragging')
    },false)
    inputFeild.value = ""
}


draggables.forEach((task)=>{
    task.addEventListener('dragstart',()=>{
        task.classList.add("is-dragging")
    });
    task.addEventListener('dragend',()=>{
        task.classList.remove("is-dragging")
    },false)

})

droppables.forEach((zone)=>{
    zone.addEventListener('dragover',(e)=>{
        e.preventDefault() // prevent default behaviour of dragover
    },false)
})


// const form = document.querySelector('#todo-form')
// const addBtn = document.querySelector('.taskSubmit')
// const inputFeild = document.querySelector('.input-feild')
// const todoLane = document.querySelector('#todo-lane')




// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     let inputValue = inputFeild.value;

//     if (! inputValue) return

//     const newTask = document.createElement('p')
//     newTask.classList.add("task")
//     newTask.setAttribute('dragable',true)
//     newTask.innerText= inputValue

//     todoLane.appendChild(newTask)

//     console.log(inputValue)
//     console.log(newTask)
//     console.log(todoLane)

//     newTask.addEventListener("dragstart", function dragStart()  {
//         newTask.classList.add("is-dragging");
//       });
    
//       newTask.addEventListener("dragend", function dragEnd() {
//         newTask.classList.remove("is-dragging");
//       });
    
//       todoLane.appendChild(newTask);
    
//       inputValue.value = "";


// },false)

// addBtn.addEventListener('click',addTodo,false);
// todoLane.addEventListener('click',todoList,false)







// function addTodo(e){
//     console.log(inputFeild.value)
    
// }

// function todoList(e){
//     console.log(e)
// }