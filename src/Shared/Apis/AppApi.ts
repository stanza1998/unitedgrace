import { CollectionsOutlined } from "@mui/icons-material";
import { collection } from "firebase/firestore";
import React from "react"
import { db } from "../../firebase";
import { UserAPI } from "./IndividualApis/UserAPI"
import AppStore from "../stores/AppStore";
import BannerApi from "./IndividualApis/BannerApi";
import ProductApi from "./IndividualApis/ProductApi";
import StoreCategoryApi from "./IndividualApis/StoreCategoryApi";
import IndoorApi from "./IndividualApis/IndoorApi";
import LaundryApi from "./IndividualApis/LaundryApi";
import SofaApi from "./IndividualApis/SofaApi";
import CarpetApi from "./IndividualApis/CarpetApi";
import MattressApi from "./IndividualApis/MattressApi";
import OutdoorApi from "./IndividualApis/OutdoorApi";
import IroningApi from "./IndividualApis/IroningApi";
import InvoiceApi from "./IndividualApis/InvoiceApi";
import CartApi from "./IndividualApis/CartApi";
import EmployeeApi from "./IndividualApis/EmployeeApi";
import SupplierApi from "./IndividualApis/Supplier";
import DriverApi from "./IndividualApis/DriverApi";
import BoxApi from "./IndividualApis/BoxApi";

export class AppApi {
  // private mailUri = `${process.env.PUBLIC_URL}/php-mailer/mail.php?`;
  private messageUri = "https://www.lotsinsights.com/php/twilio/kosha.php?";
  //  private mailUri = "https://namcor.unicomms.app/mail_php/kosha.php?";

  private mailUri = "https://www.koshaservices.com/php/wash.php?";



  private bannerDb = collection(db, "Banner");
  private catergoryDb = collection(db, "Catergory")
  private productDb = collection(db, "Product")
  private indoorDb = collection(db, "Indoor")
  private laundryDb = collection(db, "Laundry")
  private sofaDb = collection(db, "Sofa")
  private carpetDb = collection(db, "Carpet")
  private mattressDb = collection(db, "Mattress")
  private outDoorDb = collection(db, "Outdoor")
  private ironingDb = collection(db, "Iron")
  private userDb = collection(db, "Users");
  private invoiceDb = collection(db, "Invoice")
  private cartDb = collection(db, "Invoice")
  private employeeDb = collection(db, "Employee");
  private supplierDb = collection(db, "Suppliers");
  private driverDb = collection(db, "Drivers");
  private boxDb = collection(db, "Boxes")

  auth: UserAPI;
  banner: BannerApi;
  category: StoreCategoryApi;
  product: ProductApi;
  indoor: IndoorApi;
  laundry: LaundryApi;
  sofa: SofaApi;
  carpet: CarpetApi;
  mattress: MattressApi;
  outdoor: OutdoorApi;
  ironing: IroningApi;
  invoice: InvoiceApi;
  cart: CartApi;
  employee: EmployeeApi;
  supplier: SupplierApi;
  driver: DriverApi;
  box: BoxApi;

  constructor(private store: AppStore) {
    this.auth = new UserAPI(this, this.store, this.userDb);
    this.banner = new BannerApi(this, this.store, this.bannerDb)
    this.category = new StoreCategoryApi(this, this.store, this.catergoryDb)
    this.product = new ProductApi(this, this.store, this.productDb)
    this.laundry = new LaundryApi(this, this.store, this.laundryDb)
    this.indoor = new IndoorApi(this, this.store, this.indoorDb)
    this.sofa = new SofaApi(this, this.store, this.sofaDb)
    this.carpet = new CarpetApi(this, this.store, this.carpetDb);
    this.mattress = new MattressApi(this, this.store, this.mattressDb)
    this.outdoor = new OutdoorApi(this, this.store, this.outDoorDb)
    this.ironing = new IroningApi(this, this.store, this.ironingDb);
    this.invoice = new InvoiceApi(this, this.store, this.invoiceDb);
    this.cart = new CartApi(this, this.store, this.cartDb);
    this.employee = new EmployeeApi(this, this.store, this.employeeDb);
    this.supplier = new SupplierApi(this, this.store, this.supplierDb);
    this.driver = new DriverApi(this, this.store, this.driverDb);
    this.box = new BoxApi(this, this.store, this.boxDb);
  }
}

