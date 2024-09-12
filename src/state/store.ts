import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './slice/todoListSlice.ts';

const store = configureStore({
    reducer: {
        todoList: todoListSlice,
    },
});

export default store;