import react from "react"
import { makeAutoObservable } from "mobx";

import AppStore from "../stores/AppStore";
import { ISofa } from "../Interface/ISofa";


export class SofaModel implements ISofa {
    id: string;
    title: string;
    img: string;
    price: number;
    description: string;

    constructor(private store: AppStore, private indoor: ISofa) {
        makeAutoObservable(this)
        this.id = indoor.id;
        this.img = indoor.img;
        this.title = indoor.title;
        this.price = indoor.price;
        this.description = indoor.description
    }

    get asJson(): ISofa {

        return {
            id: this.id,
            img: this.img,
            title: this.title,
            price: this.price,
            description: this.description
        }
    }

}