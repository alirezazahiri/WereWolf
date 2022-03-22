// react-redux
import { useDispatch, useSelector } from "react-redux";

// types
import { AppState } from "../../redux/store";

// redux store
import {
  updateRoleDictionary,
  createDataDictionary,
} from "../../redux/playersData/playersDataActions";

// services
import mapCharIdToCharacter from "../../services/mapCharIdToCharacter";
import { getCaution, getPlayerButtons } from "../../services/getPageData";
import showToast from "../../services/showToast";

// components
import PButton from "./PButton";

// styles
import styles from "./PlayerButtons.module.css";
import { useEffect, useRef, useState } from "react";
import ModalContainer from "../Modal";
import Search from "../Search";
import useSearch from "../../hooks/useSearch";
import toFarsiNumber from "../../services/convertNumbersToFa";

const PlayerButtons = () => {
  const dispatch = useDispatch();
  const rerenderCountRef = useRef(0);
  const [value, changeHandler] = useSearch();
  const { language, roleDictionary, characters } = useSelector(
    (state: AppState) => ({
      ...state.languageState,
      ...state.playersState,
      ...state.playersDataState,
      ...state.charactersState,
    })
  );

  const [showCaution, setShowCaution] = useState(false);
  const { buttons, update_message } = getPlayerButtons(language);

  const { update_roles_caution } = getCaution(language);

  const updateHandler = (allow = false) => {
    !showCaution && setShowCaution(true);
    if (allow) {
      dispatch(createDataDictionary(Object.keys(roleDictionary)));
      dispatch(updateRoleDictionary(Object.keys(roleDictionary), characters));
      showToast("success", update_message);
    }
  };
  console.log(rerenderCountRef);
  useEffect(() => {
    if (rerenderCountRef.current < 1) {
      const values = Object.values(roleDictionary).reduce(
        (prev, current) => prev + current,
        ""
      );
      if (values === "")
        dispatch(updateRoleDictionary(Object.keys(roleDictionary), characters));
    }
    rerenderCountRef.current++;
  }, [characters, dispatch, roleDictionary]);

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Search
          value={value}
          changeHandler={changeHandler}
          language={language}
        />
      </div>
      {roleDictionary &&
        Object.keys(roleDictionary)
          .filter(
            (name) =>
              name
                .trim()
                .toLowerCase()
                .includes(toFarsiNumber(value).trim().toLowerCase()) ||
              name.trim().toLowerCase().includes(value.trim().toLowerCase())
          )
          .map((name) => (
            <PButton
              key={name}
              name={name}
              character={mapCharIdToCharacter(roleDictionary[name], language)}
            />
          ))}
      <button onClick={() => updateHandler()} className={styles.updateButton}>
        {buttons.update}
      </button>
      <ModalContainer
        language={language}
        type="caution"
        caution_message={update_roles_caution}
        show={showCaution}
        closeHandler={() => setShowCaution(false)}
        startHandler={() => {
          updateHandler(true);
          setShowCaution(false);
        }}
      />
    </div>
  );
};

export default PlayerButtons;
