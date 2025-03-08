export const detectLoginType = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{9,15}$/;

  if (emailRegex.test(input)) {
    return { email: input };
  } else if (phoneRegex.test(input)) {
    return { phone: input };
  } else {
    return { username: input };
  }
};