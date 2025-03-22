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
  return(
    <div className='w-screen h-screen bg-slate-800 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-center text-3xl font-bold text-lime-300'>Gerenciador de tarefas </h1>
        <Tasks tasks={tasks}/>
      </div>
      
    </div>
  )
}

export default App
