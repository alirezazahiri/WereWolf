import React from 'react';
import { useSelector } from 'react-redux';
import useSearch from '../../hooks/useSearch';
import { AppState } from '../../redux/store';
import FilterContainer from '../FilterContainer';
import styles from "./GodVision.module.css"

const GodVision = () => {
    const { language } = useSelector((state: AppState) => ({ ...state.languageState }))
    const [value, changeHandler] = useSearch()

    return (
        <div className={styles.container}>
            <FilterContainer value={value} changeHandler={changeHandler} language={language} />
        </div>
    );
};

export default GodVision;