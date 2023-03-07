import react from "react"


export const defaultProduct: IProduct = {
    id: "",
    name: "",
    qty: 0,
    category: "",
    price: 0,
    imgUrl: ""
}

export interface IProduct{
 id:string;
 name:string;
 qty:number;
 category:string;
 price:number;
 imgUrl:string
 
}