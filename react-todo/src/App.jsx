import { useState } from 'react'
import './App.css'
import TodoList from './components/todo-list'

function App() {
  const [newTask, setNewTask] = useState("")
  const [myTask,setMyTask] = useState([])
  const [edTask,setEdTask] = useState(null)

   function handleInput(e){
    let newValue = e.target.value
    setNewTask(newValue); 
   }

   function addTask(){
     setMyTask(prev =>[...prev, newTask])
     console.log(myTask)
   }
   function deleteTask(value){
    let updatedTask= myTask.filter((val,index)=>{
      console.log("line20: ",index,value)
      return index !== value;
    })
  setMyTask(updatedTask)
   }
  //  function editTask(index){
  //   let ar = myTask.filter((val,indx)=>{
  //     return indx == index
  //   })
  //   let editedTask = myTask.filter(item => item != ar)
  //   console.log(editedTask)


  //  }
  function sucessTask(){
console.log("SUCDEEEE")
  }
  
  return (
    <>
      <div className='main-body'>
        <div className='todo-list-maindiv'>
          <h3 className='todo-title'>My To-Do List</h3>
          <div>
            <div className='todo-task-input-div'>
              <div className='input-todo-div'>
                <label htmlFor="input-todo">Todo task</label>
               <input type="text" placeholder='Enter to do task' name='todo-item-input' id='input-todo' onChange={(e)=>{handleInput(e)}} />
              </div>
        
               <button className='input-btn' onClick={()=>{addTask()}}>add </button> 
            </div>
            
            <ul className='todo-list'>
             <h6>ToDo List Component</h6>
            {
             myTask.map((val,index)=>{
              return  <TodoList task={val} key={index} index={index} deleteTask={deleteTask}  sucessTask={sucessTask}/>
              
             })}
          
             {/* <TodoList task='reading books'/>
             <TodoList task='complete task'/> */}
             
             
              
            </ul>
          </div>

        </div>
      </div>

           

    </>
  )
}

export default App
