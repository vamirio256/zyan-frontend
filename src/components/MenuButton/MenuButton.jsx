import { memo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuButton.scss";

const MenuButton = (props) => {
  return (
    <div>
      <Link
        to={props.href}
        className={props.id === props.href ? "active" : ""}
        onClick={() => props.parentSetState(props.href)}
      >
        {props.id === props.href ? props.selectedIcon : props.defaultIcon}
        {props.title}
      </Link>
    </div>
  );
};

export default memo(MenuButton);
