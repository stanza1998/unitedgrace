import { makeAutoObservable } from "mobx";
import react from "react"
import { IProduct } from "../Interface/IProduct";
import AppStore from "../stores/AppStore";

export class ProductModel implements IProduct{
    id: string;
    name: string;
    qty: number;
    category: string;
    price: number;
    imgUrl:string

    constructor(private store: AppStore, product: IProduct ) {
        makeAutoObservable(this);
        this.id = product.id;
        this.name = product.name;
        this.qty = product.qty;
        this.price = product.price;
        this.category = product.category;
        this.imgUrl = product.imgUrl
    }

    get asJson(): IProduct {
        return {
            id: this.id,
            name: this.name,
            qty: this.qty,
            price: this.price,
            category: this.category,
            imgUrl: this.imgUrl
        }
    }

}