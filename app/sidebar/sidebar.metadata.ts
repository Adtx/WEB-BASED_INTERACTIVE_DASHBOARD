export enum MenuType {
    BRAND,
    LEFT,
    RIGHT
}

export interface ItemInfo {
    path: string;
    title: string;
    menuType: MenuType;
    icon: string;
    widgetType: string;
}
