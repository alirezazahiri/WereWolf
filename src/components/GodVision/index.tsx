import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// custom hooks
import useSearch from '../../hooks/useSearch';

// components 
import FilterContainer from '../FilterContainer';
import ManagePlayerCard from './ManagePlayerCard';

// state type 
import { AppState } from '../../redux/store';

// services 
import mapCharIdToCharacter from '../../services/mapCharIdToCharacter';
import toFarsiNumber from '../../services/convertNumbersToFa';

// styles 
import styles from "./GodVision.module.css"
import StatFilter from './StatFilter';
import { updateRoleDictionary } from '../../redux/playersData/playersDataActions';

const GodVision = () => {
    const dispatch = useDispatch()
    const {
        language,
        names,
        roleDictionary,
        dataDictionary,
        filter,
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
        const values = Object.values(roleDictionary).reduce((prev, current) => prev + current, '')
        if (values === "") {
            dispatch(updateRoleDictionary(Object.keys(roleDictionary), characters))
        }
    }, [characters, dispatch, roleDictionary])

    return (
        <div className={styles.container}>
            <FilterContainer value={value} changeHandler={changeHandler} language={language} />
            <StatFilter setStatFilter={setStatFilter} statFilter={statFilter} />
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