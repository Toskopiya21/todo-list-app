import {Task} from "./Task.tsx";
import {ChangeEvent, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeTask, changeTaskStatus} from '../state/todoListSlice.ts';
import {SortedOptions} from "./SortedOptions.tsx";
import {Status} from "./Status.tsx";
import {useTaskSorting} from "./../hooks/useTaskSorting.tsx";
import {useTaskFilter} from "./../hooks/useTaskFilter.tsx";
import './components.scss'

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
        <section className="tasks-list-form">
            <h3 className="text-base font-semibold leading-7 text-gray-900 text-left py-4">Список задач</h3>
            <div className="tasks-and-filters">
                <div className="tasks">
                    {sortedTasks.map(task => (
                        <Task key={task.id} task={task} removeTask={handleRemoveTask} changeTaskStatus={handleChangeTaskStatus}/>
                    ))
                    }
                </div>

                <div className="filters">
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
