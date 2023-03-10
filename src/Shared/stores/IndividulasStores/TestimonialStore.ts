import { makeObservable, runInAction } from "mobx";
import react from "react"
import { ITestimonial } from "../../Interface/ITestimonials";
import { TestimonialModel } from "../../models/TestimonialModel";
import AppStore from "../AppStore";
import Store from "../store";



export default class TestimonialStore extends Store<ITestimonial, TestimonialModel
> {
 
 
 
    items = new Map<string, TestimonialModel
    >();
    currentUser: TestimonialModel
     | null = null;
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
  
    load(items: ITestimonial[] = []) {
      runInAction(() => {
        items.forEach((item) =>
          this.items.set(item.id, new TestimonialModel
            (this.store, item))
        );
      });
    }
  
    loadCurrentUser(item: ITestimonial) {
      runInAction(() => {
        this.currentUser = new TestimonialModel
        (this.store, item);
      });
    }
  
    removeCurrentUser() {
      runInAction(() => {
        this.currentUser = null;
      });
    }
  }
  