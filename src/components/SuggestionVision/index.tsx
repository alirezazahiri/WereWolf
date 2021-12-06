import React, { useEffect, useMemo, useState } from 'react';
import { CharType } from '../../redux/types';
import { useParams } from "react-router-dom"
import suggestions from '../SuggestedScenarios/utils';
import mapCharIdToCharacter from '../../services/mapCharIdToCharacter';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import ModalContainer from '../Modal';
import styles from './SuggestionVision.module.css';
import Icon from '../Icon';

const SuggestionVision = () => {
    const { id } = useParams();
    const [characters, setCharacters] = useState<CharType[]>([])
    const { language } = useSelector((state: AppState) => state.languageState)
    const [show, setShow] = useState(false)
    const params = useParams()

    const getCharacters = useMemo(() => {
        if (characters?.length === 0) {
            const charIdList = suggestions.find(suggestion => `${suggestion.id}` === id)?.characters
            const charactersInScenario = charIdList?.map(charID => mapCharIdToCharacter(charID, language))
            setCharacters(charactersInScenario as CharType[])
        } else
            return
    }, [characters, id, language])

    useEffect(() => {
        return getCharacters
    }, [getCharacters])

    const suggestion = suggestions.find(({ id }) => `${id}` === params.id)

    return (
        <>
            {
                suggestion ?
                    <div>
                        <h1>Comming Soon...</h1>
                        <button onClick={() => setShow(true)} className={styles.showCharSetBtn}><Icon icon="question-circle" /></button>
                        <ModalContainer
                            language={language}
                            scenarioName={language === "persian" ?
                                suggestion.fa_title : suggestion.en_title
                            }
                            type="showScenario"
                            show={show}
                            closeHandler={() => setShow(false)}
                            charactersSet={characters}
                        />
                    </div> :
                    "" /* TODO: define a NOT-FOUND page */
            }
        </>
    );
};

export default SuggestionVision;