import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../redux/password/passwordActions";
import { AppState } from "../../redux/store";
import styles from "./SetPasswordForm.module.css";

const SetPasswordForm: FC<{ closeHandler: any }> = ({ closeHandler }) => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword1: "",
    newPassword2: "",
  });
  const { password } = useSelector((state: AppState) => state.passwordState);
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // save to store
    if (data.currentPassword !== password)
      console.log("ERROR: CURRENT PASSWORD IS NOT CORRECT!");
    else if (data.newPassword1 !== data.newPassword2)
      console.log("ERROR: NEW PASSWORDS DO NOT MATCH!");
    else if (data.newPassword2 === data.currentPassword)
      console.log("ERROR: NEW PASSWORD IS EQUAL TO CURRENT PASSWORD!");
    else if (
      (password && !data.currentPassword) ||
      !data.newPassword1 ||
      !data.newPassword2
    )
      console.log("ERROR: PLEASE FILL IN ALL THE BLANKS!");
    else {
      dispatch(setPassword(data.newPassword1));
      closeHandler();
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      {!!password && (
        <input
          type="text"
          name="currentPassword"
          placeholder="Current Password..."
          value={data.currentPassword}
          onChange={changeHandler}
        />
      )}
      <input
        type="text"
        name="newPassword1"
        placeholder="New Password..."
        value={data.newPassword1}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="newPassword2"
        placeholder="Confirm New Password..."
        value={data.newPassword2}
        onChange={changeHandler}
      />
      <button type="submit">Proceed</button>
    </form>
  );
};

export default SetPasswordForm;
