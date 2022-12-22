import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import CardSetting from "../CardSetting/CardSetting";
import "./HorizontalCard.scss";

export default function HorizontalCard(props) {
  const [displaySettings, setDisplaySettings] = useState(false);
  let count = 0;
  function showSettingMenu() {
    setDisplaySettings(true);

    document.addEventListener("click", function listenClickOutside(e) {
      const menu = document.getElementById("card-container");
      if (!menu) {
        document.removeEventListener("click", listenClickOutside);
        return;
      }
      if (count > 0 && !menu.contains(e.target)) {
        setDisplaySettings(false);
        document.removeEventListener("click", listenClickOutside);
        count = 0;
      } else {
        count += 1;
      }
    });
  }
  return (
    <div className="horizontal-item">
      <div className="row horizontal-item__container">
        <div className="horizontal-item__play-btn">
          <BsFillPlayFill />
        </div>
        <div className="horizontal-item__index">{props.index + 1}</div>
        <div className="horizontal-item__image">
          <img src={props.image} alt="" />
        </div>

        <div className="horizontal-item__title">{props.title}</div>

        <div className="horizontal-item__artist">{props.artist}</div>
        <div className="horizontal-item__duration">{props.duration}</div>
        <AiOutlineHeart className="horizontal-item__icon" />
        <div style={{ position: "relative" }}>
          <BiDotsHorizontalRounded
            className="horizontal-item__icon"
            onClick={showSettingMenu}
          />
          <div className="horizontal-item__settings">
            <CardSetting displaySettings={displaySettings} />
          </div>
        </div>
      </div>
    </div>
  );
}
