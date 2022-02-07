import React, { FC } from "react";
import styles from "./Caution.module.css";

interface IProps {
  caution_message: string;
}

const Caution: FC<IProps> = ({ caution_message }) => {
  return (
    <div className={styles.container}>
      <p>{caution_message}</p>
    </div>
  );
};

export default Caution;
