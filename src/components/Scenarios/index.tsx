// react-redux
import { useSelector } from "react-redux";

// state type
import { AppState } from "../../redux/store";

// custom hooks
import useSearch from "../../hooks/useSearch";

// components
import FilterContainer from "../FilterContainer";
import ScenarioCard from "../ScenarioCard";

// services
import getChars from "../../services/getPageData";

const Scenarios = () => {
  const { language, filter } = useSelector((state: AppState) => ({
    ...state.languageState,
    ...state.filterState,
  }));
  const [value, changeHandler] = useSearch();

  const { characters, names } = getChars(language);

  return (
    <div>
      <FilterContainer
        value={value}
        changeHandler={changeHandler}
        language={language}
      />
      {characters
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
        })
        .filter((character) =>
          character.title.toLowerCase().includes(value.trim().toLowerCase())
        )
        .map((character, index) => (
          <ScenarioCard key={names[index]} character={character} />
        ))}
    </div>
  );
};

export default Scenarios;
