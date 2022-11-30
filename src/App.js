import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import MediaControl from "./layouts/MediaControl/MediaControl";
import Menu from "./layouts/Menu/Menu";
import TopBar from "./layouts/TopBar/TopBar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import "./App.scss";
import Follow from "./pages/Follow/Follow";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <div className="app__container">
          <TopBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/follow" element={<Follow />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <MediaControl />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
