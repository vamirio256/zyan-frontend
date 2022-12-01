import React from "react";
import MenuButton from "../../components/MenuButton/MenuButton";
import "./Menu.scss";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { HiOutlineMicrophone, HiMicrophone } from "react-icons/hi";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const [menuId, setMenuId] = useState(useLocation().pathname);

  return (
    <aside className="menu">
      <h1 className="menu__title">Zyan</h1>
      <div className="menu__list">
        <MenuButton
          id={menuId}
          href="/home"
          defaultIcon={<AiOutlineHome />}
          selectedIcon={<AiFillHome />}
          title="Trang chủ"
          parentSetState={setMenuId}
        />
        <MenuButton
          id={menuId}
          href="/discover"
          defaultIcon={<HiOutlineMicrophone />}
          selectedIcon={<HiMicrophone />}
          title="Khám phá"
          parentSetState={setMenuId}
        />
      </div>
    </aside>
  );
};

export default Menu;
