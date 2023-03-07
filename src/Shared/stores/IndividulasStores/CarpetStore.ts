import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../store";
import { CarpetModel } from "../../models/CarpetModel";
import { ICarpet } from "../../Interface/ICarpet";



export default class CarpetStore extends Store<ICarpet, CarpetModel> {
  items = new Map<string, CarpetModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }
  load(items: ICarpet[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new CarpetModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}



