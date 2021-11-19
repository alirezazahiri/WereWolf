import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// custom hooks
import useSearch from '../../hooks/useSearch';

// components 
import FilterContainer from '../FilterContainer';
import ManagePlayerCard from './ManagePlayerCard';

// state type 
import { AppState } from '../../redux/store';

// redux stores 
import { updateRoleDictionary } from '../../redux/playersData/playersDataActions';

// services 
import mapCharIdToCharacter from '../../services/mapCharIdToCharacter';
import toFarsiNumber from '../../services/convertNumbersToFa';
import isObjAvailable from '../../services/isObjAvailable';
import listsMissmatch from '../../services/listsMismatch';

// styles 
import styles from "./GodVision.module.css"
import StatFilter from './StatFilter';

const GodVision = () => {
    const dispatch = useDispatch()
    const {
        language,
        names,
        roleDictionary,
        dataDictionary,
        filter,
        playersCount,
        characters
    } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState,
        ...state.playersDataState,
        ...state.charactersState,
        ...state.filterState
    }))
    const [value, changeHandler] = useSearch()

    // 
    const [statFilter, setStatFilter] = useState("all")

    useEffect(() => {
        if ((!isObjAvailable(roleDictionary) && names.length === playersCount) ||
            listsMissmatch(names, Object.keys(roleDictionary))) {
            dispatch(updateRoleDictionary(names, characters))
        }
    }, [names, characters, dispatch, playersCount, roleDictionary])

    return (
        <div className={styles.container}>
            <FilterContainer value={value} changeHandler={changeHandler} language={language} />
            <StatFilter setStatFilter={setStatFilter} statFilter={statFilter}/>
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
                .filter(({ name }) => {
                    switch (statFilter) {
                        case "silent": return !dataDictionary[name].unmute
                        case "speaker": return dataDictionary[name].unmute
                        case "alive": return dataDictionary[name].alive
                        case "dead": return !dataDictionary[name].alive
                        default: return true
                    }
                }) // filter by alive/death
                .map(({ role, type, icon, name }) => (
                    <ManagePlayerCard
                        key={name}
                        type={type}
                        role={role}
                        icon={icon}
                        player={name}
                    />))
            }
        </div>
    );
};


export default GodVision;