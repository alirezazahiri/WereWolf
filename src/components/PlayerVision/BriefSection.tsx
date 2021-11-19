import React, { FC } from 'react';

import styles from "./BriefSection.module.css"

type Props = {
    color: string | undefined,
    language: string,
    playerBrief: { role: string, type: string },
    charTitle: string,
    charSquad: string
}

const BriefSection: FC<Props> = ({ color, language, playerBrief, charTitle, charSquad }) => {
    return (
        <div
            className={styles.playerBrief}
            style={{
                border: `1px solid ${color}`,
                flexDirection: `${language === "persian" ? "row-reverse" : "row"}`
            }}
        >
            <div
                style={{
                    borderBottom: `1px solid ${color}`,
                    flexDirection: `${language === "persian" ? "row-reverse" : "row"}`
                }}
            >
                <h2 className={styles.infoTitle}>{playerBrief.role}</h2>
                <h2 style={{ color }}>{charTitle}</h2>
            </div>
            <div
                style={{
                    flexDirection: `${language === "persian" ? "row-reverse" : "row"}`
                }}
            >
                <h2>{playerBrief.type}</h2>
                <h2>{charSquad}</h2>
            </div>
        </div>
    );
};

export default BriefSection;