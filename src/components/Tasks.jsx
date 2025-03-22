function Tasks(props) {
    // passar o título das tarefas
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex space-x-4">
                    <button
                        onClick={() => props.onTaskClick(task.id)}
                        className={`w-full text-lime-300 p-4 rounded-md text-left bg-slate-800 ${
                            task.status && 'line-through'
                        }`}
                    >
                        {task.title}
                    </button>

                    <button className="bg-slate-800 text-lime-300 p-2 rounded-md">
                        Detalhes
                    </button>

                    <button
                        onClick={() => props.onTaskDelete(task.id)}
                        className="bg-slate-800 text-lime-300 p-2 rounded-md">
                        Deletar
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;
