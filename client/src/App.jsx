import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import css from "./App.module.css";

const App = () => {
    return (
        <div className={css.widthPadding}>
            <Navbar />
            <Outlet />
        </div>
    );
};
export default App
