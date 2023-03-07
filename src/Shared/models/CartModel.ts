import { makeAutoObservable } from "mobx";
import react from "react"
import { StringLiteral } from "typescript";
import { ICartItem } from "../Interface/ICartItem";
import AppStore from "../stores/AppStore";


export class CartModel implements ICartItem {
    ;

    cartId: string
    productName: string;
    productQty: number;
    productUnitCost: number;
    productUnitAmount: number;

    constructor(private store: AppStore, private cart: ICartItem) {
        makeAutoObservable(this)
        this.cartId = cart.cartId
        this.productName = cart.productName;
        this.productQty = cart.productQty;
        this.productUnitCost = cart.productUnitCost;
        this.productUnitAmount = cart.productUnitAmount;
    }

    get asJson(): ICartItem {

        return {
            cartId: this.cartId,
            productName: this.productName,
            productQty: this.productQty,
            productUnitCost: this.productUnitCost,
            productUnitAmount: this.productUnitAmount
        }
    }

}