import React, {Component} from "react"
import "../Components/task.css"

export default function task(props){
    return(
        <div className = "taskContainer">
            <h1 className = {props.completed? "completedTask":"notCompletedTask"}>{props.task_title}</h1>
            <p>{props.task_description}</p>
            <button onClick = {() =>props.completeTaskFn(props.task_id)} type="button" disabled={props.completed} className = {props.completed? "completed":"notCompleted"}>Complete task</button>
            <button onClick ={() =>{props.deleteTaskFn(props.task_id)}}>Delete task</button>
        </div>
    )
}