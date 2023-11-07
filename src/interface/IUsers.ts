export interface IUsers {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface ICreateLogin {
    email: string;
    password: string;
}

export interface ICreateUser {
    email: string;
    name: string;
    confirm_password: string;
    password: string;
}

export interface IResponseSession {
    user: IUsers;
    token: string;
}

