import NewSubTask from "./NewSubTask.jsx";

export default function SubTasks({ subtasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Subtasks</h2>
            <NewSubTask onAdd={onAdd} />
            {subtasks.length === 0 &&
                (<p className="text-stone-800 my-4">
                    This task does not have any subtasks yet
                </p>)}
            {subtasks.length > 0 && (
                < ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {subtasks.map(sub =>
                        <li key={sub.id} className="flex justify-between my-4">
                            <span>{sub.text}</span>
                            <button onClick={() => onDelete(sub.id)} className="text-stone-700 hover:text-red-500 text-2xl font-bold">&times;</button>
                        </li>)}
                </ul>)}
        </section >
    );
}