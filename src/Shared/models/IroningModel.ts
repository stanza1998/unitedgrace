import { makeAutoObservable } from "mobx";
import react from "react"
import { IIroning } from "../Interface/IIroning";
import AppStore from "../stores/AppStore";


export class IroningModel implements IIroning {
    id: string;
    title: string;
    price: number;
    description: string;

    constructor(private store: AppStore, private indoor: IIroning) {
        makeAutoObservable(this)
        this.id = indoor.id;
        this.title = indoor.title;
        this.price = indoor.price;
        this.description = indoor.description
    }

    get asJson(): IIroning {

        return {
            id: this.id,
            title: this.title,
            price: this.price,
            description: this.description
        }
    }

}