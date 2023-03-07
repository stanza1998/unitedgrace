import react from "react"



export interface IEmployee {
    id: string;
    name: string;
    surname: string;
    speciality: string;
    rating: number;
    experienceOnAge: number;
    available: boolean;
    imgUrl: string;
}




export const defaultStaff: IEmployee = {
    id: "",
    name: "",
    surname: "",
    speciality: "",
    rating: 0,
    experienceOnAge: 0,
    available: true,
    imgUrl: ""
}

