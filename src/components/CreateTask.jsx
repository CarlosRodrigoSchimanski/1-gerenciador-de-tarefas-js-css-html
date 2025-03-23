import { useState } from "react"

function CreateTask(props){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input
                className="border border-slate-800 outline-slate-800 px-4 py-2 rounded-md"
                type="text"
                placeholder="Nome da tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                className="border border-slate-800 outline-slate-800 px-4 py-2 rounded-md"
                type="text"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                className="bg-slate-800 text-lime-300 px-4 py-2 rounded-md"
                onClick={() => {
                    if (!title.trim() || !description.trim()){
                        return alert("Preencha todos os campos")
                    }

                    props.onAddTask(title,description)
                    setTitle("")
                    setDescription("")
                    }}>
                Cadastrar
            </button>
        </div>
    )
}
export default CreateTask