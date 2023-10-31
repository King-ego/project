export interface IUsers {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface ICreateUser {
    email: string;
    password: string;
}

export interface IResponseSession {
    user: IUsers;
    token: string;
}

