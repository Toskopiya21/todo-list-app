import {TaskType} from "../state/slice/todoListSlice.ts";
import {ChangeEvent, FC} from "react";

export type TaskProps = {
    task: TaskType
    changeTaskStatus: (id: string, e: ChangeEvent<HTMLInputElement>) => void;
    removeTask: (id: string) => void;
}

export const Task: FC<TaskProps> = ({task, removeTask, changeTaskStatus}) => {

    return (
        <div>
            <input type={"checkbox"} checked={task.isDone} onChange={(e) => changeTaskStatus(task.id, e)}/>
            <span>{task.title}</span>
            <button onClick={() => removeTask(task.id)}>deleted</button>
        </div>
    )
}