import React, { useState } from "react";
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  TextField 
} from "@mui/material";

const AdminPage = ({ username }) => {
  const [showForm, setShowForm] = useState(false);
  const [jobData, setJobData] = useState({
    postTitle: "",
    postDesc: "",
    reqExperience: "",
    salary: "",
    companyName: "",
    location: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jobportal-backend-hb98.onrender.com/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        alert("Job added successfully!");
        setShowForm(false);
        setJobData({
          postTitle: "",
          postDesc: "",
          reqExperience: "",
          salary: "",
          companyName: "",
          location: "",
        });
      } else {
        alert("Failed to add job");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding job");
    }
  };

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
          Job Portal - Admin
        </Typography>
      </Box>

      {/* Add Job Button */}
      <Button 
        variant="contained" 
        color="primary" 
        size="large"
        onClick={() => setShowForm(true)}
        sx={{ 
          marginBottom: "30px",
          padding: "15px 30px",
          fontSize: "18px"
        }}
      >
        Add New Job
      </Button>

      {/* Add Job Dialog */}
      <Dialog 
        open={showForm} 
        onClose={() => setShowForm(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5" align="center">
            Add New Job Listing
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              padding: 2
            }}
          >
            <TextField
              fullWidth
              label="Job Title"
              name="postTitle"
              value={jobData.postTitle}
              onChange={handleChange}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Job Description"
              name="postDesc"
              value={jobData.postDesc}
              onChange={handleChange}
              required
              multiline
              rows={4}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Experience Required (Years)"
              name="reqExperience"
              type="number"
              value={jobData.reqExperience}
              onChange={handleChange}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Salary"
              name="salary"
              type="number"
              value={jobData.salary}
              onChange={handleChange}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={jobData.companyName}
              onChange={handleChange}
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              required
              variant="outlined"
            />

            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginTop: 2 
              }}
            >
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
              >
                Submit Job
              </Button>
              <Button 
                variant="contained" 
                color="error"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default AdminPage;