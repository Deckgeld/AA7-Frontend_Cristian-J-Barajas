export interface User {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    status: boolean;
}

export interface singIn{
    email: string;
    password: string
}

////
export interface singInResponse{
    hasError: boolean;
    message: string,
    model: model;
    requestId: string;
}

export interface model{
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    status: boolean
}

