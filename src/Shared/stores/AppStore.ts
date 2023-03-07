import AuthStore from "./IndividulasStores/AuthStore";
import BannerStore from "./IndividulasStores/BannerStore";
import BoxStore from "./IndividulasStores/BoxStore";
import CarpetStore from "./IndividulasStores/CarpetStore";
import CartStore from "./IndividulasStores/CartStore";
import DriverStore from "./IndividulasStores/DriverStore";
import EmployeeStore from "./IndividulasStores/EmployeeStore";
import IndoorStore from "./IndividulasStores/IndoorStore";
import InvoiceStore from "./IndividulasStores/InvoiceStore";
import IroningStore from "./IndividulasStores/IroningStore";
import LaundryStore from "./IndividulasStores/LaundryStore";
import MattressStore from "./IndividulasStores/MattressStore";
import OutdoorStore from "./IndividulasStores/OutDoorsStore";
import ProductStore from "./IndividulasStores/ProductStore";
import SofaStore from "./IndividulasStores/SofaStore";
import StoreCategory from "./IndividulasStores/StoreCategory";
import SupplierStore from "./IndividulasStores/SupplierStore";
import UserStore from "./IndividulasStores/UserStore";


export default class AppStore {
  supplier = new SupplierStore(this);
  auth = new AuthStore(this);
  user = new UserStore(this);
  banner = new BannerStore(this);
  category = new StoreCategory(this);
  product = new ProductStore(this);
  indoor = new IndoorStore(this);
  laundry = new LaundryStore(this);
  sofa = new SofaStore(this);
  carpet = new CarpetStore(this);
  mattress = new MattressStore(this);
  ironing = new IroningStore(this);
  outdoor = new OutdoorStore(this);
  invoice = new InvoiceStore(this);
  cart = new CartStore(this);
  employee = new EmployeeStore(this);
  driver = new DriverStore(this);
  box = new BoxStore(this);
}

