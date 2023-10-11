import  { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseCard, removeCard } from "../../redux/exitCards/exitCardsActions";
import { AppState } from "../../redux/store";

// styles
import styles from "./ExitCard.module.css";

interface IProps {
  title: string;
  description: string;
  id: number;
  len: number;
}

const ExitCard: FC<IProps> = ({ title, description, id, len }) => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state: AppState) => state.exitCardsState);
  const [isIn, setIsIn] = useState(false);

  const clickHandler = () => {
    if (!cards.includes(id)) dispatch(chooseCard(id, len));
    else dispatch(removeCard(id));
    setIsIn((prev) => !prev);
  };

  useEffect(() => {
    if (cards.includes(id) && !isIn) {
      setIsIn(true);
    } else if (!cards.includes(id) && isIn) {
      setIsIn(false);
    }
  }, [cards, isIn, id]);

  return (
    <div
      className={`${styles.container} ${isIn ? styles.active : ""}`}
      onClick={clickHandler}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ExitCard;
