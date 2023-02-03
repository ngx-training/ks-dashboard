export interface AuthData {
    identifier: string;
    password: string;
}

export interface JwtUser {
    jwt: string;
    user: User;
}

export interface User {
    id?: number;
    email: string;
    username: string;
    confirmed?: boolean;
}

export interface RegisterUser extends User {
    password: string;
}