import "./MediaControl.scss";
import tempImg from "../../assets/images/temp_img.jpg";
import { FaRandom } from "react-icons/fa";
import {
  BiDotsHorizontalRounded,
  BiSkipNext,
  BiSkipPrevious,
} from "react-icons/bi";
import {
  BsFileEarmarkMusic,
  BsFillVolumeUpFill,
  BsPlayCircleFill,
} from "react-icons/bs";
import {
  AiFillPlayCircle,
  AiFillSetting,
  AiOutlineUnorderedList,
} from "react-icons/ai";
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
            <AiFillPlayCircle
              size={40}
              color={"#3b75ff"}
              className="media-control__content__control__icon__mobile-play"
            />
            <BiSkipNext size={30} />
            <CiRedo size={20} />
            <BiDotsHorizontalRounded
              className="media-control__content__control__icon__mobile-setting"
              size={25}
            />
          </div>
          {/* timeline */}
          <div className="media-control__content__control__timeline">
            <div className="current-time">0:12</div>
            <div className="timeline-wrapper">
              <div className="timeline-wrapper timeline-wrapper__running-line"></div>
            </div>
            <div className="total-time">3:20</div>
          </div>
        </div>
        {/* setting */}
        <div className="media-control__content__settings">
          <BsFileEarmarkMusic />
          <AiOutlineUnorderedList />
          <BsFillVolumeUpFill />
          <div className="volume-wrapper">
            <div className="volume-wrapper__running-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaControl;
