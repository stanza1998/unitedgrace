import React, { createContext, useContext } from "react";
import { AppApi } from "../Shared/Apis/AppApi";
import AppStore from "../Shared/stores/AppStore";

// Context to contain device width
export const DeviceWidthContext = createContext(0);

interface AppContextType {
    store: AppStore;
    api: AppApi;

}

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContextType;
};

export const AppContext = createContext<null | AppContextType>(null);
