import { BsFacebook } from "react-icons/bs";
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRef } from "react";
import { redirect } from "react-router-dom";
const Login = () => {
  const loginRef = useRef();
  function closeLoginForm() {
    loginRef.current.style.display = "none";
    document.body.style.overflow = "auto";
  }
  function goToAdmin() {
    return redirect("/admin");
  }
  return (
    <div className="login" id="login-form" ref={loginRef}>
      <div className="login__background-outside" onClick={closeLoginForm}></div>
      <div className="login__content">
        <h1 className="menu__title">Zyan</h1>
        <p style={{ textAlign: "center", marginTop: "5px" }}>
          Đăng nhập để tiếp tục
        </p>
        <div className="login__content__information">
          <div className="login__content__information__field">
            <input type="text" placeholder="Tài khoản" />
            <MdEmail />
          </div>
          <div className="login__content__information__field">
            <input type="password" placeholder="Mật khẩu" />
            <RiLockPasswordFill />
          </div>
        </div>
        <u>Quên mật khẩu?</u>
        <button className="login__content__login-btn" onClick={goToAdmin}>
          Đăng nhập
        </button>
        <hr className="rounded"></hr>
        <div className="login__content__outside-login">
          <button>
            <BsFacebook />
            Đăng nhập với Facebook
          </button>
          <button>
            <FcGoogle />
            Đăng nhập với Google
          </button>
        </div>
        <p style={{ textAlign: "center" }}>
          Chưa có tài khoản ? &nbsp;<u style={{ color: "#04B4FF" }}> Đăng kí</u>
        </p>
        <u
          style={{ textAlign: "center", marginTop: "10px" }}
          className="mobile"
          onClick={closeLoginForm}
        >
          Close
        </u>
      </div>
    </div>
  );
};

export default Login;
