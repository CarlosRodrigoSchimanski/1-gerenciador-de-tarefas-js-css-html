function Tasks (props) {
    //pasar o titulo das tarefaz
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex space-x-2">
                    <button className="w-full bg-slate-800 text-lime-300 p-2 rounded-md">{task.title}</button>
                    <button className="bg-slate-800 text-lime-300 p-2 rounded-md">ver detalhes</button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks;