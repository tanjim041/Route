import React from "react";
import { useParams } from "react-router-dom";

function AuthorPage() {
  const { id } = useParams();

  return (
      <div className="card">
      <h2>Author Profile</h2>
      <p>This is the profile for author ID: {id}</p>
    </div>
  );
}

export default AuthorPage;