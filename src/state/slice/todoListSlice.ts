import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from "uuid";

export interface TaskType {
    id: string;
    title: string;
    isDone: boolean;
}

type TasksState = {
    tasks: TaskType[];
}

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {tasks: []} as TasksState,

    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask: TaskType = {id: v1(), title: action.payload, isDone: false};
            state.tasks = [newTask, ...state.tasks];
        },
        removeTask: (state, action: PayloadAction<string>) => {
            const filteredTasks: TaskType[] = state.tasks.filter((task) => task.id !== action.payload);
            state.tasks = [...filteredTasks]
        },
        changeTaskStatus: (state, action: PayloadAction<[string, boolean]>) => {
            const [id, isDone] = action.payload;

            state.tasks.map(t => {
                t.id == id ? t.isDone = isDone : t
            })
        },
    },
});

export const {addTask, removeTask, changeTaskStatus} = todoListSlice.actions;

export default todoListSlice.reducer;