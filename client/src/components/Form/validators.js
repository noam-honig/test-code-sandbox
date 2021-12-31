const isEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const defaultValidators = {
  email: isEmail
};

export const errorMessagesClient = {
  email: "Wrong email!",
  confirmPassword: "Passwords must be the same!"
};

export const errorMessagesServer = {
  404: "User not found!",
  403: "Wrong credentials!",
  409: "Email already in use!",
  500: "Something went wrong. Try again later"
};
