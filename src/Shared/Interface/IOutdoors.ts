import react from "react"


export const defaultOutDoor: IOutdoor = {
    id: "",
    img: "",
    title: "",
    price: 0,
    description: ""
}

export interface IOutdoor {
    id: string;
    img: string;
    title: string;
    price: number;
    description: string;
}