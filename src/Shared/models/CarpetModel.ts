import { makeAutoObservable } from "mobx";
import react from "react"
import { ICarpet } from "../Interface/ICarpet";
import AppStore from "../stores/AppStore";


export class CarpetModel implements ICarpet {
    id: string;
    title: string;
    price: number;
    description: string;

    constructor(private store: AppStore, private indoor: ICarpet) {
        makeAutoObservable(this)
        this.id = indoor.id;
        this.title = indoor.title;
        this.price = indoor.price;
        this.description = indoor.description
    }

    get asJson(): ICarpet {

        return {
            id: this.id,
            title: this.title,
            price: this.price,
            description: this.description
        }
    }

}