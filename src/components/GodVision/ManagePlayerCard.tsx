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
        dispatch(changeDataDictionary(player, e.target.value))
    }

    const clearText = () => {
        dispatch(changeDataDictionary(player, ""))
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
                <h2>{shorten(player)}</h2>
                <Icon icon={icon} />
                <h2>{role}</h2>
            </div>
            <div className={styles.playerStatusContainer}>
                <textarea
                    value={dataDictionary[player]}
                    onChange={changeHandler}
                    style={{ color: color }}
                />
                <button onClick={clearText}>
                    <Icon icon="minus-circle fa-lg" />
                </button>
            </div>
        </div>
    );
};

export default ManagePlayerCard;