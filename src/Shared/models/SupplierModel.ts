import react from "react"
import { makeAutoObservable } from "mobx";

import AppStore from "../stores/AppStore";
import { ISuppliers } from "../Interface/ISupplier";


export class SupplierModel implements ISuppliers {
    id: string;
    companyName: string;
    businessIndustry: string;
    supplierNumber: string;
    email: string;
    phone: number;
    location: string;


    constructor(private store: AppStore, private supplier: ISuppliers) {
        makeAutoObservable(this)
        this.id = supplier.id;
        this.companyName = supplier.companyName;
        this.businessIndustry = supplier.businessIndustry;
        this.supplierNumber = supplier.supplierNumber;
        this.email = supplier.email;
        this.phone = supplier.phone;
        this.location = supplier.location;
    }


    get asJson(): ISuppliers {

        return {
            id: this.id,
            companyName: this.companyName,
            businessIndustry: this.businessIndustry,
            supplierNumber: this.supplierNumber,
            email: this.email,
            phone: this.phone,
            location: this.location
        }
    }
}