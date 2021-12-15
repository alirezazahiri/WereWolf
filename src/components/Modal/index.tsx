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
import ScenarioCharSet from '../SuggestionVision/ScenarioCharSet';
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
    allowGameStart?: boolean,
    show: boolean,
    character?: CharType,
    charactersSet?: CharType[],
    pName?: string,
    scenarioName?: string,
    countOfPlayers?: number,
    closeHandler: (() => void),
    backHandler?: (() => void),
    startHandler?: (() => void),
    gotoCharSelect?: (() => void),
    gotoSeeCharacters?: (() => void)
}

const ModalContainer: FC<Props> = ({
    language,
    type,
    allowGameStart,
    show,
    pName,
    scenarioName,
    closeHandler,
    backHandler,
    startHandler,
    gotoCharSelect,
    gotoSeeCharacters,
    character,
    charactersSet,
    countOfPlayers,
}) => {
    const { buttons } = getModal(language)
    const { playersCount, names, characters } = useSelector((state: AppState) => ({
        ...state.playersState,
        ...state.charactersState
    }))
    let title
    if (type === "nameEnter")
        title = playersCount - names.length
    else if (type === "scenarioNameEnter" && countOfPlayers)
        title = countOfPlayers - names.length
    else if (type === "charSelect")
        title = playersCount - characters.length
    else if (type === "showRole")
        title = pName
    else if (type === "showScenario")
        title = scenarioName
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
                        {(type === "showRole" || type === "showScenario") ?
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
                        gotoSeeCharacters={gotoSeeCharacters}
                        allowGameStart={allowGameStart}
                        startGame={startHandler}
                        remaining={title}
                    />
                </div>
            </Modal.Header>
            <Modal.Body>
                {/* components */}
                {type === "nameEnter" && <NameEnter />}
                {type === "scenarioNameEnter" && <NameEnter countOfPlayers={countOfPlayers} />}
                {type === "charSelect" && <CharSelect />}
                {(type === "charInfo" || type === "showRole") && character && <ScenarioCard character={character} />}
                {type === "showScenario" && <ScenarioCharSet characters={charactersSet as (CharType & { count: number })[]} />}
            </Modal.Body>
        </Modal>
    );
};

export default ModalContainer;