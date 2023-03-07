import react from "react"

import {  makeObservable, runInAction } from "mobx";
import { IStoreCategory } from "../../Interface/IStoreCategory";
import Store from "../store";
import { StoreCategoryModel } from "../../models/StoreCategoryModel";
import AppStore from "../AppStore";





export default class StoreCategory extends Store<IStoreCategory, StoreCategoryModel> {
  items = new Map<string, StoreCategoryModel>();


  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }
  load(items: IStoreCategory[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new StoreCategoryModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}
