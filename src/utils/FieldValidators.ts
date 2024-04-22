// src/utils/FieldValidators.ts

// Validate email with a regular expression pattern
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate password with specified criteria
  export const isValidPassword = (password: string): boolean => {
    // For this example, the password must be at least 8 characters long,
    // contain at least one uppercase letter, one lowercase letter, and one digit.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  