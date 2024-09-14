import {useState, useMemo, useCallback, ChangeEvent} from 'react';
import {TaskType} from "../state/todoListSlice.ts";

export const useTaskSorting = (tasks: TaskType[]) => {
    const [sortedOption, setSortedOption] = useState<string>('title');

    const handleChangeOption = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setSortedOption(e.target.value);
    }, []);

    const sortedTasks = useMemo(() => {
        return [...tasks].sort((a, b) => {
            if (sortedOption === 'isDone') {
                return b.isDone ? 1 : -1; // Сортировка по убыванию isDone
            } else if (sortedOption === 'title') {
                return a.title.localeCompare(b.title); // Сортировка по title
            }
            return 0;
        });
    }, [tasks, sortedOption]);

    return {
        sortedOption,
        handleChangeOption,
        sortedTasks,
    };
};

export default useTaskSorting;