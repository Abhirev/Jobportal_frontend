import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bottom: 0,
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <Typography variant="body2">Developed by Abhishek & Utkarsh</Typography>
      <Button color="secondary" href="https://forms.google.com/dummy" target="_blank">
        Give Feedback
      </Button>
    </Box>
  );
};

export default Footer;
