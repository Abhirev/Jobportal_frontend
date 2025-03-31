export const getUserRole = async () => {
    try {
      const response = await fetch("https://jobportal-backend-hb98.onrender.com/auth/role", {
        method: "GET",
        credentials: "include", // If using sessions or cookies
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch role");
      }
  
      const data = await response.json();
      return data; // Returns { username: "AbhishekRevankar", role: "admin" }
    } catch (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
  };
  