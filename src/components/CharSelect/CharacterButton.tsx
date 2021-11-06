import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getColor from '../../services/getColor';
import { AppState } from '../../redux/store';
import { countOfCharacter } from '../../redux/characters/charactersReducer';
import { increaseCharacter, decreaseCharacter } from '../../redux/characters/charactersActions';
import styles from "./CharacterButton.module.css"
import ModalContainer from '../Modal/index';

type Props = {
    character: {
        id: number,
        icon: string,
        title: string,
        description: string,
        max: number,
        html?: string,
        type: string,
    }
}

const CharacterButton: FC<Props> = ({ character }) => {
    const color = getColor(character.type)
    const dispatch = useDispatch()
    const { language, playersCount, characters } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState,
        ...state.charactersState
    }))

    const [show, setShow] = useState(false)

    const count = countOfCharacter(characters, character)

    const buttonStyle = {
        color,
        border: `1px solid ${color}`,
        boxShadow: `0 0 12px ${color}`,
    };

    return (
        <div
            className={styles.container}
            style={{ color: color, borderBottom: `1px solid ${color}` }}
        >
            <button
                disabled={playersCount === characters.length}
                onClick={() => dispatch(increaseCharacter(character, playersCount))}
                style={buttonStyle}
            >
                <span>
                    {count > 0 ? count : "plus"/*<i className="fa fa-plus"></i>*/}
                </span>
            </button>
            <button onClick={() => setShow(true)} style={buttonStyle}>
                <i className={character.icon}></i>
                <p>{character.title}</p>
            </button>
            <button onClick={() => dispatch(decreaseCharacter(character))} style={buttonStyle}>
                {/* <i className="fa fa-minus"></i> */}
                minus
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

export default CharacterButton;