import { useState } from 'react'
import Tasks from './components/Tasks'
function App() {
  const [tasks,setTasks] = useState([
    {
      id:1,
      title:'Estudar programação',
      descripition: 'Estudar programação para se tornar um desenvolvedor',
      status: false
    },
    {
      id:2,
      title:'Tomar café',
      descripition: 'Tomar um café para relaxar',
      status: false
    },
    {
      id:3,
      title:'Estudar JavaScript',
      descripition: 'Estudar JavaScript para aprender a programar',
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

  return(
    <div className='w-screen h-screen bg-slate-800 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-center text-3xl font-bold text-lime-300'>Gerenciador de tarefas </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete}/>
      </div>
      
    </div>
  )
}

export default App
