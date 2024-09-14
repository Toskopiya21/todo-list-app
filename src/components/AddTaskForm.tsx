import {ChangeEvent, KeyboardEvent, useCallback, useState} from "react";
import {addTask} from "../state/todoListSlice.ts";
import {useDispatch} from "react-redux";
import './components.scss'

export const AddTaskForm = () => {

    const dispatch = useDispatch();
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleClick = useCallback(() => {
        if (newTaskTitle) {
            dispatch(addTask(newTaskTitle))
            setErrorMessage("")
            setNewTaskTitle("")
        } else setErrorMessage("Заполните поле")
    }, [newTaskTitle, errorMessage, dispatch])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setErrorMessage("")
        setNewTaskTitle(e.target.value)
    }, [setNewTaskTitle, setErrorMessage])

    const handleKeyPress = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleClick();
        }
    }, [handleClick]);

    return (
        <section className={"new-task-form"}>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 text-left">Новая задача</p>
            <div className={"add-task"}
                 onKeyDown={handleKeyPress}>
                <input type={"text"} onChange={handleChange} value={newTaskTitle}
                       className={`rounded-md border-0 p-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                       focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errorMessage && "ring-red-300"}`}/>
                <span className="error mt-1 max-w-2xl text-sm leading-6 text-gray-500 text-left">{errorMessage}</span>

                <button onClick={handleClick}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">+
                    Добавить
                </button>

            </div>
        </section>
    )
}
