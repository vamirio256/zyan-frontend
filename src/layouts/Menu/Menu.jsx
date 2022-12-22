import React from "react";
import MenuButton from "../../components/MenuButton/MenuButton";
import "./Menu.scss";
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineDownload,
  AiOutlinePlus,
  AiOutlineClose,
} from "react-icons/ai";
import { HiOutlineMicrophone, HiMicrophone } from "react-icons/hi";
import { RiAlbumFill, RiAlbumLine } from "react-icons/ri";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { data } from "../../contexts/dummy_data";
import { useEffect } from "react";

const Menu = () => {
  let path = useLocation().pathname;
  if (path === "/") {
    path = "/home";
  }
  const [menuId, setMenuId] = useState(path);
  useEffect(() => {
    closeMenu();
    return;
  }, [menuId]);

  function closeMenu() {
    document.getElementById("main-menu").style.left = "-300px";
    document.body.style.overflow = "auto";
  }
  return (
    <aside className="menu" id="main-menu">
      <h1 className="menu__title">Zyan</h1>
      <button className="menu__close-btn" onClick={closeMenu}>
        <AiOutlineClose />
      </button>
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
        <div className="submenu_title">Library</div>
        {/* library */}
        <MenuButton
          id={menuId}
          href="/favorite"
          defaultIcon={<AiOutlineHeart />}
          selectedIcon={<AiFillHeart />}
          title="Yêu thích"
          parentSetState={setMenuId}
        />
        <MenuButton
          id={menuId}
          href="/album"
          defaultIcon={<RiAlbumLine />}
          selectedIcon={<RiAlbumFill />}
          title="Album"
          parentSetState={setMenuId}
        />
        <MenuButton
          id={menuId}
          href="/download"
          defaultIcon={<AiOutlineDownload />}
          selectedIcon={<AiOutlineDownload color="white" />}
          title="Tải xuống"
          parentSetState={setMenuId}
        />
        <MenuButton
          id={menuId}
          href="/follow"
          defaultIcon={<BsPerson />}
          selectedIcon={<BsPersonFill />}
          title="Theo dõi"
          parentSetState={setMenuId}
        />
        <div className="submenu_title">PlayList</div>
        {/* playlist */}
      </div>
      <button className="menu__playlist">
        <AiOutlinePlus className="svg_icon" /> Thêm
      </button>
      <div className="menu__list">
        {data.map((playlistItem) => {
          return (
            <MenuButton
              id={menuId}
              href={"/playlist?id=" + playlistItem.id}
              title={playlistItem.title}
              parentSetState={setMenuId}
              image={playlistItem.images}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Menu;
