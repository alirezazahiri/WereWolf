import React, { FC, useState } from 'react';

// react-redux 
import { useDispatch, useSelector } from 'react-redux';

// services 
import toFarsiNumber from '../../services/convertNumbersToFa';
import getColor from '../../services/getColor';

// state type
import { AppState } from '../../redux/store';

//Actions 
import { increaseCharacter, decreaseCharacter } from '../../redux/characters/charactersActions';

// reducers 
import { countOfCharacter } from '../../redux/characters/charactersReducer';

// styles 
import styles from "./CharacterButton.module.css"

// components 
import ModalContainer from '../Modal/index';
import Icon from '../Icon';

type Props = {
    character: {
        id: number,
        icon: string,
        title: string,
        description: string,
        max: number,
        html?: string,
        type: string,
    },
    isLastChild: boolean
}

const CharacterButton: FC<Props> = ({ character, isLastChild }) => {
    const color = getColor(character.type)
    const dispatch = useDispatch()
    const { language, playersCount, characters } = useSelector((state: AppState) => ({
        ...state.languageState,
        ...state.playersState,
        ...state.charactersState
    }))

    const [show, setShow] = useState(false)

    const count = countOfCharacter(characters, character.id)

    const buttonStyle = {
        color,
        border: `1px solid ${color}`,
        boxShadow: `0 0 12px ${color}`,
        fontSize: "1.5rem"
    };

    return (
        <div
            className={styles.container}
            style={{
                color: color,
                borderBottom: `${isLastChild ? "none" : `1px solid ${color}`}`
            }}
        >
            <button
                disabled={playersCount === characters.length}
                onClick={() => dispatch(increaseCharacter(character, playersCount))}
                style={buttonStyle}
            >
                <span>
                    {count > 0 ? (language === "persian" ? toFarsiNumber(`${count}`) : count) : <Icon icon="plus" />}
                </span>
            </button>
            <button onClick={() => setShow(true)} style={buttonStyle}>
                <Icon icon={character.icon} />
                <p>{character.title}</p>
            </button>
            <button onClick={() => dispatch(decreaseCharacter(character))} style={buttonStyle}>
                <Icon icon="minus" />
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