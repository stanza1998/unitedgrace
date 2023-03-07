import { makeObservable, runInAction } from "mobx";
import react from "react"
import { IIndoor } from "../../Interface/IIndoor";
import { ILaundry } from "../../Interface/ILaundry";
import { LaundryModel } from "../../models/LaundryModel";
import AppStore from "../AppStore";
import Store from "../store";

export default class LaundryStore extends Store<ILaundry, LaundryModel>{
  items = new Map<string, LaundryModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }

  load(items: ILaundry[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new LaundryModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}


