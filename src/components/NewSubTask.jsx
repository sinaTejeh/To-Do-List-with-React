import { useState } from "react";

export default function NewSubTask({ onAdd }) {
    const [enteredSubtask, setEnteredSubtask] = useState('');
    const handleChange = function (e) {
        setEnteredSubtask(e.target.value);
    };

    function handleClick() {
        if (enteredSubtask.trim() === '') return;

        onAdd(enteredSubtask);
        setEnteredSubtask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredSubtask} />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add to the Task</button>
        </div>
    );
}