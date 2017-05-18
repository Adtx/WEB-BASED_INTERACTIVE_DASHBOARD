import { MenuType, ItemInfo } from './sidebar.metadata';
import { ChartComponent } from '../dashboard/chart/chart.component';
import { TwitterComponent } from '../dashboard/twitter/twitter.component';

export const ITEMS: any[] = [
    { path: 'dashboard', title: 'Gráfico', menuType: MenuType.LEFT, icon: 'pe-7s-graph3', widgetType: ChartComponent },
    //{ path: 'notifications', title: 'Notificações', menuType: MenuType.LEFT, icon:'pe-7s-bell' },
    { path: '', title: 'Twitter', menuType: MenuType.LEFT, icon:'pe-7s-angle-left-circle', widgetType: TwitterComponent}
    /*{ path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'table', title: 'Table List', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'pe-7s-science' },
    { path: 'maps', title: 'Maps', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    { path: 'upgrade', title: 'Upgrade to PRO', menuType: MenuType.LEFT, icon:'pe-7s-rocket' }*/
];
