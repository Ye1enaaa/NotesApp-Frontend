export interface UserLoginCredentials {
    email: string;
    password: string;
}

export type Token = string;

export interface UserNotes {
    title: string;
    body: string;
    is_public: boolean;
}

