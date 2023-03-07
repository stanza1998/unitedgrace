import react from "react"



export interface IDriver {
    id: string;
    name: string;
    surname: string;
    imgUrl: string;
}




export const defaultDriver: IDriver = {
    id: "",
    name: "",
    surname: "",
    imgUrl: ""
}

