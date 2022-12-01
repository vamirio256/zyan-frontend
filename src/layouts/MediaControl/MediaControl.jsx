import "./MediaControl.scss";
import tempImg from "../../assets/images/temp_img.jpg";

const MediaControl = (props) => {
  return (
    <div className="media-control">
      <div className="media-control__content">
        <img
          className="media-control__content__img"
          src={props.url || tempImg}
        />
        <div className="media-control__content__title">
          <p className="media-control__content__title__song">{props.song}</p>
          <p className="media-control__content__title__artist">
            {props.artist}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaControl;
