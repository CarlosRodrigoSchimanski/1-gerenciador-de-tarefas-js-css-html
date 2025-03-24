import { useState } from 'react'
import Tasks from './components/Tasks'
import CreateTask from './components/CreateTask'
import {v4} from 'uuid'
function App() {
  const [tasks,setTasks] = useState([
    {
      id:1,
      title:'Estudar programação',
      description: 'Estudar programação para se tornar um desenvolvedor',
      status: false
    },
    {
      id:2,
      title:'Tomar café',
      description: 'Tomar um café para relaxar',
      status: false
    },
    {
      id:3,
      title:'Estudar JavaScript',
      description: 'Estudar JavaScript para aprender a programar',
      status: false
    }
  ])

  function onTaskClick(taskId){
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, status:!task.status}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function onTaskDelete(taskId){
    const updatedTasks = tasks.filter(task => task.id!== taskId)
    setTasks(updatedTasks)
  }

  
  function onAddTask(title, description){
    const newTask = {
      id:v4(),
      title,
      description,
      status: false
    }
    setTasks([...tasks, newTask])
  }

  //criar uma função que receba um id e atualize a descrição de uma tarefa
  /*function updateTaskDescription(taskId, newDescription){
    const updatedTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, descripition: newDescription}
      }
      return task
    })
    setTasks(updatedTasks)
  }*/

  return(
    <div className='w-screen h-screen bg-slate-600 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <h1 className='text-center text-3xl font-bold text-lime-300'>Gerenciador de tarefas </h1>
        <CreateTask onAddTask={onAddTask}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete}/>
      </div>
      
    </div>
  )
}

export default App
