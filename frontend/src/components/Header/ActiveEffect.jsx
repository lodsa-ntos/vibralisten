const getActivePage = () => {
  const path = window.location.pathname;

  if (path === "/") return "home";
  if (path === "#about") return "about";
  if (path === "#faqs") return "faqs";
  if (path === "#contact") return "contact";
  if (path === "#terms") return "terms";
  if (path === "#privacy") return "privacy";

  return"home";
};

export default getActivePage;