import "./ListCard.scss";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ListCard = (props) => {
  return (
    <div className="list-card">
      <div className="list-card__title">
        <h3>{props.title}</h3>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            className="swiper-slide__content"
            song="Born to Die"
            artist="Lana Del Rey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="swiper-slide__content"
            song="Born to Die"
            artist="Lana Del Rey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="swiper-slide__content"
            song="Born to Die"
            artist="Lana Del Rey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="swiper-slide__content"
            song="Born to Die"
            artist="Lana Del Rey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="swiper-slide__content"
            song="Born to Die"
            artist="Lana Del Rey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="swiper-slide__content"
            song="Born to Die"
            artist="Lana Del Rey"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="swiper-slide__content"
            song="Born to Die"
            artist="Lana Del Rey"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ListCard;
