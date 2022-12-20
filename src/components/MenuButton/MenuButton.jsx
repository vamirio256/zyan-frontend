import { memo } from "react";
import { Link } from "react-router-dom";
import "./MenuButton.scss";

const MenuButton = (props) => {
  function renderImage() {
    if (!props.image) {
      if (props.id === props.href) {
        return props.selectedIcon;
      }
      return props.defaultIcon;
    }
    return <img src={props.image} alt="" className="playlist__image" />;
  }

  return (
    <div>
      <Link
        to={props.href}
        className={props.id === props.href ? "active" : ""}
        onClick={() => props.parentSetState(props.href)}
      >
        {renderImage()}
        <div className="text">{props.title}</div>
      </Link>
    </div>
  );
};

export default memo(MenuButton);
