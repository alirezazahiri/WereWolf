import React, { FC } from 'react';
import styles from "./GuideFilters.module.css"

const GuideFilters: FC<{ dispatch: any, language: string, filter: any }> = ({ dispatch, language, filter }) => {
    const items = [
        { name: language === "persian" ? "نوار ناوبری" : "Navbar", type: "NAVBAR", filterName: "navbar" },
        { name: language === "persian" ? "شروع بازی" : "Start Game", type: "START_GAME", filterName: "startGame" },
        { name: language === "persian" ? "آماده سازی بازی" : "Game Setup", type: "GAME_SETUP", filterName: "gameSetup" },
        { name: language === "persian" ? "بازیکنان" : "Players", type: "PLAYERS", filterName: "players" },
        { name: language === "persian" ? "اتاق گرداننده" : "God's Room", type: "GOD_VISION", filterName: "godVision" },
        { name: language === "persian" ? "سناریو ها" : "Scenarios", type: "SCENARIOS", filterName: "scenarios" }
    ]
    return (
        <div className={styles.filtersContainer}>
            {items.map(item => <button onClick={() => dispatch(item.type)} className={`${filter[item.filterName] ? styles.active : ""}`}>
                {item.name}
            </button>
            )}
        </div>
    );
};

export default GuideFilters;