import { useState } from "react";
import AskQues from "./AskQues";
import question from "../assets/question.png";
import pen from "../assets/pen.png";
import edit from "../assets/edit.png";
import './Search.css'

const SearchQA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("Add Question");

  const openModal = (selectedTab) => {
    setTab(selectedTab);
    setIsOpen(true);
  };

  return (
    <div className="bg-white p-4 m-3 h-auto border rounded-lg shadow-md">
      {/* Input Box */}
      <div className="flex items-center">
        <input type="text" className="bg-gray-100 p-2 ml-3 placeholder-gray-300 border rounded-sm w-full" placeholder="What do you want to ask or share?" />
      </div>
      <div className="flex pt-2 text-gray-700 justify-around">
        {/* Ask Button */}
        <div onClick={() => openModal("Add Question")} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
          <img src={question} alt="Ask" className="w-4 h-4 mr-2" style={{ width: "20px", height: "20px" }} />
          <h5 className="ml-1">Ask Question</h5>
        </div>
        {/* Answer Button */}
        <div onClick={() => openModal("Create Post")} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
          <img src={edit} alt="Answer" className="w-5 h-5" style={{ width: "20px", height: "20px" }} />
          <h5 className="ml-1">Answer</h5>
        </div>
        {/* Post Button */}
        <div onClick={() => openModal("Create Post")} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
          <img src={pen} alt="Pen" className="w-5 h-5" style={{ width: "20px", height: "20px" }} />
          <h5 className="ml-1">Post</h5>
        </div>
      </div>
      {/* ASKQues Modal */}
      {isOpen && (
        <AskQues isOpen={isOpen} setIsOpen={setIsOpen} initialTab={tab} />
      )}
    </div>
  );
};

export default SearchQA;
