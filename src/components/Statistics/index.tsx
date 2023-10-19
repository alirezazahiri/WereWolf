import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import toFarsiNumber from "../../services/convertNumbersToFa";
import getColor from "../../services/getColor";
import { getStatistics } from "../../services/getPageData";
import styles from "./Statistics.module.css";
import { countSides } from "./utils";
import { SuggestionType } from "../SuggestedScenarios/utils";
import { useLocation } from "react-router-dom";

export type StatType = {
  mafia: number;
  citizen: number;
  independent: number;
  "mid-independent": number;
};

interface IProps {
  statistics?: StatType;
}

const Statistics: FC<IProps> = ({ statistics }) => {
  const location = useLocation();
  const { language, roleDictionary, dataDictionary } = useSelector(
    (state: AppState) => ({
      ...state.charactersState,
      ...state.languageState,
      ...state.playersDataState,
    })
  );
  const [stats, setStats] = useState<StatType>(
    statistics || { citizen: 0, independent: 0, mafia: 0, "mid-independent": 0 }
  );

  const { sides } = getStatistics(language);

  useEffect(() => {
    if (location.pathname === "/god-vision")
      setStats(
        countSides(Object.values(roleDictionary), language, true, {
          dataDictionary,
          roleDictionary,
        })
      );
  }, [language, dataDictionary, roleDictionary, location]);

  return (
    <div className={styles.container}>
      {Object.keys(sides).map((side) => (
        <div
          className={styles.row}
          style={{
            color: getColor(side),
            borderBottom: `1px solid ${getColor(side)}`,
          }}
          key={side}
        >
          <h3>{sides[side as keyof StatType]}</h3>
          <h3>
            {language === "persian"
              ? toFarsiNumber(`${stats[side as keyof StatType]}`)
              : stats[side as keyof StatType]}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
