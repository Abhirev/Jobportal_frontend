import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddJob from "./pages/AddJob";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getUserRole } from "./auth"; // Import function

const App = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUserRole(); // Fetch username and role
      if (userData) {
        setUsername(userData.username);
        setRole(userData.role);
      }
    };
    fetchUserData();
  }, []);

  return (
    <Router>
      <Header username={username} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/admin" element={<AdminPage username={username} role={role} />} />
        <Route path="/user" element={<UserPage username={username} role={role} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
