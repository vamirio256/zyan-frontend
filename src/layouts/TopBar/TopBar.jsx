import "./TopBar.scss";
import { BsMoon, BsSearch } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import defaultUserAvatar from "../../assets/images/user_avatar.jpg";

const TopBar = (props) => {
  return (
    <header className="top-bar">
      <div className="top-bar__navigate">
        <IoIosArrowBack className="top-bar__navigate__back" />
        <IoIosArrowForward className="top-bar__navigate__forward" />
      </div>
      <div className="top-bar__search-box">
        <BsSearch className="top-bar__search-box__icon" />
      </div>
      <div className="top-bar__setting">
        <div className="top-bar__setting__wrapper">
          <BsMoon className="top-bar__setting__wrapper__icon"/>
        </div>
        <div className="top-bar__setting__wrapper">
          <CiSettings className="top-bar__setting__wrapper__icon"/>
        </div>
        <img
          src={props.avatar || defaultUserAvatar}
          alt="User image profile"
          className="top-bar__setting__avatar"
        />
      </div>
    </header>
  );
};

export default TopBar;
