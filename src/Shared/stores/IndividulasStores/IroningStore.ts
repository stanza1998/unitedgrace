import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../store";
import { IIroning } from "../../Interface/IIroning";
import { IroningModel } from "../../models/IroningModel";



export default class IroningStore extends Store<IIroning, IroningModel> {
  items = new Map<string, IroningModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }
  load(items: IIroning[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new IroningModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}



