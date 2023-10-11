import  { FC, useEffect } from "react";

// services
import showToast from "../../services/showToast";

// navigate
import { useNavigate } from "react-router-dom";

// react-redux
import { useDispatch, useSelector } from "react-redux";

// state type
import { AppState } from "../../redux/store";

// messages
import {
  MODAL_HEADER_SUCCESS_CHARS_FA,
  MODAL_HEADER_SUCCESS_CHARS_EN,
} from "../../translations/Toaster/toast-messages";
import {
  MODAL_HEADER_ERROR_FA,
  MODAL_HEADER_ERROR_EN,
  MODAL_HEADER_SUCCESS_FA,
  MODAL_HEADER_SUCCESS_EN,
  MODAL_HEADER_ERROR_CHAR_FA,
  MODAL_HEADER_ERROR_CHAR_EN,
} from "../../translations/Toaster/toast-messages";

// redux actions
import {
  createDataDictionary,
  createRoleDictionary,
  updateRoleDictionary,
} from "../../redux/playersData/playersDataActions";

// styles
import styles from "./HeaderButtons.module.css";
import {
  MODAL_HEADER_SUCCESS_SUGGESTION_FA,
  MODAL_HEADER_SUCCESS_SUGGESTION_EN,
} from "../../translations/Toaster/toast-messages";
import { setCountOfPlayers } from "../../redux/players/playersActions";

type Props = {
  language: string;
  remaining: any;
  type: string;
  allowGameStart?: boolean;
  buttons: {
    close: string;
    back_to_name_enter: string;
    start: string;
    go_to_char_select: string;
    see_characters: string;
    accept_and_continue: string;
    submit: string;
  };
  closeHandler?: () => void;
  backHandler?: () => void;
  gotoCharSelect?: () => void;
  gotoSeeCharacters?: () => void;
  startGame?: () => void;
};

const HeaderButtons: FC<Props> = ({
  language,
  remaining,
  type,
  allowGameStart,
  buttons,
  closeHandler,
  backHandler,
  gotoCharSelect,
  gotoSeeCharacters,
  startGame,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { names, characters } = useSelector((state: AppState) => ({
    ...state.charactersState,
    ...state.playersState,
  }));

  const handleGoto = () => {
    if (type === "scenarioNameEnter" && gotoSeeCharacters) {
      if (remaining !== 0) {
        const message =
          language === "persian"
            ? MODAL_HEADER_ERROR_FA
            : MODAL_HEADER_ERROR_EN;
        showToast("error", message(remaining));
      } else {
        const message =
          language === "persian"
            ? MODAL_HEADER_SUCCESS_SUGGESTION_FA
            : MODAL_HEADER_SUCCESS_SUGGESTION_EN;
        showToast(
          "success",
          <button className={styles.start} onClick={handleStart}>
            {message}
          </button>
        );
        dispatch(setCountOfPlayers(`${names.length}`));
        dispatch(createRoleDictionary(names));
        dispatch(createDataDictionary(names));
        gotoSeeCharacters();
      }
      return;
    }
    if (gotoCharSelect) {
      if (remaining !== 0) {
        const message =
          language === "persian"
            ? MODAL_HEADER_ERROR_FA
            : MODAL_HEADER_ERROR_EN;
        showToast("error", message(remaining));
      } else {
        const message =
          language === "persian"
            ? MODAL_HEADER_SUCCESS_FA
            : MODAL_HEADER_SUCCESS_EN;
        showToast("success", message);
        dispatch(createRoleDictionary(names));
        dispatch(createDataDictionary(names));
        gotoCharSelect();
      }
    }
  };

  const handleStart = () => {
    if (type === "showScenario" && startGame) {
      const message =
        language === "persian"
          ? MODAL_HEADER_SUCCESS_CHARS_FA
          : MODAL_HEADER_SUCCESS_CHARS_EN;
      showToast("success", message);
      dispatch(updateRoleDictionary(names, characters));
      navigate("/players-roles");
      startGame();
      return;
    }
    if (type === "scenarioNameEnter" && startGame === undefined) {
      showToast(
        "success",
        <button className={styles.start} onClick={handleStart}>
          {buttons.start}
        </button>
      );
      dispatch(updateRoleDictionary(names, characters));
      navigate("/players-roles");
      return;
    }
    if (startGame) {
      if (remaining !== 0) {
        const message =
          language === "persian"
            ? MODAL_HEADER_ERROR_CHAR_FA
            : MODAL_HEADER_ERROR_CHAR_EN;
        showToast("error", message(remaining));
      } else {
        const message =
          language === "persian"
            ? MODAL_HEADER_SUCCESS_CHARS_FA
            : MODAL_HEADER_SUCCESS_CHARS_EN;
        showToast("success", message);
        dispatch(updateRoleDictionary(names, characters));
        navigate("/players-roles");
        startGame();
      }
    }
  };

  useEffect(() => {
    if (remaining === 0 && type === "nameEnter")
      showToast(
        "success",
        <button className={styles.goto} onClick={handleGoto}>
          {buttons.go_to_char_select}
        </button>
      );
    if (remaining === 0 && type === "scenarioNameEnter")
      showToast(
        "success",
        <button className={styles.goto} onClick={handleGoto}>
          {buttons.see_characters}
        </button>
      );
    else if (remaining === 0 && type === "charSelect")
      showToast(
        "success",
        <button className={styles.start} onClick={handleStart}>
          {buttons.start}
        </button>
      );
  }, [
    remaining,
    buttons.start,
    buttons.go_to_char_select,
    buttons.see_characters,
    handleGoto,
    handleStart,
    type,
  ]);

  return (
    <>
      {type === "nameEnter" && (
        <button className={styles.goto} onClick={handleGoto}>
          {buttons.go_to_char_select}
        </button>
      )}
      {type === "charSelect" && (
        <>
          <button className={styles.back} onClick={backHandler}>
            {buttons.back_to_name_enter}
          </button>
          <button className={styles.start} onClick={handleStart}>
            {buttons.start}
          </button>
        </>
      )}
      {type === "scenarioNameEnter" && (
        <button className={styles.goto} onClick={handleGoto}>
          {buttons.see_characters}
        </button>
      )}
      {type === "showScenario" && allowGameStart && (
        <>
          <button className={styles.start} onClick={handleStart}>
            {buttons.start}
          </button>
          <button className={styles.back} onClick={backHandler}>
            {buttons.back_to_name_enter}
          </button>
        </>
      )}
      {type === "caution" && (
        <button className={styles.start} onClick={startGame}>
          {buttons.accept_and_continue}
        </button>
      )}
      <button className={styles.close} onClick={closeHandler}>
        {buttons.close}
      </button>
    </>
  );
};

export default HeaderButtons;
