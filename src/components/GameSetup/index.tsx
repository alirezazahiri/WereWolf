import React, { useEffect, useReducer } from 'react';

// redux 
import { AppState } from '../../redux/store';
import { useSelector } from 'react-redux';

// services 
import { getGameSetup } from '../../services/getPageData';

// styles
import styles from "./GameSetup.module.css"

// reducer 
import gameSetupReducer, { initialState } from './reducer';
import { openNameEnter, closeNameEnter, closeCharSelect, openCharSelect } from './actions';
import ModalContainer from '../Modal';
import showToast from '../../services/showToast';
import { GAME_SETUP_MOUNT_ERROR_EN, GAME_SETUP_MOUNT_ERROR_FA } from '../../translations/Toaster/toast-messages';

const GameSetup = () => {
    const { language, playersCount } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState
    }))
    const { title, description, prompt_1 } = getGameSetup(language);

    const [state, dispatch] = useReducer(gameSetupReducer, initialState);

    useEffect(() => {
        console.log(playersCount)
        if (playersCount < 4 || playersCount > 80 || typeof playersCount !== "number") {
            const message = language === "persian" ?
                GAME_SETUP_MOUNT_ERROR_FA : GAME_SETUP_MOUNT_ERROR_EN
            showToast("error", message)
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <button
                className={styles.startButton}
                onClick={() => dispatch(openNameEnter())}
            >
                {prompt_1}
            </button>
            {/* Modals */}

            {/* NAME ENTER MODAL */}
            <ModalContainer
                language={language}
                type={state.type}
                closeHandler={() => dispatch(closeNameEnter())}
                gotoCharSelect={() => dispatch(openCharSelect())}
                show={state.nameEnter}
            />

            {/* CHARACTER SELECT MODAL */}
            <ModalContainer
                language={language}
                type={state.type}
                backHandler={() => dispatch(openNameEnter())}
                closeHandler={() => dispatch(closeCharSelect())}
                show={state.charSelect}
            />
        </div>
    );
};

export default GameSetup;