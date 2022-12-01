import React from "react";
import "./Menu.scss";
import {FaHome} from "react-icons/fa"
import {GiMicrophone} from "react-icons/gi"
const Menu = () => {
  
    return (
        <aside className="menu">
        
            <h1 className="menu__title">Zyan</h1>
            <div className="menu__list">
                <a href="home"><FaHome/> Trang chủ</a>
                <a href="discover"> <GiMicrophone/> Khám phá</a>
      
            </div>
        </aside>
    );
};

export default Menu;
