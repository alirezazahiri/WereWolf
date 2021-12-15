import React, { useEffect, useMemo, useState } from 'react';
import { CharType } from '../../redux/types';
import { useParams } from "react-router-dom"
import suggestions, { SuggestionType } from '../SuggestedScenarios/utils';
import mapCharIdToCharacter from '../../services/mapCharIdToCharacter';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import ModalContainer from '../Modal';
import styles from './SuggestionVision.module.css';
import Icon from '../Icon';
import { getSuggestionVision } from '../../services/getPageData';
import { setCountOfPlayers } from '../../redux/players/playersActions';
import { updateRoleDictionary } from '../../redux/playersData/playersDataActions';

const SuggestionVision = () => {
    const [characters, setCharacters] = useState<CharType[]>([])
    const { language, names } = useSelector((state: AppState) => ({ ...state.languageState, ...state.playersState }))
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [allow, setAllow] = useState(false)
    const params = useParams()
    const {
        buttons,
        title,
        description,
    } = getSuggestionVision(language)

    const suggestion = suggestions.find(({ id }) => `${id}` === params.id)

    const getCharacters = useMemo(() => {
        const charIdList = suggestion?.characters
        const charIdSet: number[] = []
        new Set(charIdList).forEach(char => charIdSet.push(char))
        const charactersInScenario = charIdSet?.map(charID => ({
            ...mapCharIdToCharacter(charID, language),
            count: (charIdList as number[]).filter(id => id === charID).length
        }))
        setCharacters(charactersInScenario as CharType[])
    }, [language, suggestion?.characters])

    const handleStartScenario = () => {
        const playersCount = `${suggestion?.characters.length}`
        dispatch(setCountOfPlayers(playersCount))
        dispatch(updateRoleDictionary(names, (suggestion as SuggestionType).characters))
    }

    useEffect(() => {
        return getCharacters
    }, [language, getCharacters])


    return (
        <>
            {
                suggestion ?
                    <div className={styles.container}>
                        <div className={styles.headerContainer}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                        <button
                            onClick={() => setShow2(true)}
                            className={styles.nameEnterBtn} >
                            {buttons.start}
                        </button>
                        <button
                            onClick={() => setShow(true)}
                            className={styles.showCharSetBtn}>
                            <Icon icon="question-circle" />
                        </button>
                        <ModalContainer
                            language={language}
                            scenarioName={language === "persian" ?
                                suggestion.fa_title : suggestion.en_title
                            }
                            type="showScenario"
                            allowGameStart={allow}
                            show={show}
                            backHandler={() => {
                                if (allow) {
                                    setShow(false)
                                    setAllow(false)
                                    setShow2(true)
                                }
                            }}
                            closeHandler={() => {
                                setAllow(false)
                                setShow(false)
                            }}
                            startHandler={handleStartScenario}
                            charactersSet={characters}
                        />
                        <ModalContainer
                            language={language}
                            type="scenarioNameEnter"
                            closeHandler={() => setShow2(false)}
                            gotoSeeCharacters={() => {
                                setShow2(false)
                                setAllow(true)
                                setShow(true)
                            }}
                            show={show2}
                            countOfPlayers={suggestion.characters.length}

                        />
                    </div> :
                    "" /* TODO: define a NOT-FOUND page */
            }
        </>
    );
};

export default SuggestionVision;