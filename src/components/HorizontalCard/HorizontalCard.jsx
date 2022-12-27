import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiTime } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import CardSetting from "../CardSetting/CardSetting";
import "./HorizontalCard.scss";

export default function HorizontalCard(props) {
  const [displaySettings, setDisplaySettings] = useState(false);

  function showSettingMenu() {
    setDisplaySettings(true);
  }

  return (
    <div className={`horizontal-item`}>
      <div className="row horizontal-item__container">
        {!props.newtype && (
          <div className="horizontal-item__play-btn">
            <BsFillPlayFill />
          </div>
        )}
        <div className="horizontal-item__index">
          {!props.newtype ? props.index + 1 : "#"}
        </div>
        <div className="horizontal-item__image">
          <img
            src={props.image}
            alt=""
            style={{ visibility: props.newtype ? "hidden" : "inherit" }}
          />
        </div>
        <div className="horizontal-item__title">{props.title}</div>
        <div className="horizontal-item__artist">{props.artist}</div>
        <div className="horizontal-item__duration">
          {!props.newtype ? (
            props.duration
          ) : (
            <BiTime
              size={20}
              style={{ marginRight: "60px", top: "5px", position: "relative" }}
            />
          )}
        </div>
        {!props.newtype && (
          <div style={{ display: "flex" }}>
            <AiOutlineHeart className="horizontal-item__icon" />
            <div style={{ position: "relative" }}>
              <BiDotsHorizontalRounded
                className="horizontal-item__icon"
                onClick={showSettingMenu}
              />
              <div className="horizontal-item__settings">
                <CardSetting
                  displaySettings={displaySettings}
                  setDisplaySettings={setDisplaySettings}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
