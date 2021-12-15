import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CharType } from '../../redux/types';
import FilterCharacters from '../FilterCharacters';
import CharSetItem from './CharSetItem';
import { AppState } from '../../redux/store';

type Props = {
    characters: (CharType & { count: number })[]
}

const ScenarioCharSet: FC<Props> = ({ characters }) => {
    const { filter } = useSelector((state: AppState) => state.filterState)
    const filteredCharacters = characters.filter((character) =>
        filter === "all" ? true : character.type === filter
    )
    return (
        <div>
            <FilterCharacters />
            {filteredCharacters.map((character, index) =>
                <CharSetItem
                    key={index}
                    character={character}
                    isLastChild={index === filteredCharacters.length - 1}
                />
            )}
        </div>
    );
};

export default ScenarioCharSet;