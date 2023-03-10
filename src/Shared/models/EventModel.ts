import { makeAutoObservable } from "mobx";
import { IEvent } from "../Interface/IEvent";
import AppStore from "../stores/AppStore";

export class EventModel implements IEvent {
    id: string;
    imgUrl: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    vanue: string;



    constructor(private store: AppStore, event: IEvent) {
        makeAutoObservable(this)
        this.id = event.id;
        this.imgUrl = event.imgUrl;
        this.title = event.title;
        this.startDate = event.startDate;
        this.endDate = event.endDate;
        this.description = event.description;
        this.vanue = event.vanue;
    }

    get asJson(): IEvent {
        return {
            id: this.id,
            imgUrl: this.imgUrl,
            title: this.title,
            startDate: this.startDate,
            endDate: this.endDate,
            description: this.description,
            vanue: this.vanue
        }
    }

}