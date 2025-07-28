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
    <div className="card comment-card">
      {/* Header */}
      <div className="comment-header">
        <div className="avatar"></div>
        <p style={{ margin: 0 }}>
          <Link to={`/author/${comment.author.id}`} style={{ fontWeight: "bold", color: "#000" }}>
            {comment.author.name}
          </Link>{" "}
          <span className="comment-date"> - {comment.date}</span>
        </p>
      </div>

      {/* Text */}
      <p style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>{comment.text}</p>

      {/* Actions */}
      <div className="comment-actions">
        <span
          className={`like-btn ${userReaction === "like" ? "active" : ""}`}
          onClick={handleLike}
        >
          👍 Like {likes}
        </span>
        <span
          className={`dislike-btn ${userReaction === "dislike" ? "active" : ""}`}
          onClick={handleDislike}
        >
          👎 Dislike {dislikes}
        </span>
        <span
          className="reply-btn"
          onClick={() => setShowReplyInput(!showReplyInput)}
        >
          💬 Reply
        </span>
      </div>

      {/* Reply box */}
      {showReplyInput && (
        <div>
          <textarea
            className="reply-textarea"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows={2}
            placeholder="Write your reply..."
          />
          <button
            className="reply-button"
            onClick={handleReplySubmit}
          >
            Post Reply
          </button>
        </div>
      )}

      {/* Replies (if any) */}
      {replies.length > 0 && (
        <div className="replies-container">
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
