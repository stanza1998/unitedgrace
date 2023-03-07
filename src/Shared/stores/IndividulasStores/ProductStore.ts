import { makeObservable, runInAction } from "mobx";
import { IProduct } from "../../Interface/IProduct";
import { ProductModel } from "../../models/ProductModel";
import AppStore from "../AppStore";
import Store from "../store";




export default class ProductStore extends Store<IProduct, ProductModel> {
  items = new Map<string, ProductModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    })
    this.store = store;
  }


  load(items: IProduct[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.id, new ProductModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }


}