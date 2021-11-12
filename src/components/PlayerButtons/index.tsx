import React, { useEffect } from 'react';

// react-redux 
import { useDispatch, useSelector } from 'react-redux';

// types 
import { AppState } from '../../redux/store';

// redux store 
import { updateRoleDictionary, createDataDictionary } from '../../redux/playersData/playersDataActions';

// services 
import mapCharIdToCharacter from '../../services/mapCharIdToCharacter';
import { getPlayerButtons } from '../../services/getPageData';
import isObjAvailable from '../../services/isObjAvailable';
import listsMissmatch from '../../services/listsMismatch';
import showToast from '../../services/showToast';

// components 
import PButton from './PButton';

// styles 
import styles from "./PlayerButtons.module.css"

const PlayerButtons = () => {
    const dispatch = useDispatch()
    const {
        language,
        roleDictionary,
        characters,
        names,
        playersCount
    } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState,
        ...state.playersDataState,
        ...state.charactersState
    }))

    const { buttons, update_message } = getPlayerButtons(language)

    useEffect(() => {
        if ((!isObjAvailable(roleDictionary) && names.length === playersCount) ||
            listsMissmatch(names, Object.keys(roleDictionary))) {
            dispatch(updateRoleDictionary(names, characters))
        }
    }, [names, characters, dispatch, playersCount, roleDictionary])

    const updateHandler = () => {
        dispatch(createDataDictionary(Object.keys(roleDictionary)))
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