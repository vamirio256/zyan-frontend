import React from "react";
import { BsDownload } from "react-icons/bs";
import "./CardSettings.scss";
import { ImFileMusic } from "react-icons/im";
import { MdOutlineBlock } from "react-icons/md";
import { TbPlayerTrackNext } from "react-icons/tb";
import { IoIosAddCircle, IoIosListBox, IoIosShareAlt } from "react-icons/io";

export default function CardSetting(props) {
  function hideSettingMenu() {
    let count = 0;
    document.addEventListener("click", function listenClickOutside(e) {
      const menu = document.getElementById("card-container");

      if (count > 0 && !menu.contains(e.target)) {
        props.setDisplaySettings(false);
        document.removeEventListener("click", listenClickOutside);
        count = 0;
      } else {
        count += 1;
      }
    });
  }
  if (props.displaySettings) {
    hideSettingMenu();
    return (
      <div className="card-settings" id="card-container">
        <div className="card-settings__main-func">
          <div className="card-settings__main-func__item">
            <BsDownload />
            <p>Download</p>
          </div>
          <div className="card-settings__main-func__item">
            <ImFileMusic />
            <p>Lyrics</p>
          </div>
          <div className="card-settings__main-func__item">
            <MdOutlineBlock />
            <p>Block</p>
          </div>
        </div>
        <div className="card-settings__other-func">
          <div className="card-settings__other-func__item">
            <TbPlayerTrackNext />
            Phát tiếp theo
          </div>
          <div className="card-settings__other-func__item">
            <IoIosListBox />
            Thêm vào hàng đợi
          </div>
          <div className="card-settings__other-func__item">
            <IoIosAddCircle />
            Thêm vào Playlist
          </div>
          <div className="card-settings__other-func__item">
            <IoIosShareAlt />
            Chia sẻ
          </div>
        </div>
      </div>
    );
  }
  return <div> </div>;
}
