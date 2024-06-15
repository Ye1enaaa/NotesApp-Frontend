interface UserLoginCredentials {
    email: string;
    password: string;
}

type Token = string;

interface UserNotes {
    title: string;
    body: string;
    is_public: boolean;
}

