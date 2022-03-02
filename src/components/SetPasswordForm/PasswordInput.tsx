import React, { FC, useState } from "react";
import Icon from "../Icon";
import styles from "./SetPasswordForm.module.css";

interface IProps {
  data: { [key: string]: string };
  setData: any;
  name: string;
  placeholder: string;
}

const PasswordInput: FC<IProps> = ({ data, setData, name, placeholder }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false);

  return (
    <div className={styles.inputContainer}>
      <input
        type={show ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={data[name]}
        onChange={changeHandler}
      />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className={styles.hideShow}
      >
        {show ? <Icon icon="eye" /> : <Icon icon="eye-slash" />}
      </button>
    </div>
  );
};

export default PasswordInput;
