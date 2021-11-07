import React, { FC } from 'react';


// components 
import FilterCharacters from '../FilterCharacters';
import Search from '../Search';

// styles 
import styles from "./FilterContainer.module.css"

type Props = {
    value: string,
    changeHandler: (e: any) => void,
    language: string
}

const FilterContainer: FC<Props> = ({ value, changeHandler, language }) => {
    return (
        <div className={styles.filterContainer}>
            <Search
                language={language}
                value={value}
                changeHandler={changeHandler}
            />
            <FilterCharacters />
        </div>
    );
};

export default FilterContainer;