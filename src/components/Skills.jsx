import React from "react";
import data from "../assets/data2.json";

const Skills = () => {
  return (
    <div id="skills" className="timeline">
      <div className="timelineBox">
        {data.skills.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.description}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Skills;
