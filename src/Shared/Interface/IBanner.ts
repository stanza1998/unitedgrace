import react from "react"

export const defaultBanner: IBanner = {
    id: "",
    title: "",
    description: "",
    link: "",
    imgUrl:""
}

export interface IBanner {
    id: string
    title: string;
    description: string;
    link: string;
    imgUrl:string;
}