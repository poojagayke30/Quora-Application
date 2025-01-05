import  { useState } from "react";
import'./AskQues'
const AskShareSection = () => {
  const [activeTab, setActiveTab] = useState("Ask");
  // vite --port 3005
  return (
    <div className="w-full max-w-2xl mx-auto bg-white border rounded-md shadow-md p-4">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          {/* Replace with user profile image */}
          <span className="text-gray-500 text-xl font-semibold">A</span>
        </div>
        <input
          type="text"
          placeholder="What do you want to ask or share?"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 outline-none"
        />
      </div>
      <div className="mt-3 flex justify-between">
        <button
          className={`flex-1 text-center py-2 font-semibold ${
            activeTab === "Ask"
              ? "text-blue-500 border-b-4 border-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Ask")}
        >
          Ask
        </button>
        <button
          className={`flex-1 text-center py-2 font-semibold ${
            activeTab === "Answer"
              ? "text-blue-500 border-b-4 border-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Answer")}
        >
          Answer
        </button>
        <button
          className={`flex-1 text-center py-2 font-semibold ${
            activeTab === "Post"
              ? "text-blue-500 border-b-4 border-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Post")}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AskShareSection;
