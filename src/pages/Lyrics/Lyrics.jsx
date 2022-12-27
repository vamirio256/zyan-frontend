import React from "react";
import "./Lyrics.scss";

export default function Lyrics() {
  return (
    <div className="lyric">
      <div className="row">
        <div className="col-4 col-m-12 lyric__info">
          <img src={require("../../assets/images/bone.jpg")} alt="" />
          <div className="lyric__info__title">Bones</div>
          <div className="lyric__info__artist">Image Dragon</div>
        </div>
        <div className="col-8 col-m-12 lyric__text">
          <p>Gimme gimme gimme some time to think</p>
          <p>I’m in the bathroom looking at me</p>
          <p>Face in the mirror is all I need</p>
          <p>Wait until the reaper takes my life</p>
          <p>Never gonna get me out alive</p>
          <p>I will live a thousand million lives</p>
        </div>
      </div>
    </div>
  );
}
