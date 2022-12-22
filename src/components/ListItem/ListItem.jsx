import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./ListItem.scss";

export default function ListItem(props) {
  return (
    <div className="list-item">
      <div className="row list-item__container">
        <div className="list-item__index">{props.index + 1}</div>
        <div className="list-item__image">
          <img src={props.image} alt="" />
        </div>

        <div className="list-item__title">{props.title}</div>

        <div className="list-item__artist">{props.artist}</div>
        <div className="list-item__duration">{props.duration}</div>
        <AiOutlineHeart className="list-item__heart" />
      </div>
    </div>
  );
}
