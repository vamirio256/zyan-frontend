import React from "react";
import { ThemeContext } from "../../App";
import "./Menu.scss";
const Menu = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <aside className="menu">
                    <h1 className="menu__title">Zyan</h1>
                    <h2 className="test">test</h2>
                </aside>
            )}
        </ThemeContext.Consumer>
    );
};

export default Menu;
