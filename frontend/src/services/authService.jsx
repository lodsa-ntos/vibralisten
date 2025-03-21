import { getCsrfToken } from "../utils/getCsrfToken";

export const loginUser = async (loginData) => {
  try {

    const csrfToken = await getCsrfToken();

    if (!csrfToken) {
      console.error("❌ CSRF Token is missing. Possible issue with cookies or session.");
      throw new Error("CSRF Token is missing");
    }

    console.log("Sending loginInput: ", loginData);

    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "XSRF-TOKEN": csrfToken,
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

    return data;

  } catch (error) {
    console.error("❌ Error in the loginUser function: ", error);
    throw error;
  }
};


export const SignupUser = async (signupData) => {
  try {

    const csrfToken = await getCsrfToken();

    if (!csrfToken) {
      console.error("❌ CSRF Token is missing. Possible issue with cookies or session.");
      throw new Error("CSRF Token is missing");
    }

    console.log("Sending signup request with data: ", signupData);

    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "XSRF-TOKEN": csrfToken,
       },
      credentials: "include",
      body: JSON.stringify(signupData),
    });

    console.log("Backend response: ", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("🔴  Error received from the backend: ", errorData);
      throw new Error(errorData.message || "Signup failed. Please try again.");
    }

    const data = await response.json();
    console.log("✅ Data received from backend: ", data);

    return data;

  } catch (error) {
    console.error("❌ Error during signup process: ", error.message);
    throw error;
  }
};