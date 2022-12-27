import "./Card.scss";
import image from "../../assets/images/temp_img.jpg";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { BsFillPlayFill } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";
import CardSetting from "../CardSetting/CardSetting";
import { useState } from "react";
const Card = (props) => {
  const cardClass = `card swiper-slide__content ${props.className}`;
  const [displaySettings, setDisplaySettings] = useState(false);

  function showSettingMenu() {
    setDisplaySettings(true);
  }

  return (
    <div className={cardClass}>
      <div className="card__image-box">
        <img
          src={props.image}
          className="card__image-box__img"
          style={{ borderRadius: props.newtype == 1 ? "50%" : "20px" }}
        />
        <div className="card__image-box__play-btn">
          {props.newtype === 1 ? <IoIosShareAlt /> : <BsFillPlayFill />}
        </div>
      </div>
      <div className="card__des">
        <p className="card__des__song-title">{props.title}</p>
        <p className="card__des__artist">{props.description}</p>
      </div>
      <div className="card__settings">
        <div className="card__settings__container">
          <button className="no-bg" onClick={showSettingMenu}>
            <BiDotsHorizontalRounded />
          </button>
        </div>
      </div>
      <div className="card__settings__popup">
        <div className="card__settings__popup__container">
          <CardSetting
            displaySettings={displaySettings}
            setDisplaySettings={setDisplaySettings}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
