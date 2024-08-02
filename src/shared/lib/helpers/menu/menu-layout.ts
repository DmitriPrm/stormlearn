import {appRoutes} from "@/shared/lib/helpers/navigation/routes";

export const MenuLayoutConfig = [
    {
        title: "Главная",
        active: true,
        path: appRoutes.MAIN.path,
    },
    {
        title: "Курсы",
        path: appRoutes.COURSES.path,
    },
    {
        title: "Статистика",
        path: appRoutes.STATISTICS.path,
    },
    {
        title: "Календарь",
        path: appRoutes.CALENDAR.path,
    }
];