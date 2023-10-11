import  { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { getPlayerVision } from '../../services/getPageData';
import styles from "./StatFilter.module.css"

type Props = {
    setStatFilter: any,
    statFilter: string
}

const StatFilter: FC<Props> = ({ setStatFilter, statFilter }) => {

    const clickHandler = (e: any) => {
        setStatFilter(e.target.id)
    }
    const { language } = useSelector((state: AppState) => state.languageState)
    const { stats } = getPlayerVision(language)

    return (
        <div className={styles.container}>
            <button className={`${statFilter === "silent" && styles.active}`} id="silent" onClick={clickHandler}>{stats.mute}</button>
            <button className={`${statFilter === "speaker" && styles.active}`} id="speaker" onClick={clickHandler}>{stats.unmute}</button>
            <button className={`${statFilter === "all" && styles.active}`} id="all" onClick={clickHandler}>{stats.all}</button>
            <button className={`${statFilter === "dead" && styles.active}`} id="dead" onClick={clickHandler}>{stats.dead}</button>
            <button className={`${statFilter === "alive" && styles.active}`} id="alive" onClick={clickHandler}>{stats.alive}</button>
        </div>
    );
};

export default StatFilter;