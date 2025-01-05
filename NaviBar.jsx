import { useState } from "react";
import Avatar from "react-avatar";
import { NavLink } from "react-router-dom";
import quoraLogo from "../assets/quora copy.png";
import globeIcon from "../assets/globe.png";
import searchIcon from "../assets/lens.png";
import profile from"./profile 1.jpg";
import ASKQues from "./AskQues";
import './Navi.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const navLinkStyles = ({ isActive }) =>
    `relative flex items-center justify-center nav-icon ${
      isActive
        ? "border-b-4 rounded border-red-600 text-red-600 pb-2"
        : "text-gray-500 hover:text-red-400 pb-3"
    }`;
return (
    <div className="navbar-container">
      {/* Logo */}
      <NavLink to="/" className="flex-shrink-0">
        <img src={quoraLogo} alt="Quora" className="logo" />
      </NavLink>
{/* Navigation Links */}
      <div className="nav-links">
        <NavLink to="/" className={navLinkStyles}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="nav-icon">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
          </svg>
        </NavLink>
        <NavLink to="/clipboard" className={navLinkStyles}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 2048 2048" className="nav-icon">
            <path d="M1792 256v1792H256V256h512q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100h512zM640 512h768V384h-256V256q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50v128H640v128zm1024-128h-128v256H512V384H384v1536h1280V384zM768 896h768v128H768V896zm0 384h768v128H768v-128zm0 384h768v128H768v-128zM512 896h128v128H512V896zm0 384h128v128H512v-128zm0 384h128v128H512v-128z" />
          </svg>
        </NavLink>
        <NavLink to="/answer" className={navLinkStyles}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="nav-icon">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        </NavLink>
        <NavLink to="/notification" className={navLinkStyles}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="nav-icon">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
          </svg>
        </NavLink>
      </div>
{/* Search Bar */}
      <div className="search-bar">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          type="text"
          placeholder="Search Quora"
          className="search-input"
        />
      </div>
{/* Profile and Actions */}
      <div className="profile-actions">
        <button className="try-quora-btn">Try Quora+</button>
        <img src={globeIcon} alt="Globe" className="globe-icon" />
        <Avatar
          src={ profile}
          name="Pooja"
          round
          size="40"
          className="avatar"
        />
        <button
          className="add-question-btn"
          onClick={() => setIsOpen(true)}
        >
          Add Question
        </button>
        {isOpen && (
          <ASKQues
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            initialTab={"Add Question"}
          />
        )}
        
      </div>
      
    </div>
  );
};
export default Navbar;
