import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import toFarsiNumber from "../../services/convertNumbersToFa";
import getColor from "../../services/getColor";
import { getStatistics } from "../../services/getPageData";
import styles from "./Statistics.module.css";
import { countSides } from "./utils";
import { SuggestionType } from "../SuggestedScenarios/utils";

interface IProps {
  suggestion?: SuggestionType;
}

const Statistics: FC<IProps> = ({ suggestion }) => {
  const { language, roleDictionary, dataDictionary } = useSelector(
    (state: AppState) => ({
      ...state.charactersState,
      ...state.languageState,
      ...state.playersDataState,
    })
  );
  const [stats, setStats] = useState(
    countSides(
      suggestion ? suggestion.characters : Object.values(roleDictionary),
      language,
      true,
      {
        dataDictionary,
        roleDictionary,
      }
    )
  );

  const { sides } = getStatistics(language);

  useEffect(() => {
    setStats(
      countSides(
        suggestion ? suggestion.characters : Object.values(roleDictionary),
        language,
        true,
        {
          dataDictionary,
          roleDictionary,
        }
      )
    );
  }, [suggestion, dataDictionary, roleDictionary, language]);

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
          <h3>
            {
              sides[
                side as "citizen" | "mafia" | "independent" | "mid-independent"
              ]
            }
          </h3>
          <h3>
            {language === "persian"
              ? toFarsiNumber(`${stats[side]}`)
              : stats[side]}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
