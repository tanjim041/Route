import React from "react";
import { Link } from "react-router-dom";
import ReactionBar from "./ReactionBar";

function Comment({ comment }) {
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "#1e3a8a",
          }}
        ></div>
        <p style={{ margin: 0 }}>
          <Link to={`/author/${comment.author.id}`} style={{ fontWeight: "bold", color: "#000" }}>
            {comment.author.name}
          </Link>{" "}
          <span style={{ fontSize: "0.8rem", color: "#555" }}> - {comment.date}</span>
        </p>
      </div>
      <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{comment.text}</p>
      <div style={{ fontSize: "0.85rem" }}>
        <span style={{ marginRight: "1rem", cursor: "pointer" }}>Like 12</span>
        <span style={{ marginRight: "1rem", cursor: "pointer" }}>Dislike 1</span>
        <span style={{ cursor: "pointer" }}>Reply</span>
      </div>
    </div>
  );
}

export default Comment;
