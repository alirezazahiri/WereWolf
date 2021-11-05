import React from 'react';

const CharSelect = () => {
    return (
        <div className={styles.container}>
      <button
        
        type="button"
        onClick={charactersResetHandler}
      >
        {buttons.reset}
      </button>
      <FilterCharacters setType={setType}/>
      
      {characters
        .filter((character) =>
          type === "all" ? true : character.type === type
        )
        .map((character) => (
          <CharacterButton
            key={character.id}
            character={character}
            setRemaining={setRemaining}
            names={names}
            charactersInGame={charactersInGame}
            setCharactersInGame={setCharactersInGame}
            resetClicked={resetClicked}
          />
        ))}
    </div>
    );
};

export default CharSelect;