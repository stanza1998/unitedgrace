import react from "react"
import { IProduct } from "./IProduct";

export interface Item {
    productName: string;
    productQty: number;
    productUnitCost: number;
    productUnitAmount: number;
}

export interface IInvoice {
    clientName: string;
    clientId: string;
    currentLocation: string;
    invoiceId: string;
    items: IProduct[];
    totalPrice: number;
    deliveryFees: number
}

export const defaultInvoice: IInvoice = {
    clientName: "",
    clientId: "",
    currentLocation: "",
    invoiceId: "",
    totalPrice: 0,
    deliveryFees: 0,
    items: []
}