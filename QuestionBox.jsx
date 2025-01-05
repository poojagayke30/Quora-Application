import  { useState } from "react";
import'./QuestionBox.css'
function QuestionBox() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleAddQuestion = () => {
    alert(`Question Added: ${questionTitle}`);
    setQuestionTitle("");
  };

  const handlePost = () => {
    alert(`Post Created: ${postContent}`);
    setPostContent("");
  };

  return (
    <div className="question-box">
      <div className="add-question">
        <input
          type="text"
          placeholder="Question Title"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
        />
        <button onClick={handleAddQuestion}>Add</button>
        <button onClick={() => setQuestionTitle("")}>Cancel</button>
      </div>
      <div className="create-post">
        <select>
          <option>Public</option>
          <option>Private</option>
        </select>
        <textarea
          placeholder="Write your answer..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
}

export default QuestionBox;
