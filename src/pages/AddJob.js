import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const AddJob = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4">Add a Job</Typography>
      <Box mt={2}>
        <TextField label="Job Title" variant="outlined" fullWidth margin="normal" />
        <TextField label="Company Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Location" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth>Add Job</Button>
      </Box>
    </Box>
  );
};

export default AddJob;
