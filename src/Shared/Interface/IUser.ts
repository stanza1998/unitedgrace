import React from "react"


export const defaultUser: IUser = {
    uid:"",
    fullName: "",
    phone: "",
    location: "",
    email: "",
    password: "",
    role: {

        Admin: false,
        Client: true
    }
}


export interface IUserRole {
    Admin: boolean;
    Client: boolean;
}

export interface IUser {
    uid:string
    fullName: string;
    phone: string;
    location: string;
    email: string;
    password?: string;
    role: IUserRole | any
}