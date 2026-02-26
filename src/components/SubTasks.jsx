import NewSubTask from "./NewSubTask.jsx";

export default function SubTasks() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Subtasks</h2>
            <NewSubTask />
            <p className="text-stone-800 my-4">This task does not have any subtasks yet</p>
            <ul></ul>
        </section>
    );
}