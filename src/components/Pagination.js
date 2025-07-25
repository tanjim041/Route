import React from "react";

function Pagination({ total, current, onChange }) {
  return (
    <div className="pagination">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          className={current === i + 1 ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
