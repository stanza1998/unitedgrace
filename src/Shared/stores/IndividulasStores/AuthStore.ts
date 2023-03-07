import { makeObservable, runInAction } from "mobx";
import { IUser } from "../../Interface/IUser";
import { UserModel } from "../../models/User";
import AppStore from "../AppStore";
import Store from "../store";


export default class AuthStore {
    me: UserModel | null = null;
    loading: boolean = false;
    error: boolean = false;

    constructor(private store: AppStore) {
        makeObservable(this, {
            me: true,
            meJson: true,
            loading: true,
            role: true,
            fullName: true,
            error: true
        });
    }

    // get uid
    get meJson() {
        // console.log("Store User ", this.me);
        return this.me ? this.me.asJson : null;
    }

    // get role
    get role() {
        const _role = this.me ? this.me.asJson.role : "Client";
        return _role as "Client" | "Admin";
    }

    // get department
    get fullName() {
        return this.me ? this.me.asJson.fullName : null;
    }

    setLoading(loading: boolean) {
        runInAction(() => {
            this.loading = loading;
        });
    }

    logIn(item: IUser | any) {
        runInAction(() => {
            this.me = new UserModel(this.store, item);
        });
    }

    logOut() {
        runInAction(() => {
            this.me = null;
            this.error = false;
        });
    }

    // load(items: IUser[] = []) {
    //     runInAction(() => {
    //         items.forEach((item) =>
    //             this.items.set(item.uid, new UserModel(this.store, item))
    //         );
    //     });
    // }
}
