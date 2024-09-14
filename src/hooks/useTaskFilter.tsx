import {useState, useMemo, useCallback, ChangeEvent} from 'react';
import {TaskType} from "../state/todoListSlice.ts";

interface UseTaskFilterProps {
    tasks: TaskType[];
    filterValue: { value: string }[];
}

export const useTaskFilter = ({ tasks, filterValue }: UseTaskFilterProps) => {
    const [filterChecked, setFilterChecked] = useState<string>(filterValue[0].value);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFilterChecked(e.target.value);
    }, []);

    const filteredTasks = useMemo(() => {
        return [...tasks].filter(task => {
            if (filterChecked === 'Resolve') {
                return task.isDone;
            } else if (filterChecked === 'Active') {
                return !task.isDone;
            }
            return true;
        });
    }, [tasks, filterChecked]);

    return {
        filterChecked,
        handleChange,
        filteredTasks,
    };
};

export default useTaskFilter;