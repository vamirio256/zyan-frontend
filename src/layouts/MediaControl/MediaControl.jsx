import "./MediaControl.scss";
import tempImg from "../../assets/images/temp_img.jpg";
import { FaRandom } from "react-icons/fa";
import {
  BiDotsHorizontalRounded,
  BiPause,
  BiSkipNext,
  BiSkipPrevious,
} from "react-icons/bi";
import {
  BsFileEarmarkMusic,
  BsFillPauseFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { AiFillPlayCircle, AiOutlineUnorderedList } from "react-icons/ai";
import { CiRedo } from "react-icons/ci";
import { songsdata } from "../../contexts/dummy_data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const MediaControl = (props) => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [currentVolume, setCurrentVolume] = useState(1);
  const audio_ref = useRef();
  function playAudio() {
    setisplaying(!isplaying);
  }
  useEffect(() => {
    if (isplaying) {
      audio_ref.current.play();
    } else {
      audio_ref.current.pause();
    }
  }, [isplaying]);
  function onPlaying() {
    const duration = audio_ref.current.duration;
    const currentTime = audio_ref.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (currentTime / duration) * 100,
      length: duration,
      currentTime: currentTime,
    });
    if (currentTime >= duration) {
      goNext();
    }
  }

  const clickRef = useRef();
  function checkWidth(e) {
    if (!isplaying) {
      setisplaying(true);
    }
    const length = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / length) * 100;
    audio_ref.current.currentTime = (divProgress / 100) * currentSong.length;
  }
  const audioRef = useRef();

  function checkAudio(e) {
    const length = audioRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    audio_ref.current.volume = offset / length;
    setCurrentVolume(offset / length);
  }
  function secondToMinutes(second) {
    if (second % 60 < 10) {
      return Math.floor(second / 60) + ":0" + Math.floor(second % 60);
    }
    return Math.floor(second / 60) + ":" + Math.floor(second % 60);
  }
  function goPrevious() {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == 0) {
      songs[songs.length - 1].progress = 0;
      setCurrentSong(songs[songs.length - 1]);
    } else {
      songs[index - 1].progress = 0;
      setCurrentSong(songs[index - 1]);
    }
    setisplaying(false);

    audio_ref.current.currentTime = 0;
  }
  function goNext() {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    if (index == songs.length - 1) {
      songs[0].progress = 0;
      setCurrentSong(songs[0]);
    } else {
      songs[index + 1].progress = 0;
      setCurrentSong(songs[index + 1]);
    }
    setisplaying(false);

    audio_ref.current.currentTime = 0;
  }
  return (
    <div className="media-control">
      <audio
        src={currentSong.url}
        ref={audio_ref}
        onTimeUpdate={onPlaying}
      ></audio>

      <div className="media-control__content">
        {/* media info */}
        <div className="media-control__content__info">
          <img
            className="media-control__content__info__img"
            src={currentSong.image}
          />
          <div className="media-control__content__info__title">
            <p className="media-control__content__info__title__song">
              {currentSong.title}
            </p>
            <p className="media-control__content__info__title__artist">
              {currentSong.artist}
            </p>
          </div>
        </div>
        {/* media control */}
        <div className="media-control__content__control">
          <div className="media-control__content__control__icon">
            <FaRandom size={15} />
            <button className="no-bg" onClick={goPrevious}>
              <BiSkipPrevious size={30} />
            </button>
            <button className="no-bg" onClick={playAudio}>
              {isplaying ? (
                <BiPause
                  size={25}
                  className="media-control__content__control__icon__mobile-pause"
                />
              ) : (
                <AiFillPlayCircle
                  color={"#3b75ff"}
                  className="media-control__content__control__icon__mobile-play"
                />
              )}
            </button>
            <BiSkipNext size={30} onClick={goNext} />
            <CiRedo size={20} />
            <BiDotsHorizontalRounded
              className="media-control__content__control__icon__mobile-setting"
              size={25}
            />
          </div>
          {/* timeline */}
          <div className="media-control__content__control__timeline">
            <div className="current-time">
              {secondToMinutes(currentSong.currentTime)}
            </div>
            <div
              className="timeline-wrapper"
              onClick={checkWidth}
              ref={clickRef}
            >
              <div
                className="timeline-wrapper timeline-wrapper__running-line"
                style={{ width: `${currentSong.progress + "%"}` }}
              ></div>
            </div>
            <div className="total-time">{currentSong.duration}</div>
          </div>
        </div>
        {/* setting */}
        <div className="media-control__content__settings">
          <Link to={"/lyrics"} className="no-bg">
            <BsFileEarmarkMusic />
          </Link>
          <AiOutlineUnorderedList />
          <BsFillVolumeUpFill />
          <div className="volume-wrapper" onClick={checkAudio} ref={audioRef}>
            <div
              className="volume-wrapper__running-line"
              style={{ width: `${currentVolume * 100}%` }}
            ></div>
            {console.log(currentVolume)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaControl;
