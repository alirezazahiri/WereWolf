import React from "react";
import { useSelector } from "react-redux";
import useSearch from "../../hooks/useSearch";
import { AppState } from "../../redux/store";
import Search from "../Search";
import SuggestButton from "./SuggestButton";

// utils
import suggestions from "./utils";

// styles
import styles from "./SuggestedScenarios.module.css";

const SuggestedScenarios = () => {
  const { language } = useSelector((state: AppState) => state.languageState);
  const [value, changeHandler] = useSearch();

  return (
    <div>
      <div className={styles.searchContainer}>
        <Search
          value={value}
          changeHandler={changeHandler}
          language={language}
        />
      </div>
      {suggestions
        .sort((a, b) => a.characters.length - b.characters.length)
        .filter((suggestion) =>
          (suggestion.fa_title + suggestion.en_title).toLowerCase().includes(
            value.trim().toLowerCase()
          )
        )
        .map(({ id, en_title, fa_title }) => (
          <SuggestButton
            key={id}
            id={id}
            title={language === "persian" ? fa_title : en_title}
          />
        ))}
    </div>
  );
};

export default SuggestedScenarios;
