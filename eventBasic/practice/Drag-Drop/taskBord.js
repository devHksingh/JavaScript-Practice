const form = document.querySelector('#todo-form')
const inputFeild = document.querySelector('.input-feild')
const sbtBtn = document.querySelector('.taskSubmit')
const todoLane = document.querySelector('#todo-lane')

const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");



// let beingDragged 


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
    count()
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

        const bottomTask = insertAboveTask(zone,e.clientY)
        let currentTask = document.querySelector('.is-dragging')

        if (!bottomTask) {
            zone.appendChild(currentTask)
        } else {
            zone.insertBefore(currentTask,bottomTask)
        }
        count()
        
        // console.log(task)

        // zone.appendChild(task)
    },false)
})


function insertAboveTask(container,y){

    const element = container.querySelectorAll('.task:not(.is-dragging)')
    // console.log(element)
    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY

    element.forEach((task)=>{
            const { top } = task.getBoundingClientRect()

            // console.log(top)

            const offset = y - top;

            if (offset < 0 && offset > closestOffset) {
                
                closestOffset = offset
                closestTask = task
            }
    })
    return closestTask

}

// updateing summary section

const totalTask = document.querySelector('.total-task')
const holdEl = document.querySelector('.task-hold')
const progressEl = document.querySelector('.task-progress')
const doneEl = document.querySelector('.task-done')




// console.log(droppables)


count()

function count() {
    let total =0
    let hold =0
    let progress =0
    let done =0
    let ele =[]
    droppables.forEach((task)=>{
    
        ele.push(task.children.length -1)
        total = total +(task.children.length -1)
        // console.log(task.children.length -1)
    })
    // console.log(ele);
    hold = ele[1]
    progress = ele[2]
    done = ele[3]
    
    
    console.log(` hold ${hold} prog ${progress} done ${done} total ${total}`);
    totalTask.textContent= total
    holdEl.textContent=`${hold}`
    progressEl.textContent=`${progress}`
    doneEl.textContent=`${done}`
    console.log(total);
}