import { CollectionsOutlined } from "@mui/icons-material";
import { collection } from "firebase/firestore";
import React from "react"
import { db } from "../../firebase";
import { UserAPI } from "./IndividualApis/UserAPI"
import AppStore from "../stores/AppStore";
import ProductApi from "./IndividualApis/ProductApi";
import StoreCategoryApi from "./IndividualApis/StoreCategoryApi";
import EventApi from "./IndividualApis/EventApi";
import TestimonialApi from "./IndividualApis/Testimonial";
import TrinityApi from "./IndividualApis/TrinityApi";

export class AppApi {

  private catergoryDb = collection(db, "Catergory")
  private productDb = collection(db, "Product")
  private userDb = collection(db, "Users");
  private eventDb = collection(db, "Events");
  private testtDb = collection(db, "Testimonials");
  private trinityDb = collection(db, "Trinity")

  auth: UserAPI;
  category: StoreCategoryApi;
  product: ProductApi;
  event: EventApi;
  test: TestimonialApi;
  trinity: TrinityApi;

  constructor(private store: AppStore) {
    this.auth = new UserAPI(this, this.store, this.userDb);
    this.category = new StoreCategoryApi(this, this.store, this.catergoryDb)
    this.product = new ProductApi(this, this.store, this.productDb)
    this.event = new EventApi(this, this.store, this.eventDb);
    this.test = new TestimonialApi(this, this.store, this.testtDb);
    this.trinity = new TrinityApi(this, this.store, this.trinityDb)
  }
}

