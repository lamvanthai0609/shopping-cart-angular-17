interface IErrorMessages {
    required: string;
    email: string;
    minLength: (number?: number) => string;
}

export const ErrorMessages: IErrorMessages = {
    required: 'This field is required.',
    email: 'Invalid email format.',
    minLength: (number: number = 6) => `Password should have a minimum of ${number} characters.`,
};
