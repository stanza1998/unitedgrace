import react from "react"
import { makeAutoObservable } from "mobx"
import AppStore from "../stores/AppStore"
import { IStoreCategory } from "../Interface/IStoreCategory"
import { threadId } from "worker_threads"


export class StoreCategoryModel implements IStoreCategory {
    id: string
    categoryName: string
    imgUrl: string




    constructor(private store: AppStore, category: IStoreCategory) {
        makeAutoObservable(this);
        
        this.id = category.id;
        this.categoryName = category.categoryName;
        this.imgUrl = category.imgUrl;

    }

    get asJson(): IStoreCategory {
        return {
            id: this.id,
            categoryName: this.categoryName,
            imgUrl: this.imgUrl
        }

    }

}