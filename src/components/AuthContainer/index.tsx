import  { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getGodVision } from "../../services/getPageData";
import PasswordForm from "../PasswordForm";
import styles from "./AuthContainer.module.css";

const AuthContainer: FC<{ setIsAllowed: any }> = ({ setIsAllowed }) => {
  const { language } = useSelector((state: AppState) => state.languageState);
  const { title } = getGodVision(language);
  return (
    <div className={styles.authContainer}>
      <h1>{title}</h1>
      <PasswordForm setIsAllowed={setIsAllowed} />
    </div>
  );
};

export default AuthContainer;
