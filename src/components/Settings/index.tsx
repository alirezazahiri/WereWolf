import  { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getSettings } from "../../services/getPageData";
import ModalContainer from "../Modal";
import styles from "./Settings.module.css";

const initialState = {
  passwordSettings: false,
  languageSettings: false,
  forgetPassSettings: false,
  deletePassSettings: false,
};

const Settings = () => {
  const { language, password } = useSelector((state: AppState) => ({...state.languageState, ...state.passwordState}));
  const [show, setShow] = useState(initialState);
  const { passwordSettings, languageSettings, forgetPassSettings, deletePassSettings } =
    getSettings(language);

  return (
    <div className={styles.container}>
      {/* buttons */}
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setShow({ ...initialState, passwordSettings: true })}
        >
          {passwordSettings}
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setShow({ ...initialState, languageSettings: true })}
        >
          {languageSettings}
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setShow({ ...initialState, forgetPassSettings: true })}
        >
          {forgetPassSettings}
        </button>
      </div>
      {password && <div className={styles.buttonContainer}>
        <button
          onClick={() => setShow({ ...initialState, deletePassSettings: true })}
        >
          {deletePassSettings}
        </button>
      </div>}

      {/* modals */}
      {/* Password */}
      <ModalContainer
        language={language}
        type="setPassword"
        show={show.passwordSettings}
        closeHandler={() => setShow({ ...initialState })}
      />
      {/* Language */}
      <ModalContainer
        language={language}
        type="changeLanguage"
        show={show.languageSettings}
        closeHandler={() => setShow({ ...initialState })}
      />
      {/* Forget Password Settings */}
      <ModalContainer
        language={language}
        type="forgetPassSettings"
        show={show.forgetPassSettings}
        closeHandler={() => setShow({ ...initialState })}
      />
      {/* Forget Password Settings */}
      <ModalContainer
        language={language}
        type="deletePassSettings"
        show={show.deletePassSettings}
        closeHandler={() => setShow({ ...initialState })}
      />
    </div>
  );
};

export default Settings;
