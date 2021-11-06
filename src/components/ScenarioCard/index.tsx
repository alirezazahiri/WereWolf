import React, { FC } from 'react';
import { CharType } from '../../redux/types';
import getColor from '../../services/getColor';
import styles from "./ScenarioCard.module.css"

type Props = {
    character: CharType
}

const ScenarioCard: FC<Props> = ({ character }) => {
    const { title, description, html, type, icon } = character;
    const color = getColor(type);

    return (
        <div
            className={styles.container}
            style={{ border: `1px solid ${color}`, boxShadow: `0 0 12px ${color}` }}
        >
            <div>
                <div>
                    <i
                        style={{ color: color }}
                        className={icon + " fa-2x"}
                        aria-hidden="true"
                    ></i>
                </div>
                <h1 style={{ color: color }}>{title}</h1>
            </div>
            <div>
                <p>{description}</p>
                {html && <div dangerouslySetInnerHTML={{ __html: html }} className={styles.htmlContainer}></div>}
            </div>
        </div>
    );
};

export default ScenarioCard;