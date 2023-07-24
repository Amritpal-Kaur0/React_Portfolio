// Function to validate the name field
export const validateName = (name) => {
    return name.trim() !== '';
  };
  
  // Function to validate the email field
  export const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  
  // Function to check if the form is valid
  export const isFormValid = (formData) => {
    const { name, email } = formData;
  
    const errors = {
      name: !validateName(name),
      email: !validateEmail(email),
    };
  
    return Object.values(errors).every((error) => !error);
  };