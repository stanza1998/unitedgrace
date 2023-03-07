import { makeObservable, runInAction } from "mobx";
import reac from "react"
import { ICartItem } from "../../Interface/ICartItem";
import { CartModel } from "../../models/CartModel";
import AppStore from "../AppStore";
import Store from "../store";




export default class CartStore extends Store<ICartItem, CartModel>{
  items = new Map<string, CartModel>();

  constructor(store: AppStore) {
    super(store)
    makeObservable(this, {
      items: true,
      selected: true,
    });
    this.store = store;
  }

  load(items: ICartItem[] = []) {
    runInAction(() => {
      items.forEach((item) =>
        this.items.set(item.cartId, new CartModel(this.store, item))
      );
    });
  }

  getById(id: string) {
    return this.items.get(id);
  }

}