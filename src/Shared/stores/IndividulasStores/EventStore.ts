import { makeObservable, runInAction } from "mobx";
import react from "react"
import { IEvent } from "../../Interface/IEvent";
import { EventModel } from "../../models/EventModel";
import AppStore from "../AppStore";
import Store from "../store";



export default class EventStore extends Store<IEvent, EventModel> {
 
 
 
    items = new Map<string, EventModel>();
    currentUser: EventModel | null = null;
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
  
    load(items: IEvent[] = []) {
      runInAction(() => {
        items.forEach((item) =>
          this.items.set(item.id, new EventModel(this.store, item))
        );
      });
    }
  
    loadCurrentUser(item: IEvent) {
      runInAction(() => {
        this.currentUser = new EventModel(this.store, item);
      });
    }
  
    removeCurrentUser() {
      runInAction(() => {
        this.currentUser = null;
      });
    }
  }
  