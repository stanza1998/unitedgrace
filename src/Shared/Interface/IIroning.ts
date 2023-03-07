import react from "react"


export const defaultIroning:IIroning = {
    id: "",
    title: "",
    price: 0,
    description: ""
}

export interface IIroning {
    id:string;
    title:string;
    price:number;
    description:string;
}