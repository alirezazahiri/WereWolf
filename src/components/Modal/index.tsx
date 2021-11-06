import React, { FC } from 'react';

// styles
import styles from "./Modal.module.css"

// UI Components 
import Modal from "react-bootstrap/Modal";
import NameEnter from '../NameEnter/index';
import { getModal } from '../../services/getPageData';
import HeaderButtons from './HeaderButtons';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import CharSelect from '../CharSelect/index';
import ScenarioCard from '../ScenarioCard';
import { CharType } from '../../redux/types';

interface Props {
    language: string,
    type: string,
    show: boolean,
    remaining?: number,
    character?: CharType,
    closeHandler: (() => void),
    backHandler?: (() => void),
    gotoCharSelect?: (() => void)
}

const ModalContainer: FC<Props> = ({
    language,
    type,
    show,
    closeHandler,
    backHandler,
    gotoCharSelect,
    character
}) => {
    const { buttons } = getModal(language)
    const { playersCount, names, characters } = useSelector((state: AppState) => ({
        ...state.playersState,
        ...state.charactersState
    }))
    
    return (
        <Modal show={show}
            onHide={closeHandler}
            className={styles.container}
        >
            <Modal.Header
                className={styles.headerContainer}
                style={{
                    borderBottom: "1px solid rgba(71, 58, 121, 0.5)",
                    borderRadius: "12px 12px 0 0"
                }}
            >
                <Modal.Title>
                    {type === "nameEnter" &&
                        <h2>
                            {playersCount - names.length}
                        </h2>}
                    {type === "charSelect" &&
                        <h2>
                            {playersCount - characters.length}
                        </h2>
                    }
                </Modal.Title>
                <div className={styles.buttonsContainer}>
                    {/* buttons */}
                    <HeaderButtons
                        buttons={buttons}
                        type={type}
                        closeHandler={closeHandler}
                        backHandler={backHandler}
                        gotoCharSelect={gotoCharSelect}
                    />
                </div>
            </Modal.Header>
            <Modal.Body>
                {/* components */}
                {type === "nameEnter" && <NameEnter />}
                {type === "charSelect" && <CharSelect />}
                {type === "charInfo" && character && <ScenarioCard character={character} />}
            </Modal.Body>
        </Modal>
    );
};

export default ModalContainer;