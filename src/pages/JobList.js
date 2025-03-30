import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  TextField, 
  CircularProgress, 
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import { FaBriefcase, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  // Ensure role is always true for the demonstration
  const role = true;

  useEffect(() => {
    axios.get("http://localhost:8080/jobs")
      .then(response => {
        setJobs(response.data || []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleCloseApplyDialog = () => {
    setSelectedJob(null);
  };

  const handleSubmitApplication = () => {
    alert(`Applied to ${selectedJob.postTitle} at ${selectedJob.companyName}`);
    handleCloseApplyDialog();
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <TextField
        label="Search Jobs"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ 
          marginBottom: "30px",
          '& .MuiOutlinedInput-root': {
            borderRadius: '15px'
          }
        }}
      />

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="300px">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {jobs
            .filter((job) => job.postTitle?.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.postId}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: '15px',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box display="flex" alignItems="center" marginBottom={2}>
                      <FaBriefcase size={30} color="#1976d2" style={{ marginRight: '10px' }} />
                      <Typography variant="h6">{job.postTitle}</Typography>
                    </Box>
                    
                    <Box display="flex" alignItems="center" marginBottom={1}>
                      <FaBuilding size={20} color="#666" style={{ marginRight: '10px' }} />
                      <Typography color="textSecondary">{job.companyName}</Typography>
                    </Box>
                    
                    <Box display="flex" alignItems="center" marginBottom={2}>
                      <FaMapMarkerAlt size={20} color="#666" style={{ marginRight: '10px' }} />
                      <Typography>{job.location}</Typography>
                    </Box>
                    
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                      Experience Required: {job.reqExperience} years
                    </Typography>
                    
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      sx={{ 
                        marginTop: 'auto',
                        borderRadius: '10px'
                      }}
                      onClick={() => handleApply(job)}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}

      {/* Apply Dialog */}
      <Dialog 
        open={!!selectedJob} 
        onClose={handleCloseApplyDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5" align="center">
            Apply for {selectedJob?.postTitle}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
            <Typography>
              <strong>Company:</strong> {selectedJob?.companyName}
            </Typography>
            <Typography>
              <strong>Location:</strong> {selectedJob?.location}
            </Typography>
            <Typography>
              <strong>Experience Required:</strong> {selectedJob?.reqExperience} years
            </Typography>
            <TextField 
              fullWidth 
              label="Your Resume/CV" 
              variant="outlined" 
              type="file" 
              InputLabelProps={{ shrink: true }}
            />
            <TextField 
              fullWidth 
              label="Additional Notes" 
              variant="outlined" 
              multiline 
              rows={4} 
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseApplyDialog} color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmitApplication} color="primary" variant="contained">
            Submit Application
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default JobList;