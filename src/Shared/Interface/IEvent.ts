import react from "react"



export interface IEvent {
    id: string;
    imgUrl: string
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    vanue: string;

}




export const defaultEvent: IEvent = {
    id: "",
    imgUrl: "",
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    vanue: ""
}

