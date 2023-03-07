import react from "react"
import { makeAutoObservable } from "mobx"
import AppStore from "../stores/AppStore"
import { IBanner } from "../Interface/IBanner"


export class BannerModel implements IBanner {
    id: string
    title: string
    description: string
    link:string
    imgUrl:string


    constructor(private store: AppStore, banner: IBanner) {
        makeAutoObservable(this);
        this.id = banner.id;
        this.title = banner.title;
        this.description = banner.description;
        this.link = banner.link;
        this.imgUrl = banner.imgUrl
    }

    get asJson(): IBanner {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            link: this.title,
            imgUrl: this.imgUrl

        }

    }

}