import {
  AiFillHeart,
  AiFillPlayCircle,
  AiOutlineDownload,
} from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaRandom, FaShare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import { playlist_data_1, playlist_data_2 } from "../../contexts/dummy_data";
import "./Playlist.scss";

const Playlist = () => {
  let data;
  if (useLocation().search == "?id=1") {
    data = playlist_data_1;
  } else {
    data = playlist_data_2;
  }
  return (
    <div className="playlist">
      <div className="playlist__banner">
        <div className="playlist__banner__artist-img">
          <img src={data.artist_img} alt="" />
        </div>
        <div className="playlist__banner__content">
          <div className="playlist__banner__content__type">Playlist</div>
          <div className="playlist__banner__content__title">{data.title}</div>
          <div className="playlist__banner__content__information">
            <img src={data.artist_small_img} alt="" />
            <div>{data.artist} · &nbsp;</div>
            <div>{data.song_count} bài hát · &nbsp;</div>
            <div>{data.time} phút</div>
          </div>
        </div>
      </div>
      <div className="playlist__icon">
        <AiFillPlayCircle fontSize={30} color={"#3b75ff"} />
        <FaRandom />
        <AiFillHeart color={"pink"} />
        <AiOutlineDownload />
        <FaShare />
        <BiDotsHorizontal />
      </div>
      <div className="playlist__table">
        <HorizontalCard
          title={"Tiêu đề"}
          artist={"Album"}
          duration={"2:33"}
          newtype
        />
        <hr style={{ marginBottom: "20px" }} />
        {data.list_data.map((item, index) => {
          return (
            <HorizontalCard
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
  );
};

export default Playlist;
