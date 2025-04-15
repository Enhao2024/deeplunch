import {
  CheckSquare,
  Clipboard,
  DollarSign,
  Github,
  Grid,
  Heart,
  Home,
  Icon,
  Lambda,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  Share,
  Zap,
  Codepen
} from "@geist-ui/icons";
import { AppConfig } from "./AppConfig";

export enum MenuTitle {
  HOME = "Home",
  DASHBOARD = "Dashboard",
  GIT_REPO = "GitHub",
  CHAT_ROOM = "Chat Room",
  LUNCH_GUESS = "Food Map",
  CONTACT = "Contact",
  DONATE = "Donate",
  ABOUT = "About Us",
  LUNCH_RECIPE = "Try New Recipe",
  AFTER_WORK_PLAN = "Todos After Work",
  AFTERNOON_PLAN = "Todos AfterNoon",
  WEEKEND_PLAN = "Weekend Plans",
  LEARNING = "Learning",
  NEXT_WEEK_PLAN = "Todes Next Week",
  ROADMAP = "RoadMap",
  PLANNER = "Planner",
  THANKS = "Thanks",
  MEDITATION = "Meditation",
  BRAINSTORM="BrainStorm"
}

export interface Menu {
  title: MenuTitle;
  href: string;
  golive: boolean;
  icon: Icon;
}

export const MenuConfig: { [key: string]: Menu } = {
  [MenuTitle.HOME]: {
    title: MenuTitle.HOME,
    href: "/",
    golive: true,
    icon: Home,
  },
  [MenuTitle.ROADMAP]: {
    title: MenuTitle.ROADMAP,
    href: "/roadmap",
    golive: true,
    icon: Lambda,
  },
  [MenuTitle.PLANNER]: {
    title: MenuTitle.PLANNER,
    href: "/planner",
    golive: true,
    icon: CheckSquare,
  },
  [MenuTitle.THANKS]: {
    title: MenuTitle.THANKS,
    href: "/thanks",
    golive: true,
    icon: Heart,
  },
  [MenuTitle.GIT_REPO]: {
    title: MenuTitle.GIT_REPO,
    href: AppConfig.gitRepo,
    golive: true,
    icon: Github,
  },
  [MenuTitle.DASHBOARD]: {
    title: MenuTitle.DASHBOARD,
    href: "/dashboard",
    golive: true,
    icon: Grid,
  },
  [MenuTitle.LUNCH_RECIPE]: {
    title: MenuTitle.LUNCH_RECIPE,
    href: "/recipe",
    golive: false,
    icon: Clipboard,
  },
  [MenuTitle.AFTER_WORK_PLAN]: {
    title: MenuTitle.AFTER_WORK_PLAN,
    href: "/after_work_plan",
    golive: false,
    icon: CheckSquare,
  },
  [MenuTitle.AFTERNOON_PLAN]: {
    title: MenuTitle.AFTERNOON_PLAN,
    href: "/afternoon_plan",
    golive: false,
    icon: CheckSquare,
  },
  [MenuTitle.WEEKEND_PLAN]: {
    title: MenuTitle.WEEKEND_PLAN,
    href: "/weekend_plan",
    golive: false,
    icon: CheckSquare,
  },
  [MenuTitle.LEARNING]: {
    title: MenuTitle.LEARNING,
    href: "/learning",
    golive: false,
    icon: Zap,
  },
  [MenuTitle.NEXT_WEEK_PLAN]: {
    title: MenuTitle.NEXT_WEEK_PLAN,
    href: "/next_week_plan",
    golive: false,
    icon: CheckSquare,
  },
  [MenuTitle.CHAT_ROOM]: {
    title: MenuTitle.CHAT_ROOM,
    href: "/chatroom",
    golive: false,
    icon: MessageSquare,
  },
  [MenuTitle.ABOUT]: {
    title: MenuTitle.ABOUT,
    href: "/about",
    golive: true,
    icon: Linkedin,
  },
  [MenuTitle.LUNCH_GUESS]: {
    title: MenuTitle.LUNCH_GUESS,
    href: "/lunch",
    golive: true,
    icon: MapPin,
  },
  [MenuTitle.CONTACT]: {
    title: MenuTitle.CONTACT,
    href: "/contact",
    golive: true,
    icon: Mail,
  },
  [MenuTitle.DONATE]: {
    title: MenuTitle.DONATE,
    href: "/donate",
    golive: false,
    icon: DollarSign,
  },
  [MenuTitle.MEDITATION]: {
    title: MenuTitle.MEDITATION,
    href: "/meditation",
    golive: false,
    icon: Moon,
  },
  [MenuTitle.BRAINSTORM]: {
    title: MenuTitle.BRAINSTORM,
    href: "/brainstorm",
    golive: true,
    icon: Codepen,
  },
};

export const TOP_BAR_MENU = [
  MenuConfig[MenuTitle.HOME],
  MenuConfig[MenuTitle.DASHBOARD],
  MenuConfig[MenuTitle.GIT_REPO],
  MenuConfig[MenuTitle.ROADMAP],
  MenuConfig[MenuTitle.THANKS],
  MenuConfig[MenuTitle.ABOUT],
  MenuConfig[MenuTitle.CONTACT],
];

export const LEFT_BAR_MENU = [
  MenuConfig[MenuTitle.DASHBOARD],
  MenuConfig[MenuTitle.LUNCH_GUESS],
  MenuConfig[MenuTitle.PLANNER],
  MenuConfig[MenuTitle.BRAINSTORM],
  MenuConfig[MenuTitle.MEDITATION],
  MenuConfig[MenuTitle.LEARNING],
  MenuConfig[MenuTitle.CHAT_ROOM],
];

export const MOBILE_LEFT_BAR_MENU = [
  MenuConfig[MenuTitle.HOME],
  MenuConfig[MenuTitle.DASHBOARD],
  MenuConfig[MenuTitle.ROADMAP],
  MenuConfig[MenuTitle.LUNCH_GUESS],
  MenuConfig[MenuTitle.PLANNER],
  MenuConfig[MenuTitle.BRAINSTORM],
  MenuConfig[MenuTitle.MEDITATION],
  MenuConfig[MenuTitle.LEARNING],
  MenuConfig[MenuTitle.CHAT_ROOM],
  MenuConfig[MenuTitle.GIT_REPO],
  MenuConfig[MenuTitle.THANKS],
  MenuConfig[MenuTitle.ABOUT],
  MenuConfig[MenuTitle.CONTACT],
];
export const PROTECTED_PAGE = [
  MenuConfig[MenuTitle.DASHBOARD],
  MenuConfig[MenuTitle.LUNCH_GUESS],
  MenuConfig[MenuTitle.PLANNER],
  MenuConfig[MenuTitle.MEDITATION],
  MenuConfig[MenuTitle.LEARNING],
  MenuConfig[MenuTitle.CHAT_ROOM],
];

export const NON_FUNCTIONAL_PAGE = [
  MenuConfig[MenuTitle.HOME],
  MenuConfig[MenuTitle.CONTACT],
  MenuConfig[MenuTitle.DONATE],
  MenuConfig[MenuTitle.ABOUT],
  MenuConfig[MenuTitle.ROADMAP],
  MenuConfig[MenuTitle.THANKS],
];
