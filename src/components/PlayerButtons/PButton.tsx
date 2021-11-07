import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { shorten } from '../../services/shorten';
import ModalContainer from '../Modal/index';
import styles from "./PButton.module.css"
import { CharType } from '../../redux/types';

type Props = {
    name: string,
    character: CharType | undefined
}

const PButton: FC<Props> = ({ name, character }) => {
    const [show, setShow] = useState(false);
    const {language} = useSelector((state: AppState) => state.languageState)
    return (
        <div className={styles.container}>
            <button onClick={() => setShow(true)}>{shorten(name)}</button>
            <ModalContainer
                type="showRole"
                language={language}
                show={show}
                pName={name}
                character={character}
                closeHandler={() => setShow(false)}
            />
        </div>
    );
};

export default PButton;