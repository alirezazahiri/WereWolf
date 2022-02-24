import { FC } from "react";

// react-redux
import { useSelector } from "react-redux";

// router
import { NavLink, Link } from "react-router-dom";

// UI Components
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// redux
import { AppState } from "../../redux/store";

// styles
import styles from "./Navbar.module.css";

// components
import LanguageChanger from "./LanguageChanger";

// services
import { getNavbar } from "../../services/getPageData";
import { getNavLinks } from "./utils";

const NavBar: FC = () => {
  const { language } = useSelector((state: AppState) => state.languageState);
  const { title, ...rest } = getNavbar(language);
  const navLinks = getNavLinks({...rest});
  
  return (
    <Navbar
      className={styles.container}
      variant="dark"
      expand="lg"
      sticky="top"
    >
      <Container className={styles.content}>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.hamburger}
        />
        <LanguageChanger className={styles.flag} />
        <div>
          <Link to="/" className={styles.title}>
            {title}
          </Link>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.linksContainer}>
            {navLinks.map((navLink) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                key={navLink.to}
                to={navLink.to}
              >
                {navLink.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
