import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Spectrum from "./components/Spectrum";
import Eventogy from "./components/Eventogy";
import Journalinspace from "./components/Journalinspace";
import BbcStoryWorks from "./components/BbcStoryWorks";
import FortiFi from "./components/FortiFi";
import All3Media from "./components/All3Media";
import NotFound from "./components/NotFound";

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
          <Route path="/40fi" element={<FortiFi />} />
          <Route path="/about" element={<About />} />
          <Route path="/all3media" element={<All3Media />} />
          <Route path="/bbc-storyworks" element={<BbcStoryWorks />} />
          <Route path="/eventogy" element={<Eventogy />} />
          <Route path="/journalinspace" element={<Journalinspace />} />
          <Route path="/spectrum" element={<Spectrum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
