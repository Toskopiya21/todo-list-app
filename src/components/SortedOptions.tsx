import {ChangeEvent, FC} from "react";

export type SortedOptionsProps =
    {
        changeSortOption: (e: ChangeEvent<HTMLSelectElement>) => void;
        children: string | JSX.Element | JSX.Element[]
    }

export const SortedOptions: FC<SortedOptionsProps>= ( {children, changeSortOption}) => {

    return (
        <div>
            <span>Сортировка</span>
            <select onChange={changeSortOption}>
                {children}
            </select>
        </div>
    )
}
