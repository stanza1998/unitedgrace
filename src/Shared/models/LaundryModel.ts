import { makeAutoObservable } from "mobx";
import react from "react"
import { ILaundry } from "../Interface/ILaundry";
import AppStore from "../stores/AppStore";


export class LaundryModel implements ILaundry {
    id: string
    title: string;
    price: number;
    description: string;
    img: string

    constructor(private store: AppStore, laundry: ILaundry) {
        makeAutoObservable(this);
        this.id = laundry.id;
        this.title = laundry.title;
        this.price = laundry.price;
        this.description = laundry.description;
        this.img = laundry.img
    }

    get asJson(): ILaundry {

        return {
            id: this.id,
            img: this.img,
            title: this.title,
            price: this.price,
            description: this.description
        }
    }

}