import React from "react";
import "./HeaderArea.css";
import { AiOutlineSearch, AiFillHome, AiOutlineWallet } from "react-icons/ai";
import {
  FaPlusCircle,
  FaRegFlag,
  FaFacebookMessenger,
  FaBell,
  FaUsers,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";

function HeaderArea() {
  return (
    <div className="homepage">
      <div className="header">
        <div className="first-header">
          <div className="logo">
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ height: "70px", padding: "1rem" }}
            ></img>
          </div>
          <div className="Search">
            <AiOutlineSearch style={{ height: "4rem" }} />
            <input placeholder="Search Facebook" type={"search"} />
          </div>
        </div>
        <div className="middle-header">
          <div className="Icon">
            <AiFillHome style={{ fontsize: "2.3rem", color: "#1877F2" }} />
          </div>
          <div className="Icon">
            <FaRegFlag style={{ fontsize: "2.3rem" }} />
          </div>
          <div className="Icon">
            <MdOndemandVideo style={{ fontsize: "2.3rem" }} />
          </div>
          <div className="Icon">
            <FaUsers style={{ fontsize: "2.3rem" }} />
          </div>
          <div className="Icon">
            <AiOutlineWallet style={{ fontsize: "2.3rem" }} />
          </div>
        </div>
        <div className="third-header">
          <div className="pulse">
            <FaPlusCircle style={{ fontsize: "2rem" }} />
          </div>
          <div className="pulse">
            <FaFacebookMessenger style={{ fontsize: "2rem" }} />
          </div>
          <div className="pulse">
            <FaBell style={{ fontsize: "2rem" }} />
          </div>
          <div className="pulse">
            <img src="/images/1.jpeg" alt="dp" style={{ height: "40px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderArea;
