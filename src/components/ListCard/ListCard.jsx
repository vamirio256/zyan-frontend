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
      <div className="list-card__slide">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          autoHeight={true}
          breakpoints={{
            600: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <Card
              className="swiper-slide__content"
              song="Born to Die"
              artist="Lana Del Rey"
              newtype
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
              newtype
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
              newtype
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
    </div>
  );
};

export default ListCard;
