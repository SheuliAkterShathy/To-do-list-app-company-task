import { useState } from "react";
import TaskList from "./Components/TaskList";
import AddTaskForm from "./Components/AddTaskForm";



function App() {

// ........ Tasks toDo List State ........ //

 const [toDo, setToDo]=useState([
  {"id":1, "title": "Task1","status":false },
  {"id":2, "title": "Task2","status":false}
 ])


// ........ Temporary State ........ //

const [newTask, setNewTask]=useState('');
const [updateData, setUpdateData]=useState('');


// ........ Add Task ........ //

const addTask = () =>{
  if(newTask){
    let num = toDo.length+1;
    let newEntry= {id:num, title:newTask, status: false}
    setToDo([...toDo, newEntry])
    setNewTask('')
  }
}


// ........  Delete Task ........ //

const deleteTask = (id) =>{
 let newTasks=toDo.filter(task=>task.id !== id);
 setToDo(newTasks);
}


// ........  Mark done as completed Task ........ //

const markCompleted = (id) =>{
let  newTask=toDo.map(task=>{
  if(task.id===id){
    return({...task,status:!task.status})
  }
  return task;
})
setToDo(newTask)
}


// ........  Cancel Updated Task ........ //

const cancelUpdate = (id) =>{
setUpdateData('')
}


// ........  Change Updated Task ........ //

const changeTask = (event) =>{
   let newEntry={
    id:updateData.id,
    title: event.target.value,
    status:updateData.status?true:false
   }
   setUpdateData(newEntry)
}


//........ Updated Task ........ //

const updateTask = () =>{
let filterRecords = [...toDo].filter(task=>task.id !== updateData.id);
let updatedObject = [...filterRecords, updateData];
setToDo(updatedObject);
setUpdateData('')
}


  return (
    <div className="w-[50%] mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-16 text-center underline uppercase">To Do List</h1>
      <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate}/>


      <TaskList  toDo={toDo} setToDo={setToDo} deleteTask={deleteTask} markCompleted={markCompleted} setUpdateData={setUpdateData} />

    </div>
  );
}

export default App;
