import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import MediaControl from "./layouts/MediaControl/MediaControl";
import Menu from "./layouts/Menu/Menu";
import TopBar from "./layouts/TopBar/TopBar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import "./App.scss";
import Follow from "./pages/Follow/Follow";
import Discover from "./pages/Discover/Discover";
import { createContext, useState } from "react";
import Download from "./pages/Download/Download";
import Album from "./pages/Album/Album";
import Playlist from "./pages/Playlist/Playlist";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id="theme">
        <BrowserRouter>
          <Menu className="app__menu" />
          <div className="app__container">
            <TopBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/follow" element={<Follow />} />{" "}
              <Route path="/download" element={<Download />} />
              <Route path="/album" element={<Album />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <MediaControl />
          </div>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
