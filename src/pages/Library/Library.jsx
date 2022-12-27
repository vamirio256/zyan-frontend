import React from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/Card";
import {
  album,
  artist_data,
  download,
  playlist_data,
} from "../../contexts/dummy_data";
import "./Library.scss";

export default function Library() {
  const { search } = useLocation();
  let data;
  let background = 0;
  if (search == "?id=favorite") {
    data = playlist_data;
  } else if (search == "?id=download") {
    data = download;
    background = 1;
  } else if (search == "?id=album") {
    data = album;
  } else {
    data = artist_data;
  }
  function createMarkup() {
    return { __html: data.category_content };
  }
  return (
    <div className="library">
      <h3 className="library__title"> {data.title}</h3>
      <div className="library__description">{data.description}</div>
      <div className="library__list">
        <div className="row">
          {data.type == 1 && (
            <div
              className={
                background === 0
                  ? "library__list__category background1"
                  : "library__list__category background2"
              }
            >
              <div className="library__list__category__icon">
                <AiFillHeart />
              </div>
              <p
                className="library__list__category__content"
                dangerouslySetInnerHTML={createMarkup()}
              ></p>
              <p className="library__list__category__title">
                {data.category_title}
              </p>
              <p>{data.category_count}</p>
            </div>
          )}
          {data.data_slide.map((value, index) => {
            return (
              <Card
                className="card__library"
                image={value.image}
                title={value.title}
                description={value.description}
                newtype={value.newtype}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
