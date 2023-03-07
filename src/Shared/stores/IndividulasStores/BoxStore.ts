import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../store";
import { IBox } from "../../Interface/IBox";
import { BoxModel } from "../../models/BoxModel";



export default class BoxStore extends Store<IBox, BoxModel> {
  items = new Map<string, BoxModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }

  load(items: IBox[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new BoxModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}



