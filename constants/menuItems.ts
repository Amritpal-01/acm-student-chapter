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
    name: "events",
    icon: CalendarIcon ,
    url: eventsRoute
  },
  {
    name: "about",
    icon: InfoIcon ,
    url: aboutRoute
  },
  {
    name: "contact",
    icon: MessageSquareDotIcon ,
    url: contactRoute
  },
]

export default menuItems;