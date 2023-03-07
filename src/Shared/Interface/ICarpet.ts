import react from "react"


export const defaultCarpet:ICarpet = {
    id: "",
    title: "",
    price: 0,
    description: ""
}

export interface ICarpet {
    id:string;
    title:string;
    price:number;
    description:string;
}



