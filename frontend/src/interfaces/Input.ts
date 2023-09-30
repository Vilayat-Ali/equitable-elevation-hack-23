export interface RegisterPageInput {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginPageInput {
    email: string;
    password: string;
}