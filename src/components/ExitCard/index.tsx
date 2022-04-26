import React, { FC } from "react";

// styles
import styles from "./ExitCard.module.css"

interface IProps {
  title: string;
  description: string;
}

const ExitCard: FC<IProps> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ExitCard;
