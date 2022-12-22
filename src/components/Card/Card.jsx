import "./Card.scss";
import image from "../../assets/images/temp_img.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { BsFillPlayFill } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";
import CardSetting from "../CardSetting/CardSetting";
import { useState } from "react";
const Card = (props) => {
  const cardClass = `${props.class}` ? `card ${props.class}` : `card`;
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
    <div className={cardClass}>
      <div className="card__image-box">
        <img
          src={image}
          className="card__image-box__img"
          style={props.newtype && { borderRadius: "50%" }}
        />
        <div className="card__image-box__play-btn">
          {props.newtype ? <IoIosShareAlt /> : <BsFillPlayFill />}
        </div>
      </div>
      <div className="card__des">
        <p className="card__des__song-title">{props.song}</p>
        <p className="card__des__artist">{props.artist}</p>
      </div>
      <div className="card__settings">
        <div className="card__setings__container">
          <button className="no-bg" onClick={showSettingMenu}>
            <BiDotsHorizontalRounded />
          </button>
        </div>
      </div>
      <div className="card__setings__container__popup">
        <CardSetting displaySettings={displaySettings} />
      </div>
    </div>
  );
};

export default Card;
