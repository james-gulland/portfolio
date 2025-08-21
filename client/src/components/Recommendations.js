import React, { useState, useEffect } from "react";

const Recommendations = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [activeRecommendations.length]);

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
    <div className="recommendations-container">
      <div className={`recommendation-card ${isVisible ? "visible" : "hidden"}`}>
        <p className="recommendation-text">{currentRecommendation.text}</p>
        <div className="recommendation-author">
          <strong>— {currentRecommendation.name}</strong>
        </div>
      </div>

      {/* Dots indicator */}
      {activeRecommendations.length > 1 && (
        <div className="recommendation-dots-container">
          {activeRecommendations.map((_, index) => (
            <button
              key={index}
              className={`recommendation-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsVisible(true);
                }, 300);
              }}
              aria-label={`View recommendation ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
