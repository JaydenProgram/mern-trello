import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div>
            <nav className={css.nav}>
                <NavLink to="/">
                    <img alt="MongoDB logo" className={css.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/2560px-Trello_logo.svg.png"></img>
                </NavLink>

                <div>
                    <input type="text"/>
                    <NavLink className={css.navLink} to="/create">
                        Create Employee
                    </NavLink>
                </div>

                <NavLink to="/">

                </NavLink>

            </nav>
        </div>
    );
}