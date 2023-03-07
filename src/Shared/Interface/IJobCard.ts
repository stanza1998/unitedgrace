
export interface RatingIndoorBedroom {
    rate1: number;
    rate2: number;
    rate3: number;
    rate4: number;
    rate5: number;
    rate6: number;
}
export interface RatingIndoorBathroom {
    rate1: number;
    rate2: number;
    rate3: number;
    rate4: number;
    rate5: number;
    rate6: number;
    rate7: number;
}
export interface RatingIndoorLivingRoomsCorridorsOpenAreas {
    rate1: number;
    rate2: number;
    rate3: number;
    rate4: number;
    rate5: number;
    rate6: number;
}
export interface RatingIndoorKitchen {
    rate1: number;
    rate2: number;
    rate3: number;
    rate4: number;
    rate5: number;
    rate6: number;
    rate7: number;
}

export interface BedRooms {
    mopFloor: boolean;
    organizeWardobe: boolean;
    changeSheet: boolean;
    sweepUnderTheNed: boolean;
    cleanMirrors: boolean;
    wipeWallsAndPlugs: boolean;
    floorCleaner: boolean;
    surfaceCleaner: boolean;
    windowCleaner: boolean;
    bleach: boolean;
    rating: RatingIndoorBedroom;
}


export interface BathRooms {
    mopFloor: boolean;
    organizeBowlAndSink: boolean;
    cleanTaps: boolean;
    BathTubAndTiledWalls: boolean;
    WipeMirros: boolean;
    WshShowerMatsAndCurtains: boolean;
    OrgainizeCosmetics: boolean;
    floorCleaner: boolean;
    scaleRemoverAndBleach: boolean;
    scaleRemoverAndBleach2: boolean;
    bleach: boolean;
    windowCleaner: boolean;
    washingPowderAndBleach: boolean;
    ratingIndoorBathroom: RatingIndoorBathroom;
}

export interface LivingRoomsCorridorsOpenAreas {
    mopFloor: boolean;
    arrangeLoungeArea: boolean;
    wipeCupboards: boolean;
    cleanUnderSofasAndCarpets: boolean;
    wipeSofas: boolean;
    wipeWallsAndPlugs: boolean;
    floorCleaner: boolean;
    woodOilSurfaceCleaner: boolean;
    carpetShampoo: boolean;
    woodOilSofaCreamBleach: boolean;
    bleach: boolean;
    ratingIndoorLivingRoomsCorridorsOpenAreas: RatingIndoorLivingRoomsCorridorsOpenAreas
}

export interface Kitchen {
    MopFloor: boolean;
    cleanSinkAndWashDishes: boolean;
    wipeSurfacesAndOrganizeCupboards: boolean;
    cleanOvenAndHood: boolean;
    takeOutTrashAndReplaceBags: boolean;
    cleanFridgeAndMicrowave: boolean;
    cleanWallsAndPlug: boolean;
    floorCleaner: boolean;
    scaleRemoverAndBleach: boolean;
    handyAndyAndAmmonia: boolean;
    ovenCleanerAndBakingSoda: boolean;
    handyAndy: boolean;
    bleach: boolean;
    ratingIndoorKitchen: RatingIndoorKitchen;
}

export interface IndoorSpace {
    bedRoom: BedRooms;
    bathRoom: BathRooms;
    livingRoomsCorridorsOpenAreas: LivingRoomsCorridorsOpenAreas
    kitchen: Kitchen;
}


export interface RatingBathroomYardLandscapingPavements {

}
export interface RatingBathroomWindow {

}
export interface RatingBathroomGarageBraaiAreaFurnitureBalconyVeranda {

}
export interface RatingOutCar {

}

export interface YardLandscapingPavements {
    rakeAndWeed: boolean;
    plantCare: boolean;
    washPavement: boolean;
    removeWatseRocksLeaves: boolean;
    lawnCare: boolean;
    landScape: boolean;
    rakeSpade: boolean;
    shovelGardeningScissors: boolean;
    hosePipe: boolean;
    plasticBags: boolean;
    lawnMower: boolean;
    spadeShovel: boolean;
}

export interface Window {
    cleanLowHangingWindows: boolean;
    cleanHighHangingWindows: boolean;
    WindowSequeegeeNappiesNewspapers: boolean;
    WindowSequeegeeNappiesNewspapersLadder: boolean;
}

export interface GarageBraaiAreaFurnitureBalconyVeranda {
    organizeGarageMopFloors: boolean;
    cleanBraaiAreaRemoveAsh: boolean;
    cleanOutsideFurniture: boolean;
    mopBalconyVerandaFloor: boolean;
    floorCleaner: boolean;
    brushBraaiCleanerPlastic: boolean;
    cloth: boolean;
    floorCleaner2: boolean;
}

export interface Car {
    washOursideCar: boolean;
    wipeInsideCar: boolean;
    vacuumInsideCar: boolean;
    Service: boolean;
    lemonCleanerBucketHosePipe: boolean;
    scaleRemoverBleach: boolean;
    carSurfaceSpray: boolean;
    serviceKit: boolean;
}


export interface OutdoorSpace {
    yardLandscapingPavements: YardLandscapingPavements;
    widnow: Window;
    GarageBraaiAreaFurnitureBalconyVeranda: GarageBraaiAreaFurnitureBalconyVeranda;
    car: Car;
}


export interface IServices {
    name: string;
    quantity: number;
    price: number;
}


export interface IJobCard {
    id: string;
    bookingRequestedDate: string;
    bookingComplettionDate: string;
    fullName: string;
    cell: number;
    email: string;
    suburb: string;
    services: IServices | any;
    totalPrice: number
    indoorSpace: IndoorSpace;
    outdoorSpace: OutdoorSpace;
}


