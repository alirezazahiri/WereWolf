import React, { FC } from 'react';
import FilterCharacters from '../FilterCharacters';
import styles from "./FilterContainer.module.css"

type Props = {
    value: string,
    changeHandler: (e: any) => void,
    language: string
}

const FilterContainer: FC<Props> = ({ value, changeHandler, language }) => {
    return (
        <div className={styles.filterContainer}>
            <input
                className={styles.searchInput}
                type="text"
                value={value}
                onChange={changeHandler}
                placeholder={language === "persian" ? "...جستجو کن" : "Search..."}
            />
            <FilterCharacters />
        </div>
    );
};

export default FilterContainer;