const API_BASE_URL = process.env.NODE_ENV === "production" 
? "https://vibralisten.com/api" 
: "http://localhost:3000/api";


const CSRF_BASE_URL = process.env.NODE_ENV === "production" 
? "https://vibralisten.com" 
: "http://localhost:3000";

export { API_BASE_URL, CSRF_BASE_URL };