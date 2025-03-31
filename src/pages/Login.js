import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState(null);

    useEffect(() => {
        fetch("https://jobportal-backend-hb98.onrender.com/userRole", { credentials: "include" })
            .then(response => response.json())
            .then(data => {
                setRole(data.role);
                if (data.role.includes("ROLE_ADMIN")) {
                    navigate("/admin");
                } else {
                    navigate("/user");
                }
            })
            .catch(error => console.error("Error fetching role:", error));
    }, [navigate]);

    const handleLogin = () => {
        window.location.href = "https://jobportal-backend-hb98.onrender.com/login";
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
