import React from "react";
import { 
  Container, 
  Typography, 
  Box 
} from "@mui/material";
import JobList from "./JobList";  // Assuming JobList is in the same directory

const UserPage = ({ username }) => {
  return (
    <Container maxWidth="lg" style={{ textAlign: "center", padding: "20px" }}>
      {/* Header Section */}
      <Box 
        sx={{
          background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
          color: "white",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "30px"
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome, {username}
        </Typography>
        <Typography variant="h3" fontWeight="bold">
          Job Portal
        </Typography>
      </Box>

      {/* Job List */}
      <JobList />
    </Container>
  );
};

export default UserPage;