export const getCsrfToken = () => {
  const match = document.cookie.match(new RegExp("(^| )XSRF-TOKEN=([^;]+)"));
  return match ? match[2] : null;
};