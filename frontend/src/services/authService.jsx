import { getCsrfToken } from "../utils/getCsrfToken";

export const loginUser = async (loginData) => {
  try {

    const csrfToken = await getCsrfToken();

    if (!csrfToken) {
      throw new Error("CSRF Token is missing");
    }

    console.log("Sending loginInput: ", loginData);

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "XSRF-TOKEN": await getCsrfToken(),
       },
      credentials: "include",
      body: JSON.stringify(loginData),
    });

    console.log("Response from the backend: ", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("🔴 Error received from the backend: ", errorData);
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    console.log("✅ Data received from backend: ", data);

    if (!data.token) {
      console.error("🔴 Access Token not received: ", data);
      throw new Error("Access Token not received");
    }

    localStorage.setItem("accessToken", data.token);
    console.log("✅ Access Token stored successfully!");

    return data;

  } catch (error) {
    console.error("❌ Error in the loginUser function: ", error);
    throw error;
  }
};