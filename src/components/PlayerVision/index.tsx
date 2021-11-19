import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// react-router-dom 
import { Link, useParams, useNavigate } from 'react-router-dom';

// components
import Icon from '../Icon';

// styles 
import styles from "./PlayerVision.module.css"

// redux 
import { changeDataDictionary } from '../../redux/playersData/playersDataActions';
import { AppState } from '../../redux/store';

// services 
import { getPlayerVision } from '../../services/getPageData';
import getChars from "../../services/getPageData"
import getColor from '../../services/getColor';

// vendor components
import Switch from "react-switch"

type SquadType = "mafia" | "citizen" | "independent" | "mid-independent"

const PlayerVision = () => {
    const { playerName } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { roleDictionary, dataDictionary, language } = useSelector((state: AppState) => ({
        ...state.playersDataState,
        ...state.languageState
    }))


    const { playerBrief, squads, stats } = getPlayerVision(language)

    const player = playerName as string
    const PLAYER_ROLE_ID = roleDictionary[player] as number

    // return if player not valid 
    
    useEffect(() => {
        if (!PLAYER_ROLE_ID) {
            navigate("/god-vision")
        }
    })

    // stats 
    const { alive, unmute } = dataDictionary[player]

    const PLAYER_CHARACTER = getChars(language).characters[PLAYER_ROLE_ID - 1]
    const COLOR = getColor(PLAYER_CHARACTER.type)

    const changeHandler = (e: any) => {
        dispatch(changeDataDictionary(player, { ...dataDictionary[player], text: e.target.value }))
    }

    const clearText = () => {
        dispatch(changeDataDictionary(player, { ...dataDictionary[player], text: "" }))
    }

    const aliveChangeHandler = () => {
        const alive = dataDictionary[player].alive
        dispatch(changeDataDictionary(player, { ...dataDictionary[player], alive: !alive }))
    }

    const muteChangeHandler = () => {
        const unmute = dataDictionary[player].unmute
        dispatch(changeDataDictionary(player, { ...dataDictionary[player], unmute: !unmute }))
    }

    return (
        <div className={styles.container} style={{ color: COLOR }}>
            <div className={styles.headerContainer}>
                <h1>{playerName}</h1>
                <Link to="/god-vision"><Icon icon="arrow-left" /></Link>
            </div>
            {/* title */}
            <div
                className={styles.playerBrief}
                style={{
                    border: `1px solid ${COLOR}`,
                    flexDirection: `${language === "persian" ? "row-reverse" : "row"}`
                }}
            >
                <div
                    style={{
                        borderBottom: `1px solid ${COLOR}`,
                        flexDirection: `${language === "persian" ? "row-reverse" : "row"}`
                    }}
                >
                    <h2 className={styles.infoTitle}>{playerBrief.role}</h2>
                    <h2 style={{ color: COLOR }}>{PLAYER_CHARACTER.title}</h2>
                </div>
                <div
                    style={{
                        flexDirection: `${language === "persian" ? "row-reverse" : "row"}`
                    }}
                >
                    <h2 className={styles.infoTitle}>{playerBrief.type}</h2>
                    <h2>{squads[PLAYER_CHARACTER.type as SquadType]}</h2>
                </div>
            </div>
            {/* Text */}
            <div className={styles.playerTextContainer}>
                <textarea
                    value={dataDictionary[player].text}
                    onChange={changeHandler}
                    style={{ color: COLOR, border: `1px solid ${COLOR}` }}
                />
                <button onClick={clearText}>
                    <Icon icon="minus-circle fa-lg" />
                </button>
            </div>
            {/* stats */}
            {/* death stat */}
            <div
                className={styles.statsContainer}
                style={{
                    color: COLOR,
                    border: `1px solid ${COLOR}`
                }}
            >
                <label>
                    <Switch
                        onChange={aliveChangeHandler}
                        checked={alive}
                        offHandleColor='#800'
                        offColor='#DA0037'
                        onColor='#2ce071'
                    />
                </label>
                <h1
                    style={{ color: `${alive ? "#66DE93" : "#DA0037"}` }}
                >
                    {alive ? stats.alive : stats.dead}
                </h1>
            </div>
            {/* mute stat */}
            <div
                className={styles.statsContainer}
                style={{
                    color: COLOR,
                    border: `1px solid ${COLOR}`
                }}
            >
                <label>
                    <Switch
                        onChange={muteChangeHandler}
                        checked={unmute}
                        offHandleColor='#800'
                        offColor='#DA0037'
                        onColor='#2ce071'
                    />
                </label>
                <h1
                    style={{ color: `${unmute ? "#66DE93" : "#DA0037"}` }}
                >
                    {unmute ? stats.unmute : stats.mute}
                </h1>
            </div>
        </div>
    );
};

export default PlayerVision;