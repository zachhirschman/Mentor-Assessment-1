import React, { Component } from 'react';
import './App.css';
import Task from "./Components/Task"
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class App extends Component {
  constructor(){
    super()
    this.state ={
      taskName:"",
      taskDescription:"",
      id:0,
      tasks:[],
      error:false
    }
  }

  

  addTask = (e) =>{
    if(this.state.taskName === ""){
      this.setState({
        error:true,
        taskName:"",
        taskDescription:""
      })
    }
    else{
      let task = {
        id:this.state.id+1,
        title:this.state.taskName,
        description:this.state.taskDescription,
        completed:false
      }
      let tasksCopy = this.state.tasks.slice()
      tasksCopy.push(task)

      this.setState({
        tasks:tasksCopy,
        id:this.state.id+1
      })
      this.setState({
        taskName:"",
        taskDescription:"",
        error:!this.state.error
      })

    }
      
  }
  
  completeTask = (id) =>{
    let tasksCopy = this.state.tasks.slice()
    for(let i = 0; i < tasksCopy.length; i++){
      if(tasksCopy[i].id == id){
        tasksCopy[i].completed = true
      }
    }
    this.setState({
      tasks:tasksCopy
    })
  }
  deleteTask = (id) =>{
    console.log(id)
    let tasksCopy = this.state.tasks.slice()
    for(let i = 0; i < tasksCopy.length; i++){
      if(tasksCopy[i].id == id){
        console.log("ID TO DELETE:", tasksCopy[i])
        tasksCopy.splice(tasksCopy[i],1)
      }
      this.setState({
        tasks:tasksCopy
      })
    }
  }
  render() {
    let mappedTasks = this.state.tasks.map(task =>{
      console.log(task)
      return(
        <Task task_id = {task.id}
              task_title = {task.title}
              task_description = {task.description}
              completed = {task.completed}
              completeTaskFn = {this.completeTask}
              deleteTaskFn = {this.deleteTask}/>
      )
    })
    return (
      <div className="App">
        <div className = "main_form">
          <h1>To-do:</h1>
            {this.state.error? <p style = {{"color":"red"}}>Must enter a task name!!!</p>:null}
                <label>Task Name:</label>
                  <input value= {this.state.taskName} onChange = {(e) =>{this.setState({taskName:e.target.value})}} placeholder = "Enter a task name..."></input>

                <label>Task Description:</label>
                  <input value= {this.state.taskDescription} onChange = {(e) =>{this.setState({taskDescription:e.target.value})}} placeholder = "Enter a description of the task..."></input>
                  <button onClick = {(e) => this.addTask(e)}>Add Task</button>
        </div>
       
        <div>
          {mappedTasks}
        </div>
      </div>
    );
  }
}

export default App;
