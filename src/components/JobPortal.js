import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, TextField, Card, CardContent, Typography, CircularProgress } from "@mui/material";

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://jobportal-backend-hb98.onrender.com/jobs")
      .then(response => {
        console.log("Fetched Jobs:", response.data); // Debugging
        if (Array.isArray(response.data)) {
          setJobs(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
          setJobs([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
        setError("Failed to load jobs.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <TextField
        label="Search Jobs"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      {loading && <CircularProgress style={{ display: "block", margin: "20px auto" }} />}
      {error && <Typography color="error">{error}</Typography>}

      {jobs.length > 0 ? (
        jobs
          .filter((job) => job.postTitle?.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((job) => (
            <Card key={job.postId} style={{ marginBottom: "10px", padding: "10px" }}>
              <CardContent>
                <Typography variant="h6">{job.postTitle || "No Title"}</Typography>
                <Typography>{job.companyName || "Unknown Company"}</Typography>
                <Typography color="textSecondary">{job.location || "No Location"}</Typography>
              </CardContent>
            </Card>
          ))
      ) : (
        !loading && <Typography>No jobs found.</Typography>
      )}

      <Button variant="outlined" color="secondary" style={{ marginTop: "20px" }}>
        Sign Up
      </Button>
    </div>
  );
};

export default JobPortal;
