import Input from './Input.jsx';
import { useRef } from 'react';
import Modal from './Modal.jsx';

export default function NewProject ({handleAddProject, handleCancleAddProject}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();

    function handleSave(){
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (title.trim() === "" || description.trim() === "" || dueDate.trim() === ""){
            modal.current.open();
            return;
        }

        handleAddProject({title: title, description: description, dueDate: dueDate})
    }

    return (
        <>
        <Modal ref={modal}>
            <h2>Invalid Input</h2>
            <p>Please Provide valid Input</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-100 bg-stone-800 px-4 py-2 rounded-md hover:text-red-400" onClick={handleCancleAddProject}>Cancle</button></li>
                <li><button className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-green-400" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input label="Title" ref={titleRef} type="text"/>
                <Input label="Description" textarea ref={descriptionRef}/>
                <Input label="Due Date" ref={dueDateRef} type="date"/>
            </div>
        </div>
        </>
    );
}