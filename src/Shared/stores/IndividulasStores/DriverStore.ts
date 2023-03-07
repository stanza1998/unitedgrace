import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../store";
import { IDriver } from "../../Interface/IDriver";
import { DriverModel } from "../../models/DriverModel";



export default class DriverStore extends Store<IDriver, DriverModel> {
    items = new Map<string, DriverModel>();

    constructor(store: AppStore) {
        super(store)
        makeObservable(this, {
            items: true,
            selected: true,
        });
        this.store = store;
    }

    load(items: IDriver[] = []) {
        runInAction(() => {
            items.forEach((item) =>
                this.items.set(item.id, new DriverModel(this.store, item))
            );
        });
    }

    getById(id: string) {
        return this.items.get(id);
    }

}



