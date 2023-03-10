import { makeAutoObservable } from "mobx";
import { ITestimonial } from "../Interface/ITestimonials";
import AppStore from "../stores/AppStore";

export class TestimonialModel implements ITestimonial {
    id: string;
    imgUrl: string;
    name: string;
    testimonial: string;



    constructor(private store: AppStore, test: ITestimonial) {
        makeAutoObservable(this)
        this.id = test.id;
        this.imgUrl = test.imgUrl;
        this.name = test.name;
        this.testimonial = test.testimonial;
    }


    get asJson(): ITestimonial {
        return {
            id: this.id,
            imgUrl: this.imgUrl,
            name: this.name,
            testimonial: this.testimonial
        }
    }

}