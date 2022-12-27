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
import Login from "./pages/Login/Login";
import Library from "./pages/Library/Library";
import Contact from "./pages/Contact/Contact";

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
          <Login className="app__login" />
          <Menu className="app__menu" />
          <TopBar />
          <div className="app__flex_scrollable">
            <div className="app__container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/library" element={<Library />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
          <MediaControl />
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
