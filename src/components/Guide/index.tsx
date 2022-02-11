import React, { useEffect, useReducer } from "react"

// react-redux 
import { useSelector } from "react-redux"

// state type 
import { AppState } from "../../redux/store"

// services 
import { getGuide } from "../../services/getPageData"

// components
import StartGameGuide from "./StartGameGuide"
import GameSetupGuide from "./GameSetupGuide"
import NavbarGuide from "./NavbarGuide"

// styles 
import styles from "./Guide.module.css"
import PlayersGuide from "./PlayersGuide"
import GodVisionGuide from "./GodVisionGuide"
import ScenariosGuide from "./ScenariosGuide"
import GuideFilters from "./GuideFilters"
import SuggestedScenariosGuide from "./SuggestedScenariosGuide"

const initialState = {
    navbar: false,
    startGame: false,
    gameSetup: false,
    players: false,
    godVision: false,
    suggestedScenarios: false,
    scenarios: false,
}

const reducer = (state = initialState, action: string) => {
    switch (action) {
        case "NAVBAR":
            return { ...initialState, navbar: true }
        case "START_GAME":
            return { ...initialState, startGame: true }
        case "GAME_SETUP":
            return { ...initialState, gameSetup: true }
        case "PLAYERS":
            return { ...initialState, players: true }
        case "GOD_VISION":
            return { ...initialState, godVision: true }
        case "SUGGESTED_SCENARIOS":
            return { ...initialState, suggestedScenarios: true }
        case "SCENARIOS":
            return { ...initialState, scenarios: true }
        default: return state
    }
}

const Guide = () => {
    const { language } = useSelector((state: AppState) => state.languageState)
    const [filter, dispatch] = useReducer(reducer, initialState)
    const {
        title,
        navbar,
        startGameGuide,
        gameSetupGuide,
        playersGuide,
        godVisionGuide,
        scenariosGuide,
        suggestedScenarios
    } = getGuide(language)

    useEffect(() => {
        dispatch("NAVBAR")
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1>{title}</h1>
            </div>
            <GuideFilters dispatch={dispatch} language={language} filter={filter}/>
            {filter.navbar && <NavbarGuide {...navbar} />}
            {filter.startGame && <StartGameGuide {...startGameGuide} />}
            {filter.gameSetup && <GameSetupGuide {...gameSetupGuide} />}
            {filter.players && <PlayersGuide {...playersGuide} />}
            {filter.godVision && <GodVisionGuide {...godVisionGuide} />}
            {filter.suggestedScenarios && <SuggestedScenariosGuide {...suggestedScenarios} />}
            {filter.scenarios && <ScenariosGuide {...scenariosGuide} />}
        </div>
    )
}

export default Guide 