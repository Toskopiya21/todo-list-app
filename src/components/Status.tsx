import {ChangeEvent, FC} from "react";
import './components.scss'

type StatusProps = {
    filterChecked: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Status: FC<StatusProps> = ({filterChecked, handleChange}) => {

    type FilterType = {
        value: string;
        name: string;
    }

    const statusOptions: FilterType[] = [
        {value: "All", name: "Все"},
        {value: "Active", name: "Активные"},
        {value: "Resolve", name: "Завершенные"}]

    return (
        <div className="status-options-section">
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Статус</p>
            <div className="status-options">
                {
                    statusOptions.map((f) => {
                        return (
                            <div key={f.name}>
                                <input type="radio" id={f.value} value={f.value} onChange={handleChange}
                                       checked={filterChecked === f.value}
                                       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 accent-[#4f46e5]"/>
                                <label htmlFor={f.value}
                                       className="text-sm font-medium leading-6 text-gray-900">{f.name}</label>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
