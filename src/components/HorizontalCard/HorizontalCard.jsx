import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./HorizontalCard.scss";

export default function HorizontalCard(props) {
  return (
    <div className="horizontal-item">
      <div className="row horizontal-item__container">
        <div className="horizontal-item__index">{props.index + 1}</div>
        <div className="horizontal-item__image">
          <img src={props.image} alt="" />
        </div>

        <div className="horizontal-item__title">{props.title}</div>

        <div className="horizontal-item__artist">{props.artist}</div>
        <div className="horizontal-item__duration">{props.duration}</div>
        <AiOutlineHeart className="horizontal-item__heart" />
      </div>
    </div>
  );
}
