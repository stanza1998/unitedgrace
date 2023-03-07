import react from "react"
import { makeAutoObservable } from "mobx";

import AppStore from "../stores/AppStore";
import { IDriver } from "../Interface/IDriver";


export class DriverModel implements IDriver {
    id: string;
    name: string;
    surname: string;
    imgUrl: string;



    constructor(private store: AppStore, private driver: IDriver) {
        makeAutoObservable(this)
        this.id = driver.id;
        this.name = driver.name;
        this.surname = driver.surname;
        this.imgUrl = driver.imgUrl;
    }


    get asJson(): IDriver {

        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            imgUrl: this.imgUrl
        }
    }
}