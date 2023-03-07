import { runInAction } from "mobx";
import AppStore from "./AppStore";



export default abstract class Store<Type, Model> {
  items = new Map<string, Model>();
  selected: Type | null = null;
  protected store: AppStore;

  constructor(store: AppStore) {
    this.store = store;
  }

  remove(id: string) {
    runInAction(() => {
      if (this.items.has(id)) this.items.delete(id);
    });
  }


  removeAll() {
    runInAction(() => {
      this.items.clear();
    });
  }

  select(item: Type) {
    runInAction(() => {
      this.selected = item;
    });
  }

  clearSelected() {
    runInAction(() => {
      this.selected = null;
    });
  }

  get all() {
    return Array.from(this.items.values());
  }

  get size() {
    return this.items.size;
  }
}
