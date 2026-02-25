import { useRef } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import H2 from "./H2.jsx";

export default function NewTask({ onAdd, onCancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const date = useRef();

    const handleSave = function () {
        const enterdTitle = title.current.value;
        const enterdDescription = description.current.value;
        const enterdDate = date.current.value;

        if (enterdTitle.trim() === '' ||
            enterdDescription.trim() === '' ||
            enterdDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enterdTitle,
            description: enterdDescription,
            date: enterdDate
        });
    };

    return (
        <>
            <Modal ref={modal} >
                <H2>Invalid input</H2>
                <p className='text-stone-600 mb-4'>Its looks like you forgot something please try again</p>
            </Modal>
            <div className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800  hover:text-stone-950"
                            onClick={onCancel}>Cancel</button>
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
        </>
    );
}