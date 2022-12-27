import "./Discover.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { genre_data } from "../../contexts/dummy_data";

const Discover = () => {
  const data = genre_data;
  return (
    <div className="container discover">
      <h1 className="discover__title">Đề xuất</h1>
      <div className="discover__banner">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="discover__banner__container row">
              <div className="discover__banner__image">
                <img src={require("../../assets/images/banner1.png")} alt="" />
              </div>
              <div className="discover__banner__content">
                <div className="discover__banner__content__type">PODCAST</div>
                <div className="discover__banner__content__title">
                  Luyện Nghe Tiếng Anh
                </div>
                <div className="discover__banner__content__des">
                  Callum Nguyen
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="discover__banner__container row">
              <div className="discover__banner__image">
                <img src={require("../../assets/images/banner2.png")} alt="" />
              </div>
              <div className="discover__banner__content">
                <div className="discover__banner__content__type">PLAYLIST</div>
                <div className="discover__banner__content__title">
                  Hit Rewind
                </div>
                <div className="discover__banner__content__des">
                  Nghe lại các hit mà bạn đã bỏ lỡ
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="discover__banner__container row">
              <div className="discover__banner__image">
                <img src={require("../../assets/images/banner3.png")} alt="" />
              </div>
              <div className="discover__banner__content">
                <div className="discover__banner__content__type">PODCAST</div>
                <div className="discover__banner__content__title">
                  Intense Studying
                </div>
                <div className="discover__banner__content__des">
                  Matthew Koma
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className="discover__title">Thể loại đề xuất</h1>
      <p>Dựa theo nhạc nghe nhiều nhất</p>
      <div className="discover__genre discover__genre-main">
        <div className="row">
          <div className="col-4 col-m-6">
            <div
              className="discover__genre__background"
              style={{ backgroundColor: "#e8115b" }}
            >
              <div className="discover__genre__title">Rock & Roll</div>
              <img src={require("../../assets/genre/rockroll.png")} alt="" />
            </div>
          </div>
          <div className="col-4  col-m-6">
            <div
              className="discover__genre__background"
              style={{ backgroundColor: "#0d73ec" }}
            >
              <div className="discover__genre__title">Hip-Hop</div>
              <img src={require("../../assets/genre/hiphop.png")} alt="" />
            </div>
          </div>
          <div className="col-4 col-m-6">
            <div
              className="discover__genre__background"
              style={{ backgroundColor: "#777777" }}
            >
              <div className="discover__genre__title">Metal</div>
              <img src={require("../../assets/genre/metal.png")} alt="" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="discover__title">Tất cả thể loại</h1>
      <div className="discover__genre discover__genre-all">
        <div className="row">
          {data.map((value, index) => {
            return (
              <div className="col-3 col-t-4 col-m-6">
                <div
                  className="discover__genre__background"
                  style={{ backgroundColor: value.color }}
                >
                  <div className="discover__genre__title">{value.title}</div>
                  <img src={value.link} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discover;
