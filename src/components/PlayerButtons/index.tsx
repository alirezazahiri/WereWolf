import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { getPlayerButtons } from '../../services/getPageData';
import PButton from './PButton';
import styles from "./PlayerButtons.module.css"
import { updateRoleDictionary } from '../../redux/playersData/playersDataActions';
import showToast from '../../services/showToast';
import mapCharIdToCharacter from '../../services/mapCharIdToCharacter';

const PlayerButtons = () => {
    const dispatch = useDispatch()
    const { language, roleDictionary, characters } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersDataState,
        ...state.charactersState
    }))

    const { buttons, update_message } = getPlayerButtons(language)

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