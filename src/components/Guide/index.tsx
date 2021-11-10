import React, { useReducer } from "react"

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

const initialState = {
    navbar: true,
    startGame: false,
    gameSetup: false,
    players: false,
    godVision: false,
    scenarios: false,
}

const reducer = (state = initialState, action: string) => {
    switch (action) {
        case "NAVBAR":
            return { ...initialState, navbar: true }
        case "START_GAME":
            return { ...initialState, navbar: false, startGame: true }
        case "GAME_SETUP":
            return { ...initialState, navbar: false, gameSetup: true }
        case "PLAYERS":
            return { ...initialState, navbar: false, players: true }
        case "GOD_VISION":
            return { ...initialState, navbar: false, godVision: true }
        case "SCENARIOS":
            return { ...initialState, navbar: false, scenarios: true }
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
        scenariosGuide
    } = getGuide(language)

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
            {filter.scenarios && <ScenariosGuide {...scenariosGuide} />}
        </div>
    )
}

export default Guide 