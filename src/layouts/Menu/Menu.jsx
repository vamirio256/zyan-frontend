import React from "react";
import "./Menu.scss";
const Menu = () => {
    return (
        <aside className="menu">
            <h1 className="menu__title">Zyan</h1>
            <div className="menu__list">
                <a href="home">Trang chủ</a>
                <a href="favorite">Yêu thích</a>
                <a href="follow">Theo dõi</a>
            </div>
        </aside>
    );
};

export default Menu;
