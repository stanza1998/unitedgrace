import react from "react"
import { makeAutoObservable } from "mobx"
import AppStore from "../stores/AppStore"
import { IBox } from "../Interface/IBox"


export class BoxModel implements IBox {
    id: string
    title: string
    products: string[]
    imgUrl: string
    price: number



    constructor(private store: AppStore, box: IBox) {
        makeAutoObservable(this);
        this.id = box.id;
        this.title = box.title;
        this.products = box.products;
        this.imgUrl = box.imgUrl;
        this.price = box.price

    }

    get asJson(): IBox {
        return {
            id: this.id,
            title: this.title,
            products: this.products,
            imgUrl: this.imgUrl,
            price: this.price
        }

    }

}