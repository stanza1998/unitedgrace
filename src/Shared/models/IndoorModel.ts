import { makeAutoObservable } from "mobx";
import react from "react"
import { IIndoor } from "../Interface/IIndoor";
import AppStore from "../stores/AppStore";


export class IndoorModel implements IIndoor {
    id: string;
    img: string;
    title: string;
    price: number;
    description: string;

    constructor(private store: AppStore, private indoor: IIndoor) {
        makeAutoObservable(this)
        this.id = indoor.id;
        this.img = indoor.img;
        this.title = indoor.title;
        this.price = indoor.price;
        this.description = indoor.description
    }

    get asJson(): IIndoor {

        return {
            id: this.id,
            img: this.img,
            title: this.title,
            price: this.price,
            description: this.description
        }
    }

}