import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import { IBanner } from "../../Interface/IBanner";
import { BannerModel } from "../../models/Banner";
import AppStore from "../AppStore";
import Store from "../store";



export default class BannerStore extends Store<IBanner, BannerModel> {
  items = new Map<string, BannerModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }

  load(items: IBanner[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new BannerModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}



