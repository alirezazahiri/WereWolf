import React from 'react';
import { /*useDispatch, */ useSelector } from 'react-redux';
// import { setCountOfPlayers } from '../../redux/players/playersActions';
import { AppState } from '../../redux/store';
import SuggestButton from './SuggestButton';

// utils 
import suggestions from './utils';


const SuggestedScenarios = () => {
    const { language } = useSelector((state: AppState) => state.languageState)
    // const dispatch = useDispatch()

    // const getStartedWithScenario = (characters: number[]) => {
    //     /* 
    //      * fetch number of players
    //      * open NameEnterModal (with unique status)
    //      * if names count is equal to playersCount
    //      */

    //     const playersCount = characters.length
    //     dispatch(setCountOfPlayers(`${playersCount}`))
    //     /* TODO: MOVE THIS TO A RELATED COMPONENT! */
    // }

    return (
        <div>
            {suggestions.map(({
                id,
                en_title,
                fa_title
            }) => <SuggestButton
                    key={id}
                    id={id}
                    title={language === "persian" ? fa_title : en_title}
                />)}
        </div>
    );
};

export default SuggestedScenarios;