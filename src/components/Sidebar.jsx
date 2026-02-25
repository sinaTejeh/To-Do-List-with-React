import Button from "./Button";

export default function Sidebar({ onStartAddTask, tasks, onSelectTask, selectedTaskId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button title='+ Add Project' onClick={onStartAddTask} />
            </div>
            <ul className="mt-8">
                {tasks.map(task => {
                    let cssStyle = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                    if (task.id === selectedTaskId) {
                        cssStyle += ' bg-stone-800 text-stone-200';
                    } else {
                        cssStyle += ' text-stone-400';
                    }
                    return (
                        <li key={task.id}>
                            <button
                                className={cssStyle}
                                onClick={() => onSelectTask(task.id)}
                            >{task.title}</button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}