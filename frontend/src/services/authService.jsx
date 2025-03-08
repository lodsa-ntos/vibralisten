import { getCsrfToken } from "../utils/getCsrfToken";

export const loginUser = async (loginInput) => {
  try {

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "XSRF-TOKEN": await getCsrfToken(),
       },
       credentials: "include",
      body: JSON.stringify({ login: loginInput }),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error during login: ", error);
    throw new Error(data.message || "Network error");
  }
};