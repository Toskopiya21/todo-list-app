import './App.css'
import {TasksList} from "./TasksList.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";

export default function App() {
    return (
        <>
            <AddTaskForm/>
            <TasksList/>
        </>
    )
}
