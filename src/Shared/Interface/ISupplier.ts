import react from "react"



export interface ISuppliers {
    id: string;
    companyName: string;
    businessIndustry: string;
    supplierNumber: string;
    email: string;
    phone: number;
    location: string;
}

export const defaultSupplier: ISuppliers = {
    id: "",
    companyName: "",
    businessIndustry: "",
    supplierNumber: "",
    email: "",
    phone: 0,
    location: ""
}





