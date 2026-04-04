import { useState, useEffect, useRef } from "react";

const Recommendations = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastManualChange, setLastManualChange] = useState(Date.now());
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  const activeRecommendations = items;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0.1,
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeRecommendations.length <= 1 || isPaused || !isInView) return;

    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);

      // After fade out completes, change content and fade in
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % activeRecommendations.length);
        setIsVisible(true);
      }, 300);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [activeRecommendations.length, lastManualChange, isPaused, isInView]); // Reset interval when lastManualChange, isPaused, or isInView updates

  const handleDotClick = index => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsVisible(true);
      setLastManualChange(Date.now()); // This will trigger useEffect to restart the interval
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
          <p
            className="recommendation-text"
            dangerouslySetInnerHTML={{ __html: currentRecommendation.text }}
          />
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
          {activeRecommendations.map((_, index) => (
            <button
              key={index}
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
