import { makeAutoObservable } from "mobx";
import react from "react"
import { IOutdoor } from "../Interface/IOutdoors";

import AppStore from "../stores/AppStore";


export class OutdoorModel implements IOutdoor {
    id: string;
    img: string;
    title: string;
    price: number;
    description: string;

    constructor(private store: AppStore, private indoor: IOutdoor) {
        makeAutoObservable(this)
        this.id = indoor.id;
        this.img = indoor.img;
        this.title = indoor.title;
        this.price = indoor.price;
        this.description = indoor.description
    }

    get asJson(): IOutdoor {

        return {
            id: this.id,
            img: this.img,
            title: this.title,
            price: this.price,
            description: this.description
        }
    }

}