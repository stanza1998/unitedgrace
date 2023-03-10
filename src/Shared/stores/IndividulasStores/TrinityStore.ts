import { makeObservable, runInAction } from "mobx";
import react from "react"
import { ITrinity } from "../../Interface/ITrinity";
import { TrinityModel } from "../../models/TrinityModel";
import AppStore from "../AppStore";
import Store from "../store";



export default class TrinityStore extends Store<ITrinity, TrinityModel
> {



    items = new Map<string, TrinityModel
    >();
    currentUser: TrinityModel
        | null = null;
    loading: boolean = true;



    constructor(store: AppStore) {
        super(store);
        makeObservable(this, {
            items: true,
            selected: true,
            currentUser: true,
            loading: true,
        });
        this.store = store;
    }

    load(items: ITrinity[] = []) {
        runInAction(() => {
            items.forEach((item) =>
                this.items.set(item.id, new TrinityModel
                    (this.store, item))
            );
        });
    }

    loadCurrentUser(item: ITrinity) {
        runInAction(() => {
            this.currentUser = new TrinityModel
                (this.store, item);
        });
    }

    removeCurrentUser() {
        runInAction(() => {
            this.currentUser = null;
        });
    }
}
