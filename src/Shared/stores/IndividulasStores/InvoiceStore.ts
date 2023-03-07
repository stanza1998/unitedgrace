import { runInAction } from "mobx";
import react from "react"
import { IInvoice } from "../../Interface/IInvoice";
import { InvoiceModel } from "../../models/Invoice";
import AppStore from "../AppStore";
import Store from "../store";

export default class InvoiceStore extends Store<IInvoice, InvoiceModel>{
    items = new Map<string, InvoiceModel>();

    constructor( store: AppStore){
       super(store)
       this.store = store;
    }

    load(items: IInvoice[] = []) {
       runInAction(() => {
         items.forEach((item) =>
           this.items.set(item.invoiceId, new InvoiceModel(this.store, item))
         );
       });
     }

     getById(id: string) {
       return this.items.get(id);
     }

}