import react from "react"



export interface ITestimonial {
    id: string;
    imgUrl: string
    name: string;
    testimonial: string;

}




export const defaultTest: ITestimonial = {
    id: "",
    imgUrl: "",
    name: "",
    testimonial: ""
}

