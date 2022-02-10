import React, { FC } from 'react';

// react-redux 
import { useDispatch, useSelector } from 'react-redux';

// services 
import { shorten } from '../../services/shorten';
import getColor from '../../services/getColor';

// state type 
import { AppState } from '../../redux/store';

// redux actions 
import { changeDataDictionary } from '../../redux/playersData/playersDataActions';

// components 
import Icon from '../Icon';

// styles 
import styles from "./ManagePlayerCard.module.css"
import { Link } from 'react-router-dom';

type Props = {
    player: string,
    icon?: string,
    role?: string | number,
    type?: string | number
}

const ManagePlayerCard: FC<Props> = ({ player, icon, role, type }) => {
    const color = getColor(`${type}`)
    const dispatch = useDispatch()
    const { dataDictionary } = useSelector((state: AppState) => state.playersDataState)

    const changeHandler = (e: any) => {
        dispatch(changeDataDictionary(player, { ...dataDictionary[player], text: e.target.value }))
    }

    const clearText = () => {
        dispatch(changeDataDictionary(player, { ...dataDictionary[player], text: "" }))
    }

    return (
        <div
            className={styles.container}
            style={{
                border: `1px solid ${color}`,
                boxShadow: `0 0 12px ${color}`,
            }}
        >
            <div className={styles.hedearContainer} style={{ color: color }}>
                <Link to={`/god-vision/${player}`} style={{ color: color }}>{shorten(player)}</Link>
                <Link to={`/god-vision/${player}`} style={{ color: color }}>
                    <Icon icon={icon} />
                </Link>
                <Link to={`/god-vision/${player}`} style={{ color: color }}>{role}</Link>
            </div>
            <div className={styles.playerStatusContainer}>
                <textarea
                    value={dataDictionary[player]?.text}
                    onChange={changeHandler}
                    style={{ color: color, border: `1px solid ${color}` }}
                />
                <button onClick={clearText}>
                    <Icon icon="minus-circle fa-lg" />
                </button>
            </div>
        </div>
    );
};

export default ManagePlayerCard;