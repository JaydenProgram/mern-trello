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

                <div className={css.accountHamburger}>
                    <p>USER</p>
                    <div className={css.accountCircle}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6YvRump6DC1zR3Bu5fz9358Gcgviuu5nag&s" alt=""/>
                    </div>

                    <svg width="37" height="27" viewBox="0 0 37 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.875 25.375H35.125M1.875 13.5H35.125M1.875 1.625H35.125" stroke="black"
                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </nav>
        </div>
    );
}