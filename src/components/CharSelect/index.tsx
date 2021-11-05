import React from 'react';
import { useSelector } from 'react-redux';
import getChars, { getCharSelect } from '../../services/getPageData';
import FilterCharacters from '../FilterCharacters/index';
import { AppState } from '../../redux/store';
import CharacterButton from './CharacterButton';

const CharSelect = () => {
  const { language, filter } = useSelector((state: AppState) => ({
    ...state.languageState,
    ...state.filterState
  }))
  const { characters } = getChars(language)
  const { buttons } = getCharSelect(language)

  const resetHandler = () => {

  }
  
  return (
    <div >
      <button
        onClick={resetHandler}
      >
        {buttons.reset}
      </button>
      <FilterCharacters />

      {characters
        .filter((character) =>
          filter === "all" ? true : character.type === filter
        )
        .map((character) => (
          <CharacterButton
            key={character.id}
            character={character}
          />
        ))}
    </div>
  );
};

export default CharSelect;