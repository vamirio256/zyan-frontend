import { useEffect, useState } from "react";
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
  let currentLocation = useLocation().search;

  const [data, set_data] = useState(playlist_data_1);
  const [location, set_location] = useState("?id=1");

  if (currentLocation !== location) {
    set_location(currentLocation);
  }
  useEffect(() => {
    if (location === "?id=1") {
      set_data(playlist_data_1);
    } else {
      set_data(playlist_data_2);
    }
  }, [location]);
  function setDataSelecting(e) {
    if (e.target.value === "a_z") {
      const new_data_list = data.list_data.sort(function compare(a, b) {
        if (a.title.slice(0, 1) < b.title.slice(0, 1)) {
          return -1;
        }
        if (a.title.slice(0, 1) > b.title.slice(0, 1)) {
          return 1;
        }
        return 0;
      });
      set_data({ ...data, list_data: new_data_list });
    } else if (e.target.value === "z_a") {
      const new_data_list = data.list_data.sort(function compare(a, b) {
        if (a.title.slice(0, 1) > b.title.slice(0, 1)) {
          return -1;
        }
        if (a.title.slice(0, 1) < b.title.slice(0, 1)) {
          return 1;
        }
        return 0;
      });
      set_data({ ...data, list_data: new_data_list });
    } else {
      const new_data_list = data.list_data.reverse();
      set_data({ ...data, list_data: new_data_list });
    }
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
        <div className="playlist__icon_items">
          <AiFillPlayCircle fontSize={30} color={"#3b75ff"} />
          <FaRandom />
          <AiFillHeart color={"pink"} />
          <AiOutlineDownload />
          <FaShare />
          <BiDotsHorizontal />
        </div>
        <div className="playlist__icon_sort">
          <select onChange={setDataSelecting}>
            <option value="Default">Default</option>
            <option value="a_z">A-Z</option>
            <option value="z_a">Z-A</option>
            <option value="down_to_up">Dưới lên trên</option>
          </select>
        </div>
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
