import React, { useReducer } from 'react';

// redux 
import { AppState } from '../../redux/store';
import { useSelector } from 'react-redux';

// services 
import { getGameSetup } from '../../services/getPageData';

// styles
import styles from "./GameSetup.module.css"

// reducer 
import gameSetupReducer, { initialState } from './reducer';
import { openNameEnter, closeNameEnter, closeCharSelect } from './actions';
import ModalContainer from '../Modal';

const GameSetup = () => {
    const { language } = useSelector((state: AppState) => state.languageState)
    const { title, description, prompt_1 } = getGameSetup(language);

    const [state, dispatch] = useReducer(gameSetupReducer, initialState);
    
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
                type={state.type}
                closeHandler={() => dispatch(closeNameEnter())}
                show={state.nameEnter}
            />

            {/* CHARACTER SELECT MODAL */}
            <ModalContainer
                type={state.type}
                closeHandler={() => dispatch(closeCharSelect())}
                show={state.charSelect}
            />
        </div>
    );
};

export default GameSetup;