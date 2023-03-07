import react from "react"
import { makeAutoObservable, makeObservable, runInAction } from "mobx";
import AppStore from "../AppStore";
import Store from "../store";
import { SupplierModel } from "../../models/SupplierModel";
import { ISuppliers } from "../../Interface/ISupplier";


export default class SupplierStore extends Store<ISuppliers, SupplierModel> {
  items = new Map<string, SupplierModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }
  load(items: ISuppliers[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new SupplierModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}



