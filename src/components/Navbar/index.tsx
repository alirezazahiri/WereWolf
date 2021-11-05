import { FC } from "react"

// react-redux
import { useDispatch, useSelector } from "react-redux"

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
    const dispatch = useDispatch()
    const { language } = useSelector((state: AppState) => state.languageState)
    const {
        title,
        senarios,
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
                <LanguageChanger className={styles.flag} dispatch={dispatch} language={language} />
                <div>
                    <Link to="/" className={styles.title}>
                        {title}
                    </Link>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.linksContainer}>
                        <NavLink to="/game-setup">{game_setup}</NavLink>
                        <NavLink to="/players-roles">{players}</NavLink>
                        <NavLink to="/god-vision">{gods_room}</NavLink>
                        <NavLink to="/scenarios">{senarios}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;