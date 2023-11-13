export default function SelectedProject ({project, handleProjectDelete}) {
    return (
        <div className="w-2/3">
            <header className="flex gap-4 m-4 items-center justify-center">
            <h1>{project.title}</h1>
            <button onClick={() => {handleProjectDelete(project.id)}} className={"px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"}>Delete</button>
            </header>
            <p className={"m-2"}>Due Date: {project.dueDate}</p>
            <p className={"m-2"}>Description: {project.description}</p>
        </div>
    );
}