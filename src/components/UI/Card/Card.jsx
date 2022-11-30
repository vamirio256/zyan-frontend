const Card = (props) => {
  return (
    <div className={`card ${props.class}`}>
      <img url={"../../../assets/images/temp_img.jpg"} className="card__img" />
      <div>
        <p className="card__song">{props.song}</p>
        <p className="card__artist">{props.artist}</p>
      </div>
    </div>
  );
};

export default Card;
