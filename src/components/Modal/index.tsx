import React, { FC } from 'react';

// react-redux 
import { useSelector } from 'react-redux';

// styles
import styles from "./Modal.module.css"

// types 
import { CharType } from '../../redux/types';
import { AppState } from '../../redux/store';

// UI Components 
import Modal from "react-bootstrap/Modal";

// components 
import CharSelect from '../CharSelect/index';
import HeaderButtons from './HeaderButtons';
import NameEnter from '../NameEnter/index';
import ScenarioCard from '../ScenarioCard';

// services
import toFarsiNumber from '../../services/convertNumbersToFa';
import { getModal } from '../../services/getPageData';
import { shorten } from '../../services/shorten';

interface Props {
    language: string,
    type: string,
    show: boolean,
    character?: CharType,
    pName?: string,
    closeHandler: (() => void),
    backHandler?: (() => void),
    startHandler?: (() => void),
    gotoCharSelect?: (() => void)
}

const ModalContainer: FC<Props> = ({
    language,
    type,
    show,
    pName,
    closeHandler,
    backHandler,
    startHandler,
    gotoCharSelect,
    character
}) => {
    const { buttons } = getModal(language)
    const { playersCount, names, characters } = useSelector((state: AppState) => ({
        ...state.playersState,
        ...state.charactersState
    }))

    let title
    if (type === "nameEnter")
        title = playersCount - names.length
    else if (type === "charSelect")
        title = playersCount - characters.length
    else if (type === "showRole")
        title = pName
    else
        title = ""

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
                    <h2>
                        {type === "showRole" ?
                            shorten(title as string)
                            :
                            language === "persian" ? toFarsiNumber(`${title}`) : title}
                    </h2>
                </Modal.Title>
                <div className={styles.buttonsContainer}>
                    {/* buttons */}
                    <HeaderButtons
                        language={language}
                        buttons={buttons}
                        type={type}
                        closeHandler={closeHandler}
                        backHandler={backHandler}
                        gotoCharSelect={gotoCharSelect}
                        startGame={startHandler}
                        remaining={title}
                    />
                </div>
            </Modal.Header>
            <Modal.Body>
                {/* components */}
                {type === "nameEnter" && <NameEnter />}
                {type === "charSelect" && <CharSelect />}
                {(type === "charInfo" || type === "showRole") && character && <ScenarioCard character={character} />}
            </Modal.Body>
        </Modal>
    );
};

export default ModalContainer;