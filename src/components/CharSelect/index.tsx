

// react-redux
import { useDispatch, useSelector } from "react-redux";

// services
import getChars, { getCharSelect } from "../../services/getPageData";

// state type
import { AppState } from "../../redux/store";

// components
import FilterCharacters from "../FilterCharacters/index";
import CharacterButton from "./CharacterButton";

// Actions
import { resetCharacters } from "../../redux/characters/charactersActions";

// styles
import styles from "./CharSelect.module.css";

const CharSelect = () => {
  const dispatch = useDispatch();
  const { language, filter } = useSelector((state: AppState) => ({
    ...state.languageState,
    ...state.filterState,
  }));
  const { characters } = getChars(language);
  const { buttons } = getCharSelect(language);
  const filteredCharacters = characters
    .filter((character) =>
      filter === "all" ? true : character.type === filter
    )
    .sort((a, b) => {
      if (a.type === "citizen" && b.type !== "citizen") return -1;
      if (a.type === "mafia" && b.type !== "citizen") return -1;
      if (
        a.type === "mid-independent" &&
        !["mafia", "citizen"].includes(b.type)
      )
        return -1;
      if (
        a.type === "independent" &&
        !["mafia", "citizen", "mid-independent"].includes(b.type)
      )
        return -1;
      return 0;
    });

  return (
    <div className={styles.container}>
      <button
        className={styles.resetButton}
        onClick={() => dispatch(resetCharacters())}
      >
        {buttons.reset}
      </button>
      <FilterCharacters />
      {filteredCharacters.map((character, index) => (
        <CharacterButton
          key={character.id}
          character={character}
          isLastChild={index === filteredCharacters.length - 1}
        />
      ))}
    </div>
  );
};

export default CharSelect;
