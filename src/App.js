import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import AuthorPage from "./pages/AuthorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/author/:id" element={<AuthorPage />} />
      </Routes>
    </Router>
  );
}

export default App;