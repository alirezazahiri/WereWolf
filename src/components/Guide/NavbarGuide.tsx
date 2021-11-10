import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// styles 
import styles from "./NavbarGuide.module.css"

// components
import GuideContainer from './GuideContainer'
import LanguageChanger from '../Navbar/LanguageChanger';

// types 
import { NavObj } from '../../translations/Guide/types';

const NavbarGuide: FC<NavObj> = ({ title, description, flag, flag_description, logo_description, nav_brand }) => {
    return (
        <GuideContainer>
            <div className={styles.titleContainer}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={styles.featureContainer}>
                <h1>{flag}</h1>
                <LanguageChanger className={styles.flag} />
                <p>{flag_description}</p>
            </div>
            <div>
                <Link className={styles.title} to="/">{nav_brand}</Link>
                <p>{logo_description}</p>
            </div>
        </GuideContainer>
    );
};

export default NavbarGuide;