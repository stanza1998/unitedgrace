import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../store";
import { IMattress } from "../../Interface/IMattress";
import { MattressModel } from "../../models/MattressModel";



export default class MattressStore extends Store<IMattress, MattressModel> {
  items = new Map<string, MattressModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }
  load(items: IMattress[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new MattressModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}



