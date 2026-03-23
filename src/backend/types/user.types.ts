import { Document, Types } from "mongoose";

export interface IAddress {
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

export interface IUserSchema extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    dateOfBirth: Date;
    address: IAddress;
    tokens: number;
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}

export interface UserType {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: IAddress;
    tokens: number;
    role: "user" | "admin";
    createdAt: Date;
    updatedAt: Date;
}
