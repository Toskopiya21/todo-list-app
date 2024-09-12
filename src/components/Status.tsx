import {ChangeEvent, FC, Fragment} from "react";

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
        <div>
            <span>Статус</span>
            {
                statusOptions.map((f) => {
                    return (
                        <Fragment key={f.name}>
                            <input type="radio" id={f.value} value={f.value} onChange={handleChange}
                                   checked={filterChecked === f.value}/>
                            <label htmlFor={f.value}>{f.name}</label>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
