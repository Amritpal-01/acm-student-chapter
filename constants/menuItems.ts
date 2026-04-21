import { menuItemType } from "@/types/type";
import { contactRoute, applicationRoute, aboutRoute, studenthubRoute, eventsRoute } from "./routes";
import { CalendarIcon, CodeIcon, InfoIcon, MessageSquareDotIcon, TerminalIcon, UserPlusIcon, UsersIcon } from "lucide-react";

const menuItems: menuItemType[] = [
  {
    name: "application",
    icon: UserPlusIcon ,
    url: applicationRoute
  },
  {
    name: "about",
    icon: InfoIcon ,
    url: aboutRoute
  },
]

export default menuItems;