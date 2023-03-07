import react from "react"


export const defaultLaundry: ILaundry = {
    id: "",
    img: "",
    title: "",
    price: 0,
    description: ""
}

export interface ILaundry {
    id: string
    img: string;
    title: string;
    price: number;
    description: string;
}