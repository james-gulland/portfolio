import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Spectrum from "./components/Spectrum";
import Wanderlust from "./components/Wanderlust";
import Battleships from "./components/Battleships";
import Journalinspace from "./components/Journalinspace";
import BbcStoryWorks from "./components/BbcStoryWorks";
import FortiFi from "./components/FortiFi";

// scrolls page to top when loading the page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spectrum" element={<Spectrum />} />
          <Route path="/wanderlust" element={<Wanderlust />} />
          <Route path="/battleships" element={<Battleships />} />
          <Route path="/journalinspace" element={<Journalinspace />} />
          <Route path="/bbc-storyworks" element={<BbcStoryWorks />} />
          <Route path="/40fi" element={<FortiFi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
