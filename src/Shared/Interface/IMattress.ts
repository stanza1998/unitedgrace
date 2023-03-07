import react from "react"


export const defaultMattress:IMattress = {
    id: "",
    title: "",
    price: 0,
    description: ""
}

export interface IMattress {
    id:string;
    title:string;
    price:number;
    description:string;
}