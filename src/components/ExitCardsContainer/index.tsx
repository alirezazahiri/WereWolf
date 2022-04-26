import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getExitCards } from "../../services/getPageData";
import ExitCard from "../ExitCard";

import styles from "./ExitCardsContainer.module.css";

const ExitCardsContainer = () => {
  const { language } = useSelector((state: AppState) => ({
    ...state.languageState,
  }));

  const { exitCards } = getExitCards(language);

  return (
    <div className={styles.container}>
      {exitCards.map(({ title, description, id }) => (
        <ExitCard title={title} description={description} key={id} />
      ))}
    </div>
  );
};

export default ExitCardsContainer;
