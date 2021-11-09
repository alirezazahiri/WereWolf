import React, { FC } from 'react';
import LanguageChanger from '../Navbar/LanguageChanger';

// styles 
import styles from "./NavbarGuide.module.css"

type Props = {
    title: string,
    description: string,
    flag: string,
    flag_description: string
}

const NavbarGuide: FC<Props> = ({ title, description, flag, flag_description }) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={styles.featureContainer}>
                <h1>{flag}</h1>
                <LanguageChanger className={styles.flag} />
                <p>{flag_description}</p>
            </div>
        </div>
    );
};

export default NavbarGuide;