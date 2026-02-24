import { useRef } from "react";

import Input from "./Input.jsx";

export default function NewTask({ onAdd }) {

    const title = useRef();
    const description = useRef();
    const date = useRef();

    const handleSave = function () {
        const enterdTitle = title.current.value;
        const enterdDescription = description.current.value;
        const enterdDate = date.current.value;

        onAdd({
            title: enterdTitle,
            description: enterdDescription,
            date: enterdDate
        });
    };

    return (
        <div className="w-[35rem] mt-16 ">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800  hover:text-stone-950 ">Cancel</button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={title} label='Title' type='text' />
                <Input ref={description} label='Description' isTextarea />
                <Input ref={date} label='Date' type='date' />
            </div>
        </div>
    );
}