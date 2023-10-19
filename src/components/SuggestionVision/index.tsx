import  { useEffect, useMemo, useState } from "react";
import { CharType } from "../../redux/types";
import { useParams } from "react-router-dom";
import suggestions, { SuggestionType } from "../SuggestedScenarios/utils";
import mapCharIdToCharacter from "../../services/mapCharIdToCharacter";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import ModalContainer from "../Modal";
import styles from "./SuggestionVision.module.css";
import Icon from "../Icon";
import { getCaution, getSuggestionVision } from "../../services/getPageData";
import {
  setCountOfPlayers,
  setPlayersNames,
} from "../../redux/players/playersActions";
import {
  updateRoleDictionary,
  createDataDictionary,
  createRoleDictionary,
} from "../../redux/playersData/playersDataActions";
import Statistics from "../Statistics";
import { setCharactersStore } from '../../redux/characters/charactersActions';
import NotFound from "../NotFound";
import { sidesCountByCharID } from "../Statistics/utils";

const SuggestionVision = () => {
  const [characters, setCharacters] = useState<CharType[]>([]);
  const { language, names } = useSelector((state: AppState) => ({
    ...state.languageState,
    ...state.playersState,
  }));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showCaution, setShowCaution] = useState(false);
  const [allow, setAllow] = useState(false);
  const params = useParams();
  const { buttons, description } = getSuggestionVision(language);
  const { suggested_scenarions_caution } = getCaution(language);

  const suggestion = suggestions.find(({ id }) => `${id}` === params.id);

  const getCharacters = useMemo(() => {
    const charIdList = suggestion?.characters;
    const charIdSet: number[] = [];
    new Set(charIdList).forEach((char) => charIdSet.push(char));
    const charactersInScenario = charIdSet?.map((charID) => ({
      ...mapCharIdToCharacter(charID, language),
      count: (charIdList as number[]).filter((id) => id === charID).length,
    }));
    setCharacters(charactersInScenario as CharType[])
    dispatch(setCharactersStore(suggestion?.characters || []));
  }, [language, suggestion?.characters, dispatch]);

  const handleStartScenario = () => {
    const playersCount = `${suggestion?.characters.length}`;
    dispatch(setCountOfPlayers(playersCount));
    dispatch(
      updateRoleDictionary(names, (suggestion as SuggestionType).characters)
    );
  };

  useEffect(() => {
    const playersCount = suggestion?.characters.length || 0;
    if (names.length > playersCount && show2) {
      const newNames = names.slice(0, playersCount);
      dispatch(setPlayersNames(newNames));
      dispatch(createDataDictionary(newNames));
      dispatch(createRoleDictionary(newNames));
    }
    return getCharacters;
  }, [
    language,
    getCharacters,
    dispatch,
    names,
    suggestion?.characters.length,
    show2,
  ]);

  return (
    <>
      {
        suggestion ? (
          <div className={styles.container}>
            <div className={styles.headerContainer}>
              <h1>
                {language === "persian"
                  ? suggestion.fa_title
                  : suggestion.en_title}
              </h1>
              <p>{description}</p>
            </div>
            <div className={styles.statContainer}>
              <Statistics statistics={sidesCountByCharID(suggestion.characters)} />
            </div>
            <button
              onClick={() => setShowCaution(true)}
              className={styles.nameEnterBtn}
            >
              {buttons.start}
            </button>
            <button
              onClick={() => setShow(true)}
              className={styles.showCharSetBtn}
            >
              <Icon icon="question-circle" />
            </button>
            <ModalContainer
              language={language}
              scenarioName={language === "persian" ? "سناریو" : "Scenario"}
              type="showScenario"
              allowGameStart={allow}
              show={show}
              backHandler={() => {
                if (allow) {
                  setShow(false);
                  setAllow(false);
                  setShow2(true);
                }
              }}
              closeHandler={() => {
                setAllow(false);
                setShow(false);
              }}
              startHandler={handleStartScenario}
              charactersSet={characters}
            />
            <ModalContainer
              language={language}
              type="scenarioNameEnter"
              closeHandler={() => setShow2(false)}
              gotoSeeCharacters={() => {
                setShow2(false);
                setAllow(true);
                setShow(true);
              }}
              show={show2}
              countOfPlayers={suggestion.characters.length}
            />
            
            <ModalContainer
              language={language}
              type="caution"
              caution_message={suggested_scenarions_caution}
              show={showCaution}
              closeHandler={() => setShowCaution(false)}
              startHandler={() => {
                setShow2(true);
                setShowCaution(false);
              }}
            />
          </div>
        ) : (
          <NotFound />
        ) // TODO: define a NOT-FOUND page
      }
    </>
  );
};

export default SuggestionVision;
