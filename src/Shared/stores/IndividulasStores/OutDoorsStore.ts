import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../store";
import { IOutdoor } from "../../Interface/IOutdoors";
import { OutdoorModel } from "../../models/OutdoorModel";



export default class OutdoorStore extends Store<IOutdoor, OutdoorModel> {
  items = new Map<string, OutdoorModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }
  load(items: IOutdoor[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new OutdoorModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}



