import { makeObservable, runInAction } from "mobx";
import react from "react"
import { IEmployee } from "../../Interface/IEmployee";
import { EmployeeModel } from "../../models/Employee";
import AppStore from "../AppStore";
import Store from "../store";



export default class EmployeeStore extends Store<IEmployee, EmployeeModel> {
 
 
 
    items = new Map<string, EmployeeModel>();
    currentUser: EmployeeModel | null = null;
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
  
    load(items: IEmployee[] = []) {
      runInAction(() => {
        items.forEach((item) =>
          this.items.set(item.id, new EmployeeModel(this.store, item))
        );
      });
    }
  
    loadCurrentUser(item: IEmployee) {
      runInAction(() => {
        this.currentUser = new EmployeeModel(this.store, item);
      });
    }
  
    removeCurrentUser() {
      runInAction(() => {
        this.currentUser = null;
      });
    }
  }
  