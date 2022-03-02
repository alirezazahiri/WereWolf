import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../redux/password/passwordActions";
import { AppState } from "../../redux/store";
import styles from "./SetPasswordForm.module.css";
import { decrypt, encrypt } from "../../services/hash";
import { getSettings } from "../../services/getPageData";
import PasswordInput from "./PasswordInput";
import showToast from "../../services/showToast";
import {
  CURRENT_PASS_ERROR_FA,
  CURRENT_PASS_ERROR_EN,
  NEW_PASS_ERROR_FA,
  NEW_PASS_ERROR_EN,
  NEW_CURR_PASS_ERROR_FA,
  NEW_CURR_PASS_ERROR_EN,
  EMPTY_FIELD_PASS_ERROR_FA,
  EMPTY_FIELD_PASS_ERROR_EN,
  PASS_SUCCESS_FA,
  PASS_SUCCESS_EN,
} from "../../translations/Toaster/toast-messages";

const SetPasswordForm: FC<{ closeHandler: any }> = ({ closeHandler }) => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword1: "",
    newPassword2: "",
  });

  const { password, language } = useSelector((state: AppState) => ({
    ...state.passwordState,
    ...state.languageState,
  }));
  const dispatch = useDispatch();
  const { proceed, currentPassPH, newPassPH, confirmPassPH } =
    getSettings(language);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.currentPassword !== decrypt(password))
      showToast(
        "error",
        language === "persian" ? CURRENT_PASS_ERROR_FA : CURRENT_PASS_ERROR_EN
      );
    else if (data.newPassword1 !== data.newPassword2)
      showToast(
        "error",
        language === "persian" ? NEW_PASS_ERROR_FA : NEW_PASS_ERROR_EN
      );
    else if (data.newPassword2 === data.currentPassword)
      showToast(
        "error",
        language === "persian" ? NEW_CURR_PASS_ERROR_FA : NEW_CURR_PASS_ERROR_EN
      );
    else if (
      (decrypt(password) && !data.currentPassword) ||
      !data.newPassword1 ||
      !data.newPassword2
    )
      showToast(
        "error",
        language === "persian"
          ? EMPTY_FIELD_PASS_ERROR_FA
          : EMPTY_FIELD_PASS_ERROR_EN
      );
    else {
      showToast(
        "success",
        language === "persian" ? PASS_SUCCESS_FA : PASS_SUCCESS_EN
      );
      dispatch(setPassword(encrypt(data.newPassword1)));
      closeHandler();
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      {!!decrypt(password) && (
        <PasswordInput
          name="currentPassword"
          data={data}
          setData={setData}
          placeholder={currentPassPH}
        />
      )}
      <PasswordInput
        name="newPassword1"
        data={data}
        setData={setData}
        placeholder={newPassPH}
      />
      <PasswordInput
        name="newPassword2"
        data={data}
        setData={setData}
        placeholder={confirmPassPH}
      />
      <button type="submit">{proceed}</button>
    </form>
  );
};

export default SetPasswordForm;
