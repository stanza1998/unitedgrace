import react from "react"

export const defaultBox: IBox = {
    id: "",
    title: "",
    imgUrl: "",
    products: [],
    price: 0
}

export interface IBox {
    id: string
    title: string;
    products: string[];
    imgUrl: string;
    price: number;
}