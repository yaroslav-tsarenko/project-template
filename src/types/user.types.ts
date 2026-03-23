export type UserRole = "user" | "admin";

export interface IAddress {
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: IAddress;
    role: UserRole;
    tokens: number | null;
    createdAt: string;
    updatedAt: string;
}

export type Nullable<T> = T | null;

export interface UserResponse {
    user: IUser;
}
