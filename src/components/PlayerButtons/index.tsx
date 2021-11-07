import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { getPlayerButtons } from '../../services/getPageData';
import PButton from './PButton';
import styles from "./PlayerButtons.module.css"
import { updateRoleDictionary } from '../../redux/playersData/playersDataActions';
import showToast from '../../services/showToast';
import mapCharIdToCharacter from '../../services/mapCharIdToCharacter';
import isObjAvailable from '../../services/isObjAvailable';
import listsMissmatch from '../../services/listsMismatch';

const PlayerButtons = () => {
    const dispatch = useDispatch()
    const { language, roleDictionary, characters, names, playersCount } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState,
        ...state.playersDataState,
        ...state.charactersState
    }))

    const { buttons, update_message } = getPlayerButtons(language)
    console.log(roleDictionary)
    useEffect(() => {
        if ((!isObjAvailable(roleDictionary) && names.length === playersCount) || 
        listsMissmatch(names, Object.keys(roleDictionary))) {
            dispatch(updateRoleDictionary(names, characters))
        }
    }, [names, characters])

    const updateHandler = () => {
        dispatch(updateRoleDictionary(Object.keys(roleDictionary), characters))
        showToast("success", update_message)
    }

    return (
        <div className={styles.container}>
            {roleDictionary &&
                Object.keys(roleDictionary).map((name) => (
                    <PButton
                        key={name}
                        name={name}
                        character={mapCharIdToCharacter(roleDictionary[name], language)}
                    />
                ))}
            <button
                onClick={updateHandler}
                className={styles.updateButton}
            >
                {buttons.update}
            </button>
        </div>
    );
};

export default PlayerButtons;