
import React from "react";
import "./ImpactStories.css";

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      title: "From Struggle to Stability",
      description:
        "How timely support helped an elderly woman regain dignity and independence.",
    },
    {
      id: 2,
      title: "Education That Changed a Life",
      description:
        "A young student’s journey from dropping out to dreaming big.",
    },
    {
      id: 3,
      title: "Healing Beyond Medicine",
      description:
        "Access to healthcare brought hope back to a forgotten community.",
    },
  ];

  return (
    <div className="impact-container">
      <h1>Impact Stories</h1>

      <div className="stories-grid">
        {stories.map((story) => (
          <div className="story-card" key={story.id}>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <a href="#" className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;
