import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { CharType } from '../../redux/types';
import toFarsiNumber from '../../services/convertNumbersToFa';
import getColor from '../../services/getColor';
import Icon from '../Icon';
import ModalContainer from '../Modal';
import styles from "./CharSetItem.module.css"

type Props = {
    character: CharType & { count: number },
    isLastChild: boolean
}

const CharSetItem: FC<Props> = ({ character, isLastChild }) => {
    const { language } = useSelector((state: AppState) => state.languageState)
    const color = getColor(character.type)
    const [show, setShow] = useState(false)

    const buttonStyle = {
        color,
        border: `1px solid ${color}`,
        boxShadow: `0 0 12px ${color}`,
        fontSize: "1.5rem",
        width: "95%",
        margin: "10px auto"
    };

    return (
        <div
            className={styles.container}
            style={{
                color: color,
                borderBottom: `${isLastChild ? "none" : `1px solid ${color}`}`
            }}
        >
            <button onClick={() => setShow(true)} style={buttonStyle}>
                <Icon icon={character.icon} />
                <p>{character.title} {
                    character.count > 1 ? language === "persian" ?
                        toFarsiNumber(`x${character.count}`) :
                        `x${character.count}` : ""
                }
                </p>
            </button>
            <ModalContainer
                language={language}
                type="charInfo"
                show={show}
                character={character}
                closeHandler={() => setShow(false)}
            />
        </div>
    );
};

export default CharSetItem;