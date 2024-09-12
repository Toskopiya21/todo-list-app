import {ChangeEvent, useCallback, useState} from "react";
import {addTask} from "../state/slice/todoListSlice.ts";
import {useDispatch} from "react-redux";

export const AddTaskForm = () => {

    const dispatch = useDispatch();
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");

    const handleClick = useCallback(() => {
        dispatch(addTask(newTaskTitle))
        setNewTaskTitle("")
    }, [newTaskTitle, dispatch])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.target.value)
    }, [setNewTaskTitle])

    return (
        <section>
            <span>Новая задача</span>
            <div>
                <input type={"text"} onChange={handleChange} value={newTaskTitle}/>
                <button onClick={handleClick}>+ Добавить</button>
            </div>
        </section>
    )
}
