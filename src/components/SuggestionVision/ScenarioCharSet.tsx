import React, { FC } from 'react';
import { CharType } from '../../redux/types';
import CharSetItem from './CharSetItem';

type Props = {
    characters: CharType[]
}

const ScenarioCharSet: FC<Props> = ({ characters }) => {
    return (
        <div>
            {characters.map((character, index) =>
                <CharSetItem
                    key={index}
                    character={character}
                    isLastChild={index === characters.length - 1}
                />
            )}
        </div>
    );
};

export default ScenarioCharSet;