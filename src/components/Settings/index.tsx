import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import ModalContainer from "../Modal";
import styles from "./Settings.module.css";

const Settings = () => {
  const { language } = useSelector((state: AppState) => state.languageState);
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={() => setShow(true)}>Set Password</button>
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
