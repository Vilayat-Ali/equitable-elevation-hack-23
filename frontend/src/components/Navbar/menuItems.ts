// lib
import { type IconType } from "react-icons";

// icons
import { BiSolidDashboard } from "react-icons/bi";

export interface MenuItem {
    icon: IconType;
    title: string;
    url: string;
}

const MenuItems: MenuItem[] = [
    {
        icon: BiSolidDashboard,
        title: "Community",
        url: "/",
    },
    {
        icon: BiSolidDashboard,
        title: "About",
        url: "/about",
    }
];

export default MenuItems;