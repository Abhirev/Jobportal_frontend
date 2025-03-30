import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const navigate = useNavigate();

  useEffect(() => {
    // Re-fetch user details when page reloads
    const storedRole = localStorage.getItem("role");
    const storedUsername = localStorage.getItem("username");
    if (storedRole) setRole(storedRole);
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setRole(null);
    setUsername(null);
    navigate("/");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {username && (
          <Typography variant="h6" style={{ marginRight: "20px" }}>
            Hello, {username}!
          </Typography>
        )}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        <Button color="inherit" href="/">HOME</Button>
        <Button color="inherit" href="/jobs">All Jobs</Button>
        
        {role === "ADMIN" && <Button color="inherit" href="/addjob">Add Job</Button>}

        {!role ? (
          <>
            <Button color="inherit" href="/signup">Sign Up</Button>
            <Button color="inherit" href="/login">Login</Button>
          </>
        ) : (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
