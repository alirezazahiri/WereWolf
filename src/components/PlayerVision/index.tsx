import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppState } from '../../redux/store';
import styles from "./PlayerVision.module.css"
import getChars from "../../services/getPageData"
import { changeDataDictionary } from '../../redux/playersData/playersDataActions';
import getColor from '../../services/getColor';
import { getPlayerVision } from '../../services/getPageData';
import Icon from '../Icon';

type SquadType = "mafia" | "citizen" | "independent" | "mid-independent"

const PlayerVision = () => {
    const { playerName } = useParams()
    const dispatch = useDispatch()
    const { roleDictionary, dataDictionary, language } = useSelector((state: AppState) => ({
        ...state.playersDataState,
        ...state.languageState
    }))

    const { playerBrief, squads } = getPlayerVision(language)

    const player = playerName as string
    const PLAYER_ROLE_ID = roleDictionary[player] as number
    const PLAYER_CHARACTER = getChars(language).characters[PLAYER_ROLE_ID - 1]
    const COLOR = getColor(PLAYER_CHARACTER.type)
    
    const changeHandler = (e: any) => {
        dispatch(changeDataDictionary(player, { ...dataDictionary[player], text: e.target.value }))
    }

    const clearText = () => {
        dispatch(changeDataDictionary(player, { ...dataDictionary[player], text: "" }))
    }

    return (
        <div className={styles.container} style={{ color: COLOR }}>
            <div className={styles.headerContainer}>
                <h1>{playerName}</h1>
                <Link to="/god-vision"><Icon icon="arrow-left" /></Link>
            </div>
            <div className={styles.playerBrief}>
                <div style={{borderBottom: `1px solid ${COLOR}`}}>
                    <h2>{playerBrief.role}</h2>
                    <h2>{PLAYER_CHARACTER.title}</h2>
                </div>
                <div>
                    <h2>{playerBrief.type}</h2>
                    <h2>{squads[PLAYER_CHARACTER.type as SquadType]}</h2>
                </div>
            </div>
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
        </div>
    );
};

export default PlayerVision;