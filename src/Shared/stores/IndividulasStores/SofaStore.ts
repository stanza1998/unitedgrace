import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../store";
import { ISofa } from "../../Interface/ISofa";
import { SofaModel } from "../../models/SofaModel";



export default class SofaStore extends Store<ISofa, SofaModel> {
  items = new Map<string, SofaModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }
  load(items: ISofa[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new SofaModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}



