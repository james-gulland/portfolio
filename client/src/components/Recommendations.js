import { useState, useEffect } from "react";

const Recommendations = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastManualChange, setLastManualChange] = useState(Date.now());

  const activeRecommendations = items;

  useEffect(() => {
    if (activeRecommendations.length <= 1) return;

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
  }, [activeRecommendations.length, lastManualChange]); // Reset interval when lastManualChange updates

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
      <div className="recommendations-container">
        <div className={`recommendation-card ${isVisible ? "visible" : "hidden"}`}>
          <p
            className="recommendation-text"
            dangerouslySetInnerHTML={{ __html: currentRecommendation.text }}
          />
          <div className="recommendation-author">
            <strong>— {currentRecommendation.name}</strong>
          </div>
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
