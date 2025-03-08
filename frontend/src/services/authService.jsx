export const loginUser = async (loginInput) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: loginInput }),
    });

    const data = await response.json();

    if (data.success) {
      return data;
    } else {
      throw new Error(data.message || "Login failed");
      
    }
  } catch (error) {
    throw new Error(data.message || "Network error");
  }
};