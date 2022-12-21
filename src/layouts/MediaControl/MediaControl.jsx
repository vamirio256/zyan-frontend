import "./MediaControl.scss";
import tempImg from "../../assets/images/temp_img.jpg";
import { FaRandom } from "react-icons/fa";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsPlayCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { CiRedo } from "react-icons/ci";
const MediaControl = (props) => {
  return (
    <div className="media-control">
      <div className="media-control__content">
        {/* media info */}
        <div className="media-control__content__info">
          <img
            className="media-control__content__info__img"
            src={props.url || tempImg}
          />
          <div className="media-control__content__info__title">
            <p className="media-control__content__info__title__song">
              {props.song}Bohemian Rhapsody
            </p>
            <p className="media-control__content__info__title__artist">
              {props.artist}Queen
            </p>
          </div>
        </div>
        {/* media control */}
        <div className="media-control__content__control">
          <div className="media-control__content__control__icon">
            <FaRandom size={15} />
            <BiSkipPrevious size={30} />
            <AiFillPlayCircle size={40} color={"#3b75ff"} />
            <BiSkipNext size={30} />
            <CiRedo size={20} />
          </div>
          <div className="media-control__content__control__timeline"></div>
        </div>
      </div>
    </div>
  );
};

export default MediaControl;
