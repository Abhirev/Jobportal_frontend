import React, { useState } from "react";
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Paper, 
  Container 
} from "@mui/material";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    roles: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful!");
        setFormData({ username: "", password: "", roles: "" }); // Clear form
      } else {
        setMessage("Error: Registration failed.");
      }
    } catch (error) {
      setMessage("Error: Could not connect to server.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper 
        elevation={6} 
        sx={{ 
          marginTop: 8, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: 4,
          borderRadius: 3,
          background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}
      >
        <Typography 
          component="h1" 
          variant="h4" 
          sx={{ 
            mb: 3, 
            fontWeight: 'bold', 
            background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Create Account
        </Typography>

        {message && (
          <Typography 
            color={message.includes("successful") ? "success.main" : "error.main"} 
            sx={{ mb: 2, textAlign: 'center' }}
          >
            {message}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <Button 
                  size="small" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              ),
            }}
          />
          <TextField
            label="Roles"
            name="roles"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.roles}
            onChange={handleChange}
            required
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            sx={{ 
              mt: 2, 
              py: 1.5, 
              borderRadius: 2,
              background: 'linear-gradient(45deg, #1976d2, #21CBF3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1565c0, #1976d2)'
              }
            }}
          >
            Sign Up
          </Button>
        </Box>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mt: 2 }}
        >
          Already have an account? <a href="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>Log in</a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;