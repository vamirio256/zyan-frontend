import { BrowserRouter, Route, Routes } from "react-router-dom";
import MediaControl from "./layouts/MediaControl/MediaControl";
import "./App.scss";
import Menu from "./layouts/Menu/Menu";
import TopBar from "./layouts/TopBar/TopBar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Favorite from "./pages/Favorite/Favorite";
import Follow from "./pages/Follow/Follow";
import Home from "./pages/Home/Home";

import Discover from "./pages/Discover/Discover";
import { createContext, useState } from "react";

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
                    <Menu />
                    <div className="app__container">
                        <TopBar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/favorite" element={<Favorite />} />       
                            <Route path="/discover" element={<Discover />} />
                            <Route path="/follow" element={<Follow />} />
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
