import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// react-router-dom
import { Link, useParams, useNavigate } from "react-router-dom";

// components
import BriefSection from "./BriefSection";
import StatSwitch from "../StatSwitch";
import Icon from "../Icon";

// styles
import styles from "./PlayerVision.module.css";

// redux
import { changeDataDictionary } from "../../redux/playersData/playersDataActions";
import { AppState } from "../../redux/store";

// services
import { getExitCards, getPlayerVision } from "../../services/getPageData";
import getChars from "../../services/getPageData";
import getColor from "../../services/getColor";
import { shorten } from "../../services/shorten";
import ModalContainer from "../Modal";
import { removeCard } from "../../redux/exitCards/exitCardsActions";

type SquadType = "mafia" | "citizen" | "independent" | "mid-independent";

const PlayerVision = () => {
  const { playerName } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { roleDictionary, dataDictionary, language, isDay, cards } =
    useSelector((state: AppState) => ({
      ...state.playersDataState,
      ...state.languageState,
      ...state.dayNightState,
      ...state.exitCardsState,
    }));

  const [showExitCard, setShowExitCard] = useState(false);
  const [exitCard, setExitCard] = useState(0);

  const { exitCards } = getExitCards(language);

  const { playerBrief, squads, stats } = getPlayerVision(language);

  const player = playerName as string;
  const PLAYER_ROLE_ID = roleDictionary[player] as number;

  useEffect(() => {
    if (!PLAYER_ROLE_ID) {
      navigate("/god-vision");
    }
  });

  if (!PLAYER_ROLE_ID) {
    return <></>;
  }

  // stats
  const { alive, unmute } = dataDictionary[player]
    ? dataDictionary[player]
    : { alive: true, unmute: true };

  const PLAYER_CHARACTER = getChars(language).characters[PLAYER_ROLE_ID - 1];
  const COLOR = getColor(PLAYER_CHARACTER.type);

  const changeHandler = (e: any) => {
    dispatch(
      changeDataDictionary(player, {
        ...dataDictionary[player],
        text: e.target.value,
      })
    );
  };

  const clearText = () => {
    dispatch(
      changeDataDictionary(player, { ...dataDictionary[player], text: "" })
    );
  };

  const aliveChangeHandler = () => {
    if (alive || alive === undefined) {
      dispatch(
        changeDataDictionary(player, {
          ...dataDictionary[player],
          alive: false,
          unmute: false,
        })
      );
      if (isDay && cards.length) {
        const randIndex = Math.floor(Math.random() * cards.length);
        setExitCard(cards[randIndex]);
        dispatch(removeCard(cards[randIndex]));
        setShowExitCard(true);
      }
    } else
      dispatch(
        changeDataDictionary(player, { ...dataDictionary[player], alive: true })
      );
  };

  const muteChangeHandler = () => {
    if (alive || alive === undefined)
      dispatch(
        changeDataDictionary(player, {
          ...dataDictionary[player],
          unmute: !unmute,
        })
      );
  };

  return (
    <>
      <ModalContainer
        language={language}
        closeHandler={() => setShowExitCard(false)}
        type="exitCardAnnouncement"
        show={showExitCard}
        exitCard={exitCards.find((ec) => exitCard === ec.id)}
      />
      <div className={styles.container} style={{ color: COLOR }}>
        <div className={styles.headerContainer}>
          <h1>{shorten(playerName as string)}</h1>
          <Link to="/god-vision">
            <Icon icon="arrow-left" />
          </Link>
        </div>
        {/* title */}
        <BriefSection
          color={COLOR}
          language={language}
          playerBrief={playerBrief}
          charTitle={PLAYER_CHARACTER.title}
          charSquad={squads[PLAYER_CHARACTER.type as SquadType]}
        />
        {/* Text */}
        <div className={styles.playerTextContainer}>
          <textarea
            value={dataDictionary[player]?.text}
            onChange={changeHandler}
            style={{ color: COLOR, border: `1px solid ${COLOR}` }}
          />
          <button onClick={clearText}>
            <Icon icon="minus-circle fa-lg" />
          </button>
        </div>

        {/* death stat */}
        <StatSwitch
          onChange={aliveChangeHandler}
          checked={alive === undefined ? true : alive}
          title={alive ? stats.alive : stats.dead}
          color={COLOR}
        />
        {/* mute stat */}
        <StatSwitch
          onChange={muteChangeHandler}
          checked={unmute === undefined ? true : unmute}
          title={unmute ? stats.unmute : stats.mute}
          color={COLOR}
        />
      </div>
    </>
  );
};

export default PlayerVision;
