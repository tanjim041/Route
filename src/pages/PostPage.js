import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "../components/Comment";
import Pagination from "../components/Pagination";
import ReactionBar from "../components/ReactionBar";

const COMMENTS_PER_PAGE = 5;

const initialComments = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  text: `This is a sample comment number ${i + 1}`,
  author: { name: `User ${i + 1}`, id: 200 + i },
  date: "10 February 2025",
}));

function PostPage() {
  const [page, setPage] = useState(1);
  const [userComments, setUserComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const start = (page - 1) * COMMENTS_PER_PAGE;
  const paginatedComments = userComments.slice(start, start + COMMENTS_PER_PAGE);
  const totalPages = Math.ceil(userComments.length / COMMENTS_PER_PAGE);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: userComments.length + 1,
      text: newComment.trim(),
      author: { name: "Current User", id: 999 },
      date: new Date().toLocaleDateString(),
    };
    setUserComments([comment, ...userComments]);
    setNewComment("");
    setPage(1);
  };

  return (
    <div className="card">
      <h3>Your First Step in Programming</h3>
      <p>
        Every coder remembers their first program — usually something like{" "}
        <strong>"print hello world"</strong>. It might seem small, but it’s the
        first step in a long and exciting journey.
      </p>

      <div className="post-image">
        <img
          src="/assets/print-hello-world.jpg"
          alt="Hello World code"
          style={{ width: "100%", height: "auto", borderRadius: "4px" }}
        />
      </div>

      <p>
        That simple output — just two words — marks the beginning of a deeper
        understanding of logic, problem-solving, and creativity. Let’s talk
        about your own first experience with code.
      </p>

      <div className="comment-header" style={{ margin: "1rem 0" }}>
        <div className="avatar"></div>
        <div>
          <p style={{ margin: 0, fontWeight: "bold" }}>
            <Link to="/author/123">Author Name</Link>
          </p>
          <p className="comment-date">7 January 2025</p>
        </div>
      </div>

      <ReactionBar />

      <hr />
      <h3>Comments</h3>

      <div style={{ marginBottom: "1rem" }}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          className="reply-textarea"
          style={{ height: "60px" }}
        />
        <button
          onClick={handleAddComment}
          disabled={!newComment.trim()}
          className="reply-button"
          style={{
            opacity: newComment.trim() ? 1 : 0.5,
            cursor: newComment.trim() ? "pointer" : "not-allowed",
          }}
        >
          Submit
        </button>
      </div>

      {paginatedComments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
      <Pagination current={page} total={totalPages} onChange={setPage} />
    </div>
  );
}

export default PostPage;
