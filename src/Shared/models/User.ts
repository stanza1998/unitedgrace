import userEvent from "@testing-library/user-event";
import { makeAutoObservable } from "mobx";
import { IUser, IUserRole } from "../Interface/IUser";
import AppStore from "../stores/AppStore";

export class UserModel implements IUser {
    uid: string;
    fullName: string;
    email: string;
    password: string;
    role: IUserRole;

    constructor(private store: AppStore, user: IUser) {
        makeAutoObservable(this)
        this.uid = user.uid;
        this.fullName = user.fullName;
        this.password = `${user.password}`;
        this.email = `${user.email}`;
        this.role = user.role

    }


    get asJson(): IUser {
        return {
            uid: this.uid,
            fullName: this.fullName,
            password: this.password,
            email: this.email,
            role: this.role,
        }
    }

}