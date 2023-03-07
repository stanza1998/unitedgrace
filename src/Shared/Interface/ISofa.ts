import react from "react"

export const defaultSofa:ISofa = {
    id: "",
    title: "",
    img: "",
    price: 0,
    description: ""
}

export interface ISofa{
    id:string;
    img: string;
    title:string;
    price:number;
    description:string;
}

