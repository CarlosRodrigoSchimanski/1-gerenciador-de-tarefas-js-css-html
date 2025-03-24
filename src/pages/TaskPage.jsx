import { ChevronLeftCircle } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

function TaskPage(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    return (
        <div className='w-screen h-screen bg-slate-600 p-6'>
            <div className="w-[500] space-y-4">
                <div className="flex justify-center relative mb-6 ">
                    <button
                        onClick={() => navigate(-1) }
                        className="absolute left-0 top-0 bottom-0 text-lime-300 ">
                        <ChevronLeftCircle/>
                    </button>
                    
                    <h1
                        className='text-center text-3xl font-bold text-lime-300'
                        > Deltalhes da tarefa
                    </h1>
                </div>

                <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">

                    <h2 className="border border-slate-800 outline-slate-800 px-4 py-2 rounded-md bg-slate-400 text-xl font-bold ">{title}</h2>
                    <p className="border border-slate-800 outline-slate-800 px-4 py-2 rounded-md bg-slate-400">{description}</p>
                </div>
            </div>
        </div>
    )
}


export default TaskPage