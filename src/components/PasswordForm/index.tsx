import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { decrypt } from "../../services/hash";
import styles from "./PasswordForm.module.css";

interface IProps {
  setIsAllowed: any;
}

const PasswordForm: FC<IProps> = ({ setIsAllowed }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [clientPassword, setClientPassword] = useState("");
  const { password } = useSelector((state: AppState) => state.passwordState);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (clientPassword === decrypt(password)) setIsAllowed(true);
    else console.log("ERROR: PASSWORD IS WRONG!");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientPassword(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
      <input
        ref={inputRef}
        type="text"
        placeholder="God's Room Keyword..."
        value={clientPassword}
        onChange={changeHandler}
      />
      <button type="submit">Proceed</button>
    </form>
  );
};

export default PasswordForm;
