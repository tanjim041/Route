import React, { useState } from "react";

const reactions = {
  "👍": "Like",
  "❤️": "Love",
  "😠": "Angry",
  "😢": "Sad",
};

function ReactionBar() {
  const [counts, setCounts] = useState({
    "👍": 3,
    "❤️": 9,
    "😠": 1,
    "😢": 1,
  });

  const [active, setActive] = useState(null);

  const handleClick = (reaction) => {
    if (active === reaction) return; // Already selected

    setCounts((prev) => {
      const newCounts = { ...prev };
      if (active) newCounts[active] -= 1; // remove previous
      newCounts[reaction] += 1;           // add new
      return newCounts;
    });

    setActive(reaction);
  };

  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div style={{
      backgroundColor: "#dbeafe",
      padding: "1rem",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      gap: "2rem"
    }}>
      {Object.entries(reactions).map(([icon, label]) => (
        <div key={icon} style={{ textAlign: "center", fontWeight: "bold" }}>
          <button
            onClick={() => handleClick(icon)}
            className={`reaction-btn ${active === icon ? "active" : ""}`}
          >
            {icon}
          </button>
          <div style={{ fontSize: "0.85rem" }}>
            {total > 0 ? Math.round((counts[icon] / total) * 100) : 0}%
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReactionBar;
