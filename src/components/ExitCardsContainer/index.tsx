import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCards,
  removeAllCards,
} from "../../redux/exitCards/exitCardsActions";
import { AppState } from "../../redux/store";
import { getExitCards } from "../../services/getPageData";
import ExitCard from "../ExitCard";
import StatSwitch from "../StatSwitch";

import styles from "./ExitCardsContainer.module.css";

const ExitCardsContainer = () => {
  const { language, isFull } = useSelector((state: AppState) => ({
    ...state.languageState,
    ...state.exitCardsState,
  }));

  const { exitCards } = getExitCards(language);

  const dispatch = useDispatch();

  const getSwitchTitle = () => {
    if (!isFull) {
      if (language === "english") return "Select All";
      return "انتخاب همه";
    }
    if (language === "english") return "Remove All";
    return "حذف همه";
  };

  const changeHandler = () => {
    if (!isFull) dispatch(selectAllCards(exitCards.length));
    else dispatch(removeAllCards());
  };

  return (
    <div>
      <div className={styles.statContainer}>
        <StatSwitch
          onChange={changeHandler}
          title={getSwitchTitle()}
          checked={!isFull}
          color={isFull ? "#DA0037" : "#2ce071"}
        />
      </div>
      <div className={styles.container}>
        {exitCards.map(({ title, description, id }) => (
          <ExitCard
            id={id}
            title={title}
            description={description}
            key={id}
            len={exitCards.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ExitCardsContainer;
