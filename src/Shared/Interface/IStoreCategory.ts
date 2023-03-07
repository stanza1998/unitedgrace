import react from "react"


export const defaultCategory: IStoreCategory = {
    id: "",
    categoryName: "",
    imgUrl: ""
}

export interface IStoreCategory {
    id: string;
    categoryName: string;
    imgUrl: string;
}

