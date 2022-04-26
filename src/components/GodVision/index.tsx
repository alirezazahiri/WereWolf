import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// custom hooks
import useSearch from "../../hooks/useSearch";

// components
import FilterContainer from "../FilterContainer";
import ManagePlayerCard from "./ManagePlayerCard";

// state type
import { AppState } from "../../redux/store";

// services
import mapCharIdToCharacter from "../../services/mapCharIdToCharacter";
import toFarsiNumber from "../../services/convertNumbersToFa";

// styles
import styles from "./GodVision.module.css";
import StatFilter from "./StatFilter";
import { updateRoleDictionary } from "../../redux/playersData/playersDataActions";
import { CharType } from "../../redux/types";
import Statistics from "../Statistics";
import StatSwitch from "../StatSwitch";
import { toggleDayNight } from "../../redux/dayNight/dayNightActions";

const GodVision = () => {
  const dispatch = useDispatch();
  const {
    language,
    names,
    roleDictionary,
    dataDictionary,
    filter,
    characters,
    isDay,
  } = useSelector((state: AppState) => ({
    ...state.languageState,
    ...state.playersState,
    ...state.playersDataState,
    ...state.charactersState,
    ...state.filterState,
    ...state.passwordState,
    ...state.dayNightState,
  }));

  const [value, changeHandler] = useSearch();

  //
  const [statFilter, setStatFilter] = useState("all");

  useEffect(() => {
    const values = Object.values(roleDictionary).reduce(
      (prev, current) => prev + current,
      ""
    );
    if (values === "" && characters.length !== 0) {
      dispatch(updateRoleDictionary(Object.keys(roleDictionary), characters));
    }
  }, [characters, dispatch, roleDictionary]);

  const getSwitchTitle = () => {
    if (isDay) {
      if (language === "english") return "Day";
      return "روز";
    }
    if (language === "english") return "Night";
    return "شب";
  };

  return (
    <div className={styles.container}>
      <div className={styles.statContainer}>
        <Statistics />
        <StatSwitch
          onChange={() => dispatch(toggleDayNight())}
          title={getSwitchTitle()}
          checked={isDay}
          color={isDay ? "#2ce071" : "#DA0037"}
        />
      </div>
      <FilterContainer
        value={value}
        changeHandler={changeHandler}
        language={language}
      />
      <StatFilter setStatFilter={setStatFilter} statFilter={statFilter} />
      {names
        .map((name: string) => {
          const character: CharType | undefined = mapCharIdToCharacter(
            roleDictionary[name],
            language
          );
          const role: string | undefined = character?.title;
          const icon: string | undefined = character?.icon;
          const type: string | undefined = character?.type;
          return { role, type, icon, name };
        })
        .filter(({ type }: { [key: string]: string }) =>
          filter === "all" ? true : type === filter
        )
        .filter(
          ({ role, name }: { [key: string]: string }) =>
            role?.toLowerCase().includes(value.trim().toLowerCase()) ||
            toFarsiNumber(name)
              ?.toLowerCase()
              .includes(toFarsiNumber(value).trim().toLowerCase())
        )
        .filter(({ name }: { [key: string]: string }) => {
          switch (statFilter) {
            case "silent":
              return !dataDictionary[name].unmute;
            case "speaker":
              return dataDictionary[name].unmute;
            case "alive":
              return dataDictionary[name].alive;
            case "dead":
              return !dataDictionary[name].alive;
            default:
              return true;
          }
        }) // filter by alive/death/silent/speaker
        .map(({ role, type, icon, name }: { [key: string]: string }) => (
          <ManagePlayerCard
            key={name}
            type={type}
            role={role}
            icon={icon}
            player={name}
          />
        ))}
    </div>
  );
};

export default GodVision;
