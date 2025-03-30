import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Container, Typography, Box } from "@mui/material";
import { FaBriefcase, FaUsers, FaBuilding } from "react-icons/fa";

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: "center", padding: "0px" }}>
      {/* Hero Section */}
      <Box
  sx={{
    backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')`, // Direct image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "70vh", // Using minHeight for better rendering
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    borderRadius: "15px",
    marginBottom: "30px",
    position: "relative", // Ensure it is placed correctly
    width: "100%", // Ensure full width

  }}
>
  <Typography variant="h3" fontWeight="bold" sx={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "10px", borderRadius: "10px" }}>
    Welcome to the Future of Job Search
  </Typography>
</Box>


      {/* Scrolling Company Logos */}
      <Box sx={{ overflow: "hidden", whiteSpace: "nowrap", padding: "10px 0",     border: "2px solid red" }}>
        <motion.div
          style={{
            display: "flex",
            alignItems: "center", // Align logos properly
          }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" width="120" style={{ margin: "0 20px" }} />
  <img src="https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" alt="Microsoft" width="120" style={{ margin: "0 20px" }} />
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" width="120" style={{ margin: "0 20px" }} />
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" width="120" style={{ margin: "0 20px" }} />
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" width="120" style={{ margin: "0 20px" }} />
        </motion.div>
      </Box>

      {/* Call to Action */}
      <Box mt={4}>
        <Typography variant="h5">Find Your Dream Job Today!</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} component={Link} to="/jobs">
          Browse Jobs
        </Button>
      </Box>

      {/* Features Section */}
      <Box mt={5} display="flex" justifyContent="space-around">
        <Box textAlign="center">
          <FaBriefcase size={50} color="#1976d2" />
          <Typography variant="h6">1000+ Job Listings</Typography>
        </Box>
        <Box textAlign="center">
          <FaUsers size={50} color="#1976d2" />
          <Typography variant="h6">Top Companies Hiring</Typography>
        </Box>
        <Box textAlign="center">
          <FaBuilding size={50} color="#1976d2" />
          <Typography variant="h6">Trusted by Millions</Typography>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box mt={5} p={3} sx={{ background: "#f8f8f8", borderRadius: "10px" }}>
        <Typography variant="h5">What Our Users Say</Typography>
        <Typography>"This portal helped me land my dream job in just 2 weeks!" - Rahul, Software Engineer</Typography>
        <Typography>"The UI is so clean, and the jobs are well-categorized." - Priya, Data Analyst</Typography>
      </Box>
    </Container>
  );
};

export default Home;
