import React from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__banner">
        <div className="contact__banner__title">
          <span style={{ color: "#2d7a00" }}>L</span>
          <span style={{ color: "#349f00" }}>i</span>
          <span style={{ color: "#25ff00" }}>ê</span>
          <span style={{ color: "#50ff50" }}>n</span>
          <span style={{ color: "#9cff84" }}> </span>
          <span style={{ color: "#3dbc4c" }}>h</span>
          <span style={{ color: "#80ff00" }}>ệ</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-m-12">
          <div className="contact__form">
            <form>
              <label>
                Tên của bạn:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="name" />
              </label>
              <label>
                Số điện thoại:
                <input type="email" name="name" />
              </label>
              <label>
                Nội dung cần liên hệ:
                <textarea cols={30} rows={10} />
              </label>
              <button>Gửi thông tin</button>
            </form>
          </div>
        </div>
        <div className="col-6 col-m-12">
          <div className="contact__information">
            <p> CÔNG TY CỔ PHẦN GIAO DỊCH HÀNG HOA GIA CÁT LỢI</p>
            <p>
              <AiOutlineHome /> Trụ sở chính: 163 Nguyễn Thị Nhung, KDC Vạn Phúc
              1, Quốc lộ 13, Phường Hiệp Bình Phước, Thành phố Thủ Đức, Thành
              phố Hồ Chí Minh
            </p>
            <p>
              <AiOutlinePhone /> Hotline 024 7109 9247
            </p>
            <p>
              <AiOutlineMail /> Email: customerservice@giacatloi.vn
            </p>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5732084125484!2d106.70864051474204!3d10.843937092275748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175286fef13af3d%3A0x14655c4db3b7d16!2zMTYzIE5ndXnhu4VuIFRo4buLIE5odW5nLCBLaHUgxJDDtCBUaOG7iyBW4bqhbiBQaMO6YywgVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1661488418019!5m2!1sen!2s"
        width={"98%"}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading={"lazy"}
        referrerpolicy={"no-referrer-when-downgrade"}
      ></iframe>
    </div>
  );
}
