import React, { FC } from 'react';

// styles
import styles from "./Modal.module.css"

// UI Components 
import Modal from "react-bootstrap/Modal";
import NameEnter from '../NameEnter';
import { getModal } from '../../services/getPageData';
import HeaderButtons from './HeaderButtons';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';

interface Props {
    language: string,
    type: string,
    show: boolean,
    remaining?: number,
    closeHandler: (() => void),
    backHandler?: (() => void),
    gotoCharSelect?: (() => void)
}

const ModalContainer: FC<Props> = ({ language, type, show, closeHandler, backHandler, gotoCharSelect }) => {
    const { buttons } = getModal(language)
    const { playersCount, names } = useSelector((state: AppState) => state.playersState)
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
                        {playersCount - names.length}
                    </h2>
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
                {type === "charSelect" && <NameEnter />}
            </Modal.Body>
        </Modal>
    );
};

export default ModalContainer;