import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ListCard from "../../components/ListCard/ListCard";
import "./Home.scss";
import ListItem from "../../components/ListItem/ListItem";

const Home = () => {
  const banner_data = [
    require("../../assets/banner/Rectangle 334.png"),
    require("../../assets/banner/Rectangle 335.png"),
    require("../../assets/banner/Rectangle 336.png"),
    require("../../assets/banner/Rectangle 337.png"),
    require("../../assets/banner/Rectangle 338.png"),
  ];
  const new_music_data = [
    {
      image: require("../../assets/images/Rectangle 225.png"),
      title: "Tình Đắng Như Ly Cà Phê",
      artist: "Ngơ",
      duration: "3:45",
    },
    {
      image: require("../../assets/images/Rectangle 225 (1).png"),
      title: "Metronome",
      artist: "Kenshi Yonezu",
      duration: "4:45",
    },
    {
      image: require("../../assets/images/Rectangle 225 (2).png"),
      title: "Feeling Are Faltal",
      artist: "mxmtool",
      duration: "4:47",
    },
    {
      image: require("../../assets/images/Rectangle 225 (3).png"),
      title: "Hold",
      artist: "Ngơ",
      duration: "3:45",
    },
    {
      image: require("../../assets/images/Rectangle 225 (4).png"),
      title: "Colors",
      artist: "Ngơ",
      duration: "3:45",
    },
  ];
  return (
    <>
      <section className="home">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={true}
          pagination={{ clickable: true }}
          className="home__banner"
          loop={true}
          autoHeight={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {banner_data.map((value, index) => {
            return (
              <SwiperSlide>
                <img src={value} alt="" className="home__banner__image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div style={{ zIndex: 200, position: "relative" }}>
          <ListCard title="Đã phát gần đây" />
        </div>
        <div style={{ zIndex: 100, position: "relative" }}>
          <ListCard title="Đề xuất của Zyan" />
        </div>

        <div style={{ zIndex: 50 }}>
          <ListCard title="Hôm nay nghe gì" />
        </div>
        <div className="home__new-popular-music">
          <div className="home__new-popular-music__title">
            Nhạc mới phổ biến
          </div>
          <div className="home__new-popular-music__content row">
            <div className="home__new-popular-music__content__swiper col-3 col-m-8">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                loop={true}
                autoHeight={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <img src={require("../../assets/banner/Rectangle 291.png")} />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/banner/Rectangle 292.png")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={require("../../assets/banner/Rectangle 294.png")}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../../assets/banner/Rectangle 295.png")} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={require("../../assets/banner/Rectangle 296.png")} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="home__new-popular-music__content__list col-8 col-m-12 col-t-9">
              {new_music_data.map((item, index) => {
                return (
                  <ListItem
                    title={item.title}
                    artist={item.artist}
                    duration={item.duration}
                    image={item.image}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
