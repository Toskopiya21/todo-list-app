import {Task} from "./Task.tsx";
import {ChangeEvent, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeTask, changeTaskStatus} from './../state/slice/todoListSlice.ts';
import {SortedOptions} from "./SortedOptions.tsx";
import {Status} from "./Status.tsx";
import {useTaskSorting} from "./../hooks/useTaskSorting.tsx";
import {useTaskFilter} from "./../hooks/useTaskFilter.tsx";

export const TasksList = () => {
    const tasks = useSelector((state: any) => state.todoList.tasks);
    const dispatch = useDispatch();

    const handleRemoveTask = useCallback((id: string) => {
        dispatch(removeTask(id))
    }, [dispatch, tasks])

    const handleChangeTaskStatus = useCallback((id: string, e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTaskStatus([id, e.currentTarget.checked]))
    }, [dispatch, tasks])

    type FilterType = {
        value: string;
        name: string;
    }
    const filterValue: FilterType[] = [
        {value: "All", name: "Все"},
        {value: "Active", name: "Активные"},
        {value: "Resolve", name: "Завершенные"}]

    const { filterChecked, handleChange, filteredTasks } = useTaskFilter({ tasks, filterValue });
    const {  handleChangeOption, sortedTasks } = useTaskSorting(filteredTasks);

    return (
        <section>
            <span>Список задач</span>
            <div>
                <div>
                    {sortedTasks.map(task => (
                        <Task key={task.id} task={task} removeTask={handleRemoveTask} changeTaskStatus={handleChangeTaskStatus}/>
                    ))
                    }
                </div>

                <div>
                    <Status filterChecked={filterChecked} handleChange={handleChange}/>

                    <SortedOptions changeSortOption={handleChangeOption}>
                        <option value="title">--Наименование или статус--</option>
                        <option value="title">Наименование</option>
                        <option value="isDone">Статус</option>
                    </SortedOptions>
                </div>
            </div>
        </section>
    )
}
