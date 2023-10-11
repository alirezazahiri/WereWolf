import  { FC, useState } from 'react';

// react-redux 
import { useSelector } from 'react-redux';

// types 
import { CharType } from '../../redux/types';
import { AppState } from '../../redux/store';

// styles 
import { shorten } from '../../services/shorten';

// components 
import ModalContainer from '../Modal/index';

// styles 
import styles from "./PButton.module.css"

type Props = {
    name: string,
    character: CharType | undefined
}

const PButton: FC<Props> = ({ name, character }) => {
    const [show, setShow] = useState(false);
    const { language } = useSelector((state: AppState) => state.languageState)
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