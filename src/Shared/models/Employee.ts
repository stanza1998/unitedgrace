import { makeAutoObservable } from "mobx";
import { IEmployee } from "../Interface/IEmployee";
import AppStore from "../stores/AppStore";

export class EmployeeModel implements IEmployee {
    id:string;
    name:string;
    surname:string;
    speciality: string;
    rating: number;
    experienceOnAge: number;
    available: boolean;
    imgUrl: string;

    constructor(private store: AppStore, employee:IEmployee){
      makeAutoObservable(this)
      this.id  = employee.id;
      this.name = employee.name;
      this.surname = employee.surname;
      this.speciality = employee.speciality;
      this.rating = employee.rating;
      this.experienceOnAge = employee.experienceOnAge;
      this.available = employee.available;
      this.imgUrl = employee.imgUrl;
 

    }


    get asJson(): IEmployee {
        return {
            id: this.id,
            name: this.name,
            surname:  this.surname,
            speciality:  this.speciality,
            rating:  this.rating,
            experienceOnAge:  this.experienceOnAge,
            available:  this.available, 
            imgUrl: this.imgUrl
        }
    }

}