import { makeAutoObservable } from "mobx";
import react from "react"
import { IMattress } from "../Interface/IMattress";

import AppStore from "../stores/AppStore";


export class MattressModel implements IMattress {
    id: string;
    title: string;
    price: number;
    description: string;

    constructor(private store: AppStore, private indoor: IMattress) {
        makeAutoObservable(this)
        this.id = indoor.id;
        this.title = indoor.title;
        this.price = indoor.price;
        this.description = indoor.description
    }

    get asJson(): IMattress {

        return {
            id: this.id,
            title: this.title,
            price: this.price,
            description: this.description
        }
    }

}