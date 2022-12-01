import "./TopBar.scss";
import { BsSearch } from "react-icons/bs";

const TopBar = () => {
  return (
    <header className="top-bar">
      <p>Top Bar</p>
      <div className="top-bar__search-box">
        <BsSearch className="top-bar__search-box__icon" />
      </div>
    </header>
  );
};

export default TopBar;
