import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // send cookies automatically
});

// atualizar o token automaticamente
// update the token automatically
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // erro 401 (Token expirado), não atualizar
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log("🔄 Refreshing token...");
        const refreshResponse = await axios.get("http://localhost:3000/api/auth/refresh-token", {}, { withCredentials: true });

        if (refreshResponse.data.token) {
          console.log("✅ Token refreshed!");
          // Tenta novamente a requisição original
          // Retry the original request
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.log("❌ Error refreshing token: ", refreshError);
      }
    }

    return Promise.reject(error)
  }
);