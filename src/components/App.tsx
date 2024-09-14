import {TasksList} from "./TasksList.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import './components.scss'

export default function App() {
    return (
        <div className="todo-list-form">
            <AddTaskForm/>
            <TasksList/>
        </div>
    )
}
