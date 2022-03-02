import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getSettings } from "../../services/getPageData";
import { decrypt } from "../../services/hash";
import showToast from "../../services/showToast";
import Icon from "../Icon";
import styles from "./PasswordForm.module.css";
import {
  WRONG_PASSWORD_ERROR_EN,
  WRONG_PASSWORD_ERROR_FA,
} from "../../translations/Toaster/toast-messages";

interface IProps {
  setIsAllowed: any;
}

const PasswordForm: FC<IProps> = ({ setIsAllowed }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [clientPassword, setClientPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { password, language } = useSelector((state: AppState) => ({
    ...state.passwordState,
    ...state.languageState,
  }));
  const { proceed, passwordPH } = getSettings(language);

  useEffect(() => {
    inputRef.current?.focus();
    if (!password) setIsAllowed(true);
  }, [password, setIsAllowed]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (clientPassword === decrypt(password)) setIsAllowed(true);
    else
      showToast(
        "error",
        language === "persian"
          ? WRONG_PASSWORD_ERROR_FA
          : WRONG_PASSWORD_ERROR_EN
      );
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientPassword(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          type={showPassword ? "text" : "password"}
          placeholder={passwordPH}
          value={clientPassword}
          onChange={changeHandler}
        />
        <button
          type="button"
          className={styles.hideShow}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <Icon icon="eye" /> : <Icon icon="eye-slash" />}
        </button>
      </div>
      <button type="submit">{proceed}</button>
    </form>
  );
};

export default PasswordForm;
