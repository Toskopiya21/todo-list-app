import {ChangeEvent, FC} from "react";

export type SortedOptionsProps =
    {
        changeSortOption: (e: ChangeEvent<HTMLSelectElement>) => void;
        children: string | JSX.Element | JSX.Element[]
    }

export const SortedOptions: FC<SortedOptionsProps>= ( {children, changeSortOption}) => {

    return (
        <div className="sorted-options">
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Сортировка</p>
            <select onChange={changeSortOption} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                {children}
            </select>



        </div>
    )
}
