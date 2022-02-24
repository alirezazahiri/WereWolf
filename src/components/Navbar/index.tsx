import { FC } from "react"

// react-redux
import { useSelector } from "react-redux"

// router
import { NavLink, Link } from "react-router-dom";

// UI Components 
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// redux 
import { AppState } from "../../redux/store";

// styles 
import styles from "./Navbar.module.css"

// components 
import LanguageChanger from "./LanguageChanger";

// services
import { getNavbar } from '../../services/getPageData';

const NavBar: FC = () => {
    const { language } = useSelector((state: AppState) => state.languageState)
    const {
        title,
        guide,
        senarios,
        suggested_scenarios,
        players,
        gods_room,
        game_setup } = getNavbar(language)

    return (
        <Navbar
            className={styles.container}
            variant="dark"
            expand="lg"
            sticky="top"
        >
            <Container className={styles.content}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.hamburger} />
                <LanguageChanger className={styles.flag}/>
                <div>
                    <Link to="/" className={styles.title}>
                        {title}
                    </Link>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.linksContainer}>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/game-setup">{game_setup}</NavLink>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/players-roles">{players}</NavLink>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/god-vision">{gods_room}</NavLink>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/suggested-scenarios">{suggested_scenarios}</NavLink>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/scenarios">{senarios}</NavLink>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to="/guide">{guide}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;