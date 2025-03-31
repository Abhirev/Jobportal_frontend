import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Container } from "@mui/material";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://jobportal-backend-hb98.onrender.com/jobs")  // Adjust API endpoint as needed
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Available Jobs
      </Typography>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography color="textSecondary">{job.company}</Typography>
                <Typography color="textSecondary">{job.location}</Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllJobs;
