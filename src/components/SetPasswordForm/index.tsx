import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../redux/password/passwordActions";
import { AppState } from "../../redux/store";
import styles from "./SetPasswordForm.module.css";
import { decrypt, encrypt } from "../../services/hash";
import { getSettings } from "../../services/getPageData";
import PasswordInput from "./PasswordInput";

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
      console.log("ERROR: CURRENT PASSWORD IS NOT CORRECT!");
    else if (data.newPassword1 !== data.newPassword2)
      console.log("ERROR: NEW PASSWORDS DO NOT MATCH!");
    else if (data.newPassword2 === data.currentPassword)
      console.log("ERROR: NEW PASSWORD IS EQUAL TO CURRENT PASSWORD!");
    else if (
      (decrypt(password) && !data.currentPassword) ||
      !data.newPassword1 ||
      !data.newPassword2
    )
      console.log("ERROR: PLEASE FILL IN ALL THE BLANKS!");
    else {
      dispatch(setPassword(encrypt(data.newPassword1)));
      closeHandler();
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      {!!decrypt(password) && 
        <PasswordInput
          name="currentPassword"
          data={data}
          setData={setData}
          placeholder={currentPassPH}
        />
      }
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
