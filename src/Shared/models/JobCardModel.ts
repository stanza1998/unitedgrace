import react from "react"
import { makeAutoObservable } from "mobx";

import AppStore from "../stores/AppStore";
import { IJobCard, IndoorSpace, OutdoorSpace } from "../Interface/IJobCard";


export class JobCardModel implements IJobCard {
    id: string;
    bookingRequestedDate: string;
    bookingComplettionDate: string;
    fullName: string;
    cell: number;
    email: string;
    suburb: string;
    services: any;
    totalPrice: number;
    indoorSpace: IndoorSpace;
    outdoorSpace: OutdoorSpace;


    constructor(private store: AppStore, private job: IJobCard) {
        makeAutoObservable(this)
        this.id = job.id;
        this.bookingRequestedDate = job.bookingRequestedDate;
        this.bookingComplettionDate = job.bookingComplettionDate;
        this.fullName = job.fullName;
        this.cell = job.cell;
        this.email = job.email;
        this.suburb = job.suburb;
        this.services = job.services;
        this.totalPrice = job.totalPrice;
        this.indoorSpace = job.indoorSpace;
        this.outdoorSpace = job.outdoorSpace;
    }

    get asJson(): IJobCard {

        return {
            id: this.id,
            bookingRequestedDate: this.bookingRequestedDate,
            bookingComplettionDate: this.bookingComplettionDate,
            fullName: this.fullName,
            cell: this.cell,
            email: this.email,
            suburb: this.suburb,
            services: this.services,
            totalPrice: this.totalPrice,
            indoorSpace: this.indoorSpace,
            outdoorSpace: this.outdoorSpace

        }
    }

}