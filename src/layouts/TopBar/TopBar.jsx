import "./TopBar.scss";
import { BsMoon, BsSearch } from "react-icons/bs";

import { CiSettings } from "react-icons/ci";
// import defaultUserAvatar from "../../assets/images/user_avatar.jpg";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const TopBar = (props) => {
  function showMenu() {
    document.getElementById("main-menu").style.left = 0;
    document.body.style.overflow = "hidden";
  }
  function openLogin() {
    document.getElementById("login-form").style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  const [mobile_input, set_mobile_input] = useState(false);

  return (
    <header className="top-bar">
      <div className="top-bar__content">
        <div className="top-bar__mobile-menu">
          <button onClick={showMenu}>
            <FiMenu className="top-bar__mobile-menu__icon" />
          </button>
        </div>
        <div className="top-bar__align_left">
          <div
            className={
              mobile_input
                ? "top-bar__search-box mobile-search-input"
                : "top-bar__search-box"
            }
          >
            <input
              type="text"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, album,..."
            />
            <button className="no-bg">
              <BsSearch className="top-bar__search-box__icon" />
            </button>
          </div>
        </div>
        <div className="top-bar__setting">
          <div className="top-bar__setting__wrapper  hide-search-btn">
            <button
              className="no-bg"
              onClick={() => set_mobile_input(!mobile_input)}
            >
              {mobile_input ? (
                <AiOutlineClose className="top-bar__setting__wrapper__icon" />
              ) : (
                <BsSearch className="top-bar__setting__wrapper__icon" />
              )}
            </button>
          </div>
          <div className="top-bar__setting__wrapper hiding-icon">
            <BsMoon className="top-bar__setting__wrapper__icon " />
          </div>
          <div className="top-bar__setting__wrapper hiding-icon">
            <CiSettings className="top-bar__setting__wrapper__icon " />
          </div>
          <div className="top-bar__setting__wrapper">
            <button className="no-bg" onClick={openLogin}>
              <RiAccountCircleLine className="top-bar__setting__wrapper__icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
