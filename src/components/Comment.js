import React, { useState } from "react";
import { Link } from "react-router-dom";

function Comment({ comment }) {
  const [likes, setLikes] = useState(12);
  const [dislikes, setDislikes] = useState(1);
  const [userReaction, setUserReaction] = useState(null);

  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);

  const handleLike = () => {
    if (userReaction === "like") {
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === "dislike") setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserReaction("like");
    }
  };

  const handleDislike = () => {
    if (userReaction === "dislike") {
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === "like") setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserReaction("dislike");
    }
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText.trim()]);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className="card" style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      {/* Header */}
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

      {/* Text */}
      <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{comment.text}</p>

      {/* Actions */}
      <div style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
        <span
          onClick={handleLike}
          style={{
            marginRight: "1rem",
            cursor: "pointer",
            color: userReaction === "like" ? "#1d4ed8" : "black",
          }}
        >
          👍 Like {likes}
        </span>
        <span
          onClick={handleDislike}
          style={{
            marginRight: "1rem",
            cursor: "pointer",
            color: userReaction === "dislike" ? "#dc2626" : "black",
          }}
        >
          👎 Dislike {dislikes}
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          💬 Reply
        </span>
      </div>

      {/* Reply box */}
      {showReplyInput && (
        <div>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows={2}
            placeholder="Write your reply..."
            style={{ width: "100%", padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <button
            onClick={handleReplySubmit}
            style={{ marginTop: "0.5rem", padding: "0.4rem 0.8rem", borderRadius: "5px", backgroundColor: "#2563eb", color: "white", border: "none" }}
          >
            Post Reply
          </button>
        </div>
      )}

      {/* Replies (if any) */}
      {replies.length > 0 && (
        <div style={{ marginTop: "1rem", paddingLeft: "1rem", borderLeft: "2px solid #e5e7eb" }}>
          {replies.map((reply, idx) => (
            <p key={idx} style={{ marginBottom: "0.5rem" }}>
              <strong>You:</strong> {reply}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
