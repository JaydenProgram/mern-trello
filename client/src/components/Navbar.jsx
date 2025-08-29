import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div>
            <nav className={css.nav}>
                <NavLink to="/">
                    <img alt="MongoDB logo" className={css.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/2560px-Trello_logo.svg.png"></img>
                </NavLink>

                <div className={css.search}>
                    <input className={css.navLinkSearch} type="text" placeholder="Search"/>
                    <NavLink className={css.navLinkButton} to="/create">
                        CREATE
                    </NavLink>
                </div>

                <div>
                    <img src="../assets/hamburgerMenu.svg" alt=""/>
                </div>
            </nav>
        </div>
    );
}