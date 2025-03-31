import React, { useState, useEffect } from "react";
import { Button, Container, Typography, Box } from "@mui/material";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const role = localStorage.getItem("role");

  useEffect(() => {
    fetch("https://jobportal-backend-hb98.onrender.com/jobs") 
      .then(response => response.json())
      .then(setJobs)
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  const handleApply = async (jobId) => {
    const userId = localStorage.getItem("username"); // Username as user ID

    const response = await fetch("https://jobportal-backend-hb98.onrender.com/jobs/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, jobId }),
    });

    const result = await response.text();
    alert(result);
  };

  return (
    <Container>
      <Typography variant="h4">Available Jobs</Typography>
      {jobs.map((job) => (
        <Box key={job.id} p={2} border="1px solid gray" borderRadius="10px" my={2}>
          <Typography variant="h6">{job.title}</Typography>
          <Typography>{job.description}</Typography>
          {role === "USER" && (
            <Button variant="contained" color="primary" onClick={() => handleApply(job.id)}>
              Apply
            </Button>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default Jobs;
