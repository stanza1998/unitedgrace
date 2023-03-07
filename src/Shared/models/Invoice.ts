import { makeAutoObservable } from "mobx";
import react from "react"
import { IIndoor } from "../Interface/IIndoor";
import { IInvoice, Item } from "../Interface/IInvoice";
import { IProduct } from "../Interface/IProduct";
import AppStore from "../stores/AppStore";

export class InvoiceModel implements IInvoice {

    clientName: string;
    clientId: string;
    currentLocation: string;
    invoiceId: string;
    items: IProduct[];
    totalPrice: number;
    deliveryFees: number

    constructor(private store: AppStore, private invoice: IInvoice) {
        makeAutoObservable(this)
        this.clientId = invoice.clientId;
        this.clientName = invoice.clientName;
        this.currentLocation = invoice.currentLocation;
        this.invoiceId = invoice.invoiceId;
        this.items = invoice.items;
        this.totalPrice = invoice.totalPrice;
        this.deliveryFees = invoice.deliveryFees
    }

    get asJson(): IInvoice {

        return {
            clientId: this.clientId,
            clientName: this.clientName,
            currentLocation: this.currentLocation,
            invoiceId: this.invoiceId,
            items: this.items,
            totalPrice: this.totalPrice,
            deliveryFees: this.deliveryFees
        }
    }

}