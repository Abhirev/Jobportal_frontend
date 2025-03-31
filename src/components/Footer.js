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
      <Button color="secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSc3INqn-jqxsw5urcienLB-jNqAYjoEFodrI5Nl5R42jtLpXQ/viewform?usp=dialog" target="_blank">
        Give Feedback
      </Button>
    </Box>
  );
};

export default Footer;
