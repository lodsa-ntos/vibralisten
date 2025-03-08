export const getCsrfToken = async () => {

  const response = await fetch("http://localhost:3000/csrf-token", {
    credentials: "include",
  });

  const data = await response.json();

  return data.csrfToken;
};