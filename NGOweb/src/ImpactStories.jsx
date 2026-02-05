import React from "react";
import "./ImpactStories.css";

const ImpactStories = () => {
  const stories = [
  {
    id: 1,
    title: "From Struggle to Stability",
    description:
      "Through emergency aid and ongoing care, an elderly woman rebuilt her life with dignity and independence.",
    category: "Elderly Care",
  },
  {
    id: 2,
    title: "Education That Changed a Life",
    description:
      "Scholarship support helped a school dropout return to class and dream of a brighter future.",
    category: "Education",
  },
  {
    id: 3,
    title: "Healing Beyond Medicine",
    description:
      "Access to basic healthcare services restored hope in an underserved community.",
    category: "Healthcare",
  },
  {
    id: 4,
    title: "A Safe Home, A Fresh Start",
    description:
      "Housing assistance gave a vulnerable family stability and protection.",
    category: "Shelter",
  },
  {
    id: 5,
    title: "Empowering Women to Thrive",
    description:
      "Skill development and micro-financing helped women become financially independent.",
    category: "Women Empowerment",
  },
  {
    id: 6,
    title: "Nourishing Young Lives",
    description:
      "Daily meal programs improved health and school attendance for children.",
    category: "Food Security",
  },
  {
    id: 7,
    title: "Clean Water, Healthy Futures",
    description:
      "Installing clean water systems reduced disease and improved daily life.",
    category: "Water & Sanitation",
  },
  {
    id: 8,
    title: "Rebuilding After Disaster",
    description:
      "Emergency relief and rehabilitation helped families recover after natural disasters.",
    category: "Disaster Relief",
  },
];

  const handleCardClick = (story) => {
    console.log("Clicked story:", story);
    alert(`You clicked: ${story.title}`);
  };

  return (
    <div className="impact-container">
      <h1>Impact Stories</h1>

      <div className="stories-grid">
        {stories.map((story) => (
          <div
            className="story-card"
            key={story.id}
            onClick={() => handleCardClick(story)}
          >
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <span className="read-more">Read More →</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;
