export const getCsrfToken = async () => {
  try {
    const response = await fetch("http://localhost:3000/csrf-token", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to get CSRF token");
    }
  
    const data = await response.json();
    console.log(data.csrfToken);
    return data.csrfToken;

  } catch (error) {
    console.error("CSRF Token fetch error: ", error);
    return null;
  }
};