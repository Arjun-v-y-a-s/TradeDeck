
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const logout = () => {
    document.cookie = "token=; Max-Age=0; path=/;";
     window.location.href = "http://localhost:5173/"; 
  };

  return (
    <div className="username-container" style ={{position: "relative",}} >
      {/* Clickable text */}
      <h6
        onClick={() => setShowLogout(!showLogout)}
        style={{ cursor: "pointer" }}
      >
        USER ID
      </h6>

      {/* Logout button */}
      {showLogout && (
        <button
          onClick={logout}
          style={{
            position: "absolute",
            top: "100%", // text ke neeche
            right: 0,
            background: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default LogoutButton;
