import { useState, useEffect, useRef, useReducer } from "react";
import { recommendations } from "../../data/recommendations";

const initialCarouselState = {
  currentIndex: 0,
  isVisible: true,
  lastManualChange: Date.now(),
};

function carouselReducer(state, action) {
  switch (action.type) {
    case "fadeOut":
      return { ...state, isVisible: false };
    case "showNext":
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % action.total,
        isVisible: true,
      };
    case "showAt":
      return {
        ...state,
        currentIndex: action.index,
        isVisible: true,
        lastManualChange: Date.now(),
      };
    default:
      return state;
  }
}

const Recommendations = () => {
  const [{ currentIndex, isVisible, lastManualChange }, dispatch] = useReducer(
    carouselReducer,
    initialCarouselState
  );
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const isInViewRef = useRef(false);

  const activeRecommendations = recommendations;

  useEffect(() => {
    let interval = null;

    const clearIntervalIfNeeded = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const startIntervalIfNeeded = () => {
      clearIntervalIfNeeded();
      if (activeRecommendations.length <= 1 || isPaused || !isInViewRef.current) return;

      interval = setInterval(() => {
        dispatch({ type: "fadeOut" });
        setTimeout(() => {
          dispatch({ type: "showNext", total: activeRecommendations.length });
        }, 300);
      }, 10000);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isInViewRef.current = entry.isIntersecting;
      startIntervalIfNeeded();
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    startIntervalIfNeeded();

    return () => {
      observer.disconnect();
      clearIntervalIfNeeded();
    };
  }, [activeRecommendations.length, lastManualChange, isPaused]);

  const handleDotClick = index => {
    dispatch({ type: "fadeOut" });
    setTimeout(() => {
      dispatch({ type: "showAt", index }); // lastManualChange update restarts the interval
    }, 300);
  };

  if (activeRecommendations.length === 0) {
    return (
      <div className="recommendations-container">
        <div className="recommendation-card">
          <p className="recommendation-text">No recommendations available.</p>
        </div>
      </div>
    );
  }

  const currentRecommendation = activeRecommendations[currentIndex];

  return (
    <>
      <div className="recommendations-container" ref={containerRef}>
        <div
          className={`recommendation-card ${isVisible ? "visible" : "hidden"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <p className="recommendation-text">{currentRecommendation.text}</p>
          <div className="recommendation-author">— {currentRecommendation.name}</div>
          {isPaused && (
            <div className="pause-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Dots indicator */}
      {activeRecommendations.length > 1 && (
        <div className="recommendation-dots-container">
          {activeRecommendations.map((recommendation, index) => (
            <button
              type="button"
              key={recommendation.id}
              className={`recommendation-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View recommendation ${index + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Recommendations;
