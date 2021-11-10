import React from "react"

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

const Guide = () => {
    const { language } = useSelector((state: AppState) => state.languageState)
    const { title, navbar, startGame, gameSetup } = getGuide(language)
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1>{title}</h1>
            </div>
            <NavbarGuide {...navbar} />
            <StartGameGuide {...startGame} />
            <GameSetupGuide {...gameSetup} />
        </div>
    )
}

export default Guide 