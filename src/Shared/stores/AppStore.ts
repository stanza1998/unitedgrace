import AuthStore from "./IndividulasStores/AuthStore";
import EventStore from "./IndividulasStores/EventStore";
import ProductStore from "./IndividulasStores/ProductStore";
import StoreCategory from "./IndividulasStores/StoreCategory";
import TestimonialStore from "./IndividulasStores/TestimonialStore";
import TrinityStore from "./IndividulasStores/TrinityStore";
import UserStore from "./IndividulasStores/UserStore";


export default class AppStore {
  auth = new AuthStore(this);
  user = new UserStore(this);
  category = new StoreCategory(this);
  product = new ProductStore(this);
  event = new EventStore(this);
  test = new TestimonialStore(this);
  trinity = new TrinityStore(this);
}

