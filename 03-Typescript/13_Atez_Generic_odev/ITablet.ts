import { ISmartPhone } from "./ISmartPhone"

interface ITablet extends ISmartPhone {
    cellular: boolean;
    wifi: boolean;
}

