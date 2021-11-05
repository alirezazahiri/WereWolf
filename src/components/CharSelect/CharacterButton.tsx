import React, { FC } from 'react';
import getColor from '../../services/getColor';
import ModalContainer from '../Modal/index';

type Props = {
    character: {
        id: number,
        icon: string,
        title: string,
        description: string,
        max: number,
        type: string,
    }
}

const CharacterButton: FC<Props> = ({ character }) => {
    const color = getColor(character.type)
    return (
        <div
            // className={styles.container}
            // style={{ color: color, borderBottom: `1px solid ${color}` }}
        >
            {/* <button onClick={increaseHandler} style={buttonStyle}>
                <span>
                    {count > 0 ? count : <i className="fa fa-plus"></i>}
                </span>
            </button>
            <button onClick={showInfoHandler} style={buttonStyle}>
                <i className={icon}></i>
                <p>{title}</p>
            </button>
            <button onClick={decreaseHandler} style={buttonStyle}>
                <i className="fa fa-minus"></i>
            </button>
            <ModalContainer
                type="charInfo"
                show={show}
                character={character}
                closeHandler={closeHandler}
            /> */}
            <h1 style={{color}}>{character.title}</h1>
        </div>
    );
};

export default CharacterButton;