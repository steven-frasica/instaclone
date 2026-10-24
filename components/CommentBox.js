"use client";

import { useState } from "react";

export default function CommentBox({ username }) {
  // Keep the comment input's current value in React state.
  const [text, setText] = useState("");

  // Send the comment and the profile owner's username to the comments API.
  async function handleSubmit() {
    await fetch("/api/comments", {
      method: "POST",
      // Convert the username and comment text into a JSON string for the request body.
      body: JSON.stringify({ username, text }),
    });
    // Clear the input after the request completes.
    setText("");
  }

  return (
    <div>
      <input 
      value={text} 
      onChange={(e) => setText(e.target.value)}
      placeholder="Add a comment..." 
      />
      <button onClick={handleSubmit}>Comment</button>
    </div>
  );
}
