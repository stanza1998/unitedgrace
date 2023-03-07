export interface ICartItem {
    cartId:string;
    productName: string;
    productQty: number;
    productUnitCost: number;
    productUnitAmount: number;
}




export const defaultItem:ICartItem={
    productName: "",
    productQty: 0,
    productUnitCost: 0,
    productUnitAmount: 0,
    cartId: ""
}