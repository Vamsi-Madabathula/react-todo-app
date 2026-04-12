import React  from "react";

function TodoList({task,index,deleteTask,sucessTask}){
    
    return(<>
          
             <li>
                {task}
                <button className='btn-edit' onClick={()=>{sucessTask()}}>sucess</button> 
                <button className='btn-delete' onClick={()=>{deleteTask(index)}}>Delete</button> 
              </li>
            </>
    )
}

export default TodoList