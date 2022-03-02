import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getSettings } from "../../services/getPageData";
import ModalContainer from "../Modal";
import styles from "./Settings.module.css";

const Settings = () => {
  const { language } = useSelector((state: AppState) => state.languageState);
  const [show, setShow] = useState(false);
  const { passwordSettings } = getSettings(language);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={() => setShow(true)}>{passwordSettings}</button>
      </div>
      <ModalContainer
        language={language}
        scenarioName={language === "persian" ? "سناریو" : "Scenario"}
        type="setPassword"
        show={show}
        closeHandler={() => setShow(false)}
      />
    </div>
  );
};

export default Settings;
