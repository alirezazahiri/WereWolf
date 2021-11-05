import React, { FC } from 'react';

// styles
import styles from "./Modal.module.css"

// UI Components 
import Modal from "react-bootstrap/Modal";
import NameEnter from '../NameEnter';

interface Props {
    type: string,
    show: boolean,
    closeHandler: () => void,
    backHandler?: () => void
}

const ModalContainer: FC<Props> = ({ type, show, closeHandler, backHandler }) => {
    return (
        <Modal show={show}
            onHide={closeHandler}
            className={styles.container}
        >
            <Modal.Header>
                <Modal.Title>

                </Modal.Title>
                <div>
                    {/* buttons */}
                </div>
            </Modal.Header>
            <Modal.Body>
                {/* components */}
                <NameEnter />
            </Modal.Body>
        </Modal>
    );
};

export default ModalContainer;