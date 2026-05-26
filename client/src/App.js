import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/scroll-to-top";
import About from "./components/about";
import Home from "./components/home";
import Spectrum from "./components/portfolio/spectrum";
import Eventogy from "./components/portfolio/eventogy";
import Journalinspace from "./components/portfolio/journal-in-space";
import BbcStoryWorks from "./components/portfolio/bbc-storyworks";
import FortiFi from "./components/portfolio/40-fi";
import All3Media from "./components/portfolio/all3-media";
import NotFound from "./components/not-found";

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
