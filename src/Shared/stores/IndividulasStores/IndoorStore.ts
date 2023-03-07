import { makeObservable, runInAction } from "mobx";
import reac from "react"
import { IIndoor } from "../../Interface/IIndoor";
import { IndoorModel } from "../../models/IndoorModel";
import AppStore from "../AppStore";
import Store from "../store";


export default class IndoorStore extends Store<IIndoor, IndoorModel>{
  items = new Map<string, IndoorModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }

  load(items: IIndoor[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new IndoorModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}