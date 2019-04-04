let initialState = {
    tasks:[]
}

const updateTasks = "updateTasks"
const completeNewTask = "completeTask"
const deleteNewTask = "deleteNewTask"

export function reducer(state = initialState, action){
    switch(action.type){
        case updateTasks:
            return {...state, tasks:action.payload }
        case completeNewTask:
            return {...state, tasks:action.payload }
        case deleteNewTask:
            return {...state, tasks:action.payload }
        default:
            return state
    }
}

export function addNewTask(newTask){
    console.log('NEW TASK: ', newTask)
    return{
        type:updateTasks,
        payload:newTask
    }
}
export function completeTask(completedTask){
    return{
        type:completeNewTask,
        payload:completedTask
    }
}
export function deleteTask(deletedTask){
    console.log("New array after deleting element:", deletedTask)
    return{
        type:deleteNewTask,
        payload:deletedTask
    }
}