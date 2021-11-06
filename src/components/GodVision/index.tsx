import React from 'react';
import { useSelector } from 'react-redux';
import useSearch from '../../hooks/useSearch';
import { AppState } from '../../redux/store';
import toFarsiNumber from '../../services/convertNumbersToFa';
import mapCharIdToCharacter from '../../services/mapCharIdToCharacter';
import FilterContainer from '../FilterContainer';
import styles from "./GodVision.module.css"
import ManagePlayerCard from './ManagePlayerCard';

const GodVision = () => {
    const { language, names, roleDictionary, filter } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState,
        ...state.playersDataState,
        ...state.filterState
    }))
    const [value, changeHandler] = useSearch()

    return (
        <div className={styles.container}>
            <FilterContainer value={value} changeHandler={changeHandler} language={language} />
            {names.map(name => {
                const character = mapCharIdToCharacter(roleDictionary[name], language)
                const role = character?.title
                const icon = character?.icon
                const type = character?.type
                return { role, type, icon, name }
            })
                .filter(({ type }) => filter === "all" ? true : type === filter)
                .filter(({ role, name }) =>
                    role?.toLowerCase().includes(value.trim().toLowerCase()) ||
                    toFarsiNumber(name)?.toLowerCase().includes(toFarsiNumber(value).trim().toLowerCase()))
                .map(({ role, type, icon, name }) => <ManagePlayerCard
                    key={name}
                    type={type}
                    role={role}
                    icon={icon}
                    player={name}
                />)
            }
        </div>
    );
};


export default GodVision;