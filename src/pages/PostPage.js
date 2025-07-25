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
    <div style={{ padding: "1rem" }}>
      <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
      </h3>
      <p>
        Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum
      </p>

      <div
        style={{
          backgroundColor: "#5b0000",
          height: "150px",
          margin: "1rem 0",
          borderRadius: "4px",
        }}
      ></div>

      <p>
        Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "1rem 0" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#1e3a8a",
          }}
        ></div>
        <div>
          <p style={{ margin: 0, fontWeight: "bold" }}>
            <Link to="/author/123">Author Name</Link>
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>7 January 2025</p>
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
          style={{ width: "100%", height: "60px", padding: "0.5rem" }}
        />
        <button
          onClick={handleAddComment}
          disabled={!newComment.trim()}
          style={{
            marginTop: "0.5rem",
            padding: "0.5rem 1rem",
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