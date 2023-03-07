import { makeObservable, runInAction } from "mobx";
import react from "react"
import { IUser } from "../../Interface/IUser";
import { UserModel } from "../../models/User";
import AppStore from "../AppStore";
import Store from "../store";



export default class UserStore extends Store<IUser, UserModel> {
  
    items = new Map<string, UserModel>();
    currentUser: UserModel | null = null;
    loading: boolean = true;
  
  
    
    constructor(store: AppStore) {
      super(store);
      makeObservable(this, {
        items: true,
        selected: true,
        currentUser: true,
        loading: true,
      });
      this.store = store;
    }
  
    load(items: IUser[] = []) {
      runInAction(() => {
        items.forEach((item) =>
          this.items.set(item.uid, new UserModel(this.store, item))
        );
      });
    }
  
    loadCurrentUser(item: IUser) {
      runInAction(() => {
        this.currentUser = new UserModel(this.store, item);
      });
    }
  
    removeCurrentUser() {
      runInAction(() => {
        this.currentUser = null;
      });
    }
  }
  