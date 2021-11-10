import React, { FC } from 'react';

// types 
import { GameSetupObj } from '../../translations/Guide/types';

// GuideContainer
import GuideContainer from './GuideContainer';

// styles 
import styles from "./GameSetupGuide.module.css"

const GameSetupGuide: FC<GameSetupObj> = ({ title, description, nameEnterImg, charSelectImg, nameEnterDescription, charSelectDescription }) => {
    return (
        <GuideContainer>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={`${styles.featureContainer} ${styles.enhance}`}>
                <img src={nameEnterImg} alt="Name Enter Section" />
                <p>{nameEnterDescription}</p>
            </div>
            <div className={styles.featureContainer}>
                <img src={charSelectImg} alt="Character Select Section" />
                <p>{charSelectDescription}</p>
            </div>
        </GuideContainer>
    );
};

export default GameSetupGuide;