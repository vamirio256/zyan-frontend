import "./Card.scss";
import image from "../../assets/images/temp_img.jpg";

const Card = (props) => {
  const cardClass = `${props.class}` ? `card ${props.class}` : `card`;

  return (
    <div className={cardClass}>
        <img src={image} className="card__img" />
        <div>
          <p className="card__song">{props.song}</p>
          <p className="card__artist">{props.artist}</p>
      </div>
    </div>
  );
};

export default Card;
