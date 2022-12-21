import "./TopBar.scss";
import { BsMoon, BsSearch } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
// import defaultUserAvatar from "../../assets/images/user_avatar.jpg";
import { RiAccountCircleLine } from "react-icons/ri";
const TopBar = (props) => {
  return (
    <header className="top-bar">
      <div className="top-bar__content">
        <div className="top-bar__align_left">
          <div className="top-bar__navigate">
            <IoIosArrowBack className="top-bar__navigate__back" size={25} />
            <IoIosArrowForward
              className="top-bar__navigate__forward"
              size={25}
            />
          </div>
          <div className="top-bar__search-box">
            <input type="text" />
            <BsSearch className="top-bar__search-box__icon" />
          </div>
        </div>
        <div className="top-bar__setting">
          <div className="top-bar__setting__wrapper">
            <BsMoon className="top-bar__setting__wrapper__icon" />
          </div>
          <div className="top-bar__setting__wrapper">
            <CiSettings className="top-bar__setting__wrapper__icon" />
          </div>
          <div className="top-bar__setting__wrapper">
            <RiAccountCircleLine className="top-bar__setting__wrapper__icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
