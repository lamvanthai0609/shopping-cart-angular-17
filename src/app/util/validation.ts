export const ErrorMessages = {
    required: 'This field is required.',
    email: 'Invalid email format.',
    minLength: (number:Number = 6) => `Password should have a minimum of ${number} characters.`
  };