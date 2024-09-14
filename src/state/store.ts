import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './todoListSlice.ts';

const store = configureStore({
    reducer: {
        todoList: todoListSlice,
    },
});

export default store;