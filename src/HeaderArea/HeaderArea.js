import React from "react";
import "./HeaderArea.css";

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
        </div>
      </div>
    </div>
  );
}

export default HeaderArea;
