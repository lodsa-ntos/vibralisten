const getActivePage = () => {
  const path = window.location.pathname;

  if (path === "/") return "home";
  if (path === "/home") return "home";
  if (path === "/faqs") return "faqs";
  if (path === "/about") return "about";
  if (path === "/contact") return "contact";

  return"home";
};

export default getActivePage;