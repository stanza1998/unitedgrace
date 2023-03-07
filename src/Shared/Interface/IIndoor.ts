import react from "react"


export const defaultIndoor: IIndoor = {
    id: "",
    img: "",
    title: "",
    price: 0,
    description: ""
}

export interface IIndoor {
    id: string;
    img: string;
    title: string;
    price: number;
    description: string;
}